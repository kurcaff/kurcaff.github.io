function sendMail(params) {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phoneNumber');
    const location = document.getElementById('location');

    if (firstName.value !== '' && lastName.value !== '' && email.value !== '' && phoneNumber.value !== '' && location.value !== '') {
    var tempParams = {
        first_name: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phone_number: document.getElementById("phoneNumber").value,
        location: document.getElementById("location").value,
    };
    emailjs.send("service_n1oo4vx", "template_5v2t1rk",tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
        setTimeout(() => {
        window.location = ""
    }, 1000);
}
}

$(".image-text-header").hide().fadeIn();
$(".header-paragraph").hide().fadeIn(1000);
$(".image-text-btn").hide().fadeIn(1500);
// $("h1").hide();
// $("h1").show();
// $("h1").fadeOut();
// $("h1").fadeIn();
// $("h1").fadeToggle();
// $("h1").slideDown();
// $("h1").slideUp();
// $("h1").slideToggle();
