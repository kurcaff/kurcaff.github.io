var prevVal = [0]
var operatorVal = []
var newVal = []
var resultVal = []


$("button").click(function(){
    var input = this.innerText;
    var inputId = this.id;
    numbers(input);
    operators(input, inputId);
    logic(input, inputId);
    clear(input);
    cleanText(input, inputId);
})

//Converting All Strings Into Numbers
function numbers(input) {
    if(input == "1"){
        newVal.push(1)
    } else if(input == "2"){
        newVal.push(2)
    } else if(input == "3"){
        newVal.push(3)
    } else if(input == "4"){
        newVal.push(4)
    } else if(input == "5"){
        newVal.push(5)
    } else if(input == "6"){
        newVal.push(6)
    } else if(input == "7"){
        newVal.push(7)
    } else if(input == "8"){
        newVal.push(8)
    } else if(input == "9"){
        newVal.push(9)
    } else if(input == "0"){
        newVal.push(0)
    }
}

//Creating Operators
function operators(input, inputId) {
    if(input == "+") {
        operatorVal.push("+")
        if (prevVal == 0 ){
            prevVal = newVal;
            newVal = []
        }
    } else if(input == "-") {
        operatorVal.push("-")
        if (prevVal == 0 ){
            prevVal = newVal;
            newVal = []
        }
    } else if(input == "x") {
        operatorVal.push("x")
        if (prevVal == 0 ){
            prevVal = newVal;
            newVal = []
        }
    } else if(inputId == "divide") {
        operatorVal.push("/")
        if (prevVal == 0 ){
            prevVal = newVal;
            newVal = []
        }
    } else if(inputId == "modulo") {
        operatorVal.push("%")
        if (prevVal == 0 ){
            prevVal = newVal;
            newVal = []
        }
    }
}

//Getting Result
function logic(input) {
    if(input == "=" && prevVal.length >= 1 && newVal.length >= 1) {
        if (operatorVal[operatorVal.length -1] == "+") {
            resultVal.push(prevVal[prevVal.length - 1] + newVal[newVal.length - 1])
            $("h1").text(resultVal)
            emptying()
        } else if (operatorVal[operatorVal.length -1] == "-") {
            resultVal.push(prevVal[prevVal.length - 1] - newVal[newVal.length - 1])
            $("h1").text(resultVal)
            emptying()
        } else if (operatorVal[operatorVal.length -1] == "x") {
            resultVal.push(prevVal[prevVal.length - 1] * newVal[newVal.length - 1])
            $("h1").text(resultVal)
            emptying()
        } else if (operatorVal[operatorVal.length -1] == "/") {
            resultVal.push(prevVal[prevVal.length - 1] / newVal[newVal.length - 1])
            $("h1").text(resultVal)
            emptying()
        } else if (operatorVal[operatorVal.length -1] == "%") {
            resultVal.push(prevVal[prevVal.length - 1] % newVal[newVal.length - 1])
            $("h1").text(resultVal)
            emptying()
        }
    }
}

// C button
function clear(input) {
    if (input == "C") {
        $("h1").text(0)
        $("p").text("")
        prevVal = []
        newVal = []
        operatorVal = []
        resultVal = []
    }
}

// Emptying All Arrays After Result
function emptying() {
    $("h1").text(resultVal)
    prevVal = resultVal
    operatorVal = []
    newVal = []
    resultVal = []
}

// Removing Unnecessary Text From Display
function cleanText(input, inputId) {
if (prevVal.length >= 1 && newVal.length >= 1 && operatorVal.length >= 1) {
    $("p").text(prevVal[prevVal.length - 1] + " " + operatorVal[operatorVal.length - 1]  + " " + newVal[newVal.length - 1])
    } else if(prevVal.length >= 1) {
    $("p").text(prevVal[prevVal.length - 1])
}
if (input != "=" && input != "C") {
    if (input == 0) {
        if(inputId == "divide") {
            $("h1").text("/");   
        } else if(inputId == "modulo") {
            $("h1").text("%");   
        }
    } else {
        $("h1").text(input);   
    }
}
}

//Try using number.input

//Try calculator can take more then one-digit numbers

//Try another event listener pushing in newVal2[] & add newVal + newVal2 