function validateGender() {
    var status = true;
    var female = document.querySelector("#rdFemale").checked;
    var male = document.querySelector("#rdMale").checked;
    var genderErrorIdWalaSmallTag = document.querySelector("#genderError");
    if (female == false && male == false) {
        status = false;
        genderErrorIdWalaSmallTag.innerHTML = "please select gender";
    }
    else
        genderErrorIdWalaSmallTag.innerHTML = "";
    return status;
}
function validateQualification() {
    var status = true;
    var qualification = document.querySelector("#qualification").value;
    var qulificationError = document.querySelector("#qualificationError");
    if (qualification == "0") {
        qulificationError.innerHTML = "please select qualification";
        status = false;
    }
    else
        qulificationError.innerHTML = "";
    return status;
}
function validateEmail() {
    var status = true;
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");
    if (email.length == 0) {
        status = false;
        emailError.innerHTML = "Email id is required";
    }
    else {
        let atTheRateIndex = email.indexOf("@");
        if (atTheRateIndex == -1) {
            status = false;
            emailError.innerHTML = "Invalid email (@ not present)";
            return status;
        }
        let lastIndexOfAtTheRate = email.lastIndexOf("@");
        if (atTheRateIndex != lastIndexOfAtTheRate) {
            status = false;
            emailError.innerHTML = "Invalid email ( 2 @ present)";
            return status;
        }

        let stringAfterAtTheRate = email.substring(atTheRateIndex);
        let dotIndex = stringAfterAtTheRate.lastIndexOf(".");
        if (dotIndex == -1) {
            status = false;
            emailError.innerHTML = "Invalid email ( . not present)";
            return status;
        }

        let domainString = stringAfterAtTheRate.substring(dotIndex);
        if (!(domainString == ".in" || domainString == ".com")) {
            status = false;
            emailError.innerHTML = "Invalid email ( .in or .com not present)";
            return status;
        }

        if (email.charAt(0) == '@') {
            status = false;
            emailError.innerHTML = "Invalid email ( starting with @)";
            return status;
        }

        emailError.innerHTML = "";
    }
    return status;
}
function validateMobile() {
    var status = true;
    var mobile = document.getElementById("mobile").value;
    var mobileError = document.getElementById("mobileError");
    if (mobile.length == 0) {
        status = false;
        mobileError.innerHTML = "mobile is required";
    }
    else if (isNaN(mobile)) {
        status = false;
        mobileError.innerHTML = "Only digits are allowed";
    }
    else if (mobile.length != 10) {
        status = false;
        mobileError.innerHTML = "Invalid mobile number";
    }
    else
        mobileError.innerHTML = "";
    return status;
}
function togglePassword(currentButtonObject) {
    var buttonText = currentButtonObject.innerText;
    var passwordInput = document.getElementById("password");
    if (buttonText == "Show password") {
        passwordInput.type = "text";
        currentButtonObject.innerText = "Hide password";
    }
    else if (buttonText == "Hide password") {
        passwordInput.type = "password";
        currentButtonObject.innerText = "Show password";
    }
}
function validatePassword() {
    var status = true;
    var password = document.getElementById("password").value;
    var passwordError = document.getElementById("passwordError");
    if (password.length == 0) {
        status = false;
        passwordError.innerHTML = "password is required";
    }
    else if (password.length < 6 || password.length > 10) {
        status = false;
        passwordError.innerHTML = "password must be between 6 to 10";
    }
    else
        passwordError.innerHTML = "";

    return status;
}
function validateUsername() {
    var status = true;
    var username = document.getElementById("username").value;
    var usernameError = document.getElementById("usernameError");

    if (username.length == 0) {
        status = false;
        usernameError.innerHTML = "username is required";
        usernameError.style.color = "red";
    }
    else
        usernameError.innerHTML = "";
    return status;
}
function validateForm() {
    var usernameStatus = validateUsername();
    var passwordStatus = validatePassword();
    var mobileStatus = validateMobile();
    var emailStatus = validateEmail();
    var qualificationStatus = validateQualification();
    var genderStatus = validateGender();
    if (usernameStatus && passwordStatus && mobileStatus && emailStatus && qualificationStatus && genderStatus)
        return true;
    return false;
}
