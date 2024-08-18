function formValidation() {
  if (document.myForm.name.value == "") {
    document.getElementById("nmessage").innerHTML = "Name is required";
    return false;
  }
  if (document.myForm.phone.value == "") {
    document.getElementById("pmessage").innerHTML = "Phone is required";
    return false;
  }
  if (document.myForm.address.value == "") {
    document.getElementById("amessage").innerHTML = "Address is required";
    return false;
  }
  if (isNaN(document.myForm.phone.value)) {
    document.getElementById("pmessage").innerHTML =
      "Phone number should be numeric";
    return false;
  }
  if (document.myForm.phone.value.length <= 10) {
    document.getElementById("pmessage").innerHTML =
      "Phone number should be 10 or more";
    return false;
  }
}

function seePassword() {
  var z = document.getElementById("password");
  if (z.type == "password") {
    z.type = "text";
  } else {
    z.type = "password";
  }
}
