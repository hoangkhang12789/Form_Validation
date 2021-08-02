$(document).ready(function () {
    $("button").click(function () {
        var userName = $('#userName').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var errms = "";
        const checkMail = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
        const checkPhone = new RegExp("(^0[1-9]{9})$");
        if (userName.length == 0) {
            errms += "User Name not null <br>";

        }
        if (password.length == 0) {
            errms += "Password not null <br>"
        }
        if (confirmPassword.length == 0 || password != confirmPassword) {
            errms += "Password doesn't match <br>"
        }
        if (!checkMail.test(email)) {
            errms += "Wrong email format <br> "
        }
        if (!checkPhone.test(phone)) {
            errms += "Wrong phone format <br>"
        }

        if (errms != "") {
            $(".err").html(errms);
            $(".err").css("color", "red");
        } else {
            $(".err").html("Successfully");
            $(".err").css("color", "green");
        }


    });
});
$(document).ready(function () {
    $(".userErr").hide();
    $(".passErr").hide();
    $(".cpassErr").hide();
    $(".mailErr").hide();
    $(".phoneErr").hide();
    $("#userName").blur(function () {
        var userName = $('#userName').val();
        if (userName.length == 0) {
            $(".userErr").show();
            $(".userErr").html("User Name not null");
            $(".userErr").css("color", "red");
        } else {
            $(".userErr").hide();
        }

    });
    $("#password").blur(function () {
        var password = $('#password').val();
        if (password.length == 0) {
            $(".passErr").show();
            $(".passErr").html("Password not null");
            $(".passErr").css("color", "red");
        } else {
            $(".passErr").hide();
        }

    });
    $("#confirmPassword").blur(function () {
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();
        if (confirmPassword.length == 0 || password != confirmPassword) {
            $(".cpassErr").show();
            $(".cpassErr").html("Password doesn't match");
            $(".cpassErr").css("color", "red");
        } else {
            $(".cpassErr").hide();
        }

    });
    $("#email").blur(function () {
        var email = $('#email').val();
        const checkMail = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");

        if (!checkMail.test(email)) {
            $(".mailErr").show();
            $(".mailErr").html("Wrong email format ");
            $(".mailErr").css("color", "red");
        } else {
            $(".mailErr").hide();
        }

    });
    $("#phone").blur(function () {
        var phone = $('#phone').val();
        const checkPhone = new RegExp("(^0[1-9]{9})$");

        if (!checkPhone.test(phone)) {
            $(".phoneErr").show();
            $(".phoneErr").html("Wrong phone format");
            $(".phoneErr").css("color", "red");
        } else {
            $(".phoneErr").hide();
        }

    });
});