$(document).ready(function(){
    $('input.timepicker').timepicker({});
});
var recaptcha_response = '';
function submitUserForm() {
	if(recaptcha_response.length == 0) {
		document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This field is required.</span>';
		return false;
	}
	return true;
}

function verifyCaptcha(token) {
	recaptcha_response = token;
	document.getElementById('g-recaptcha-error').innerHTML = '';
}


// function submitUserForm() {
//     var firstName = document.querySelector('input[name="firstName"]').value;
//     var lastName = document.querySelector('input[name="lastName"]').value;
//     var phone = document.querySelector('input[name="phone"]').value;
//     var ext = document.querySelector('input[name="ext"]').value;
//     var email = document.querySelector('input[name="email"]').value;

//     var formData = new FormData();
//     formData.append('firstName', firstName);
//     formData.append('lastName', lastName);
//     formData.append('phone', phone);
//     formData.append('ext', ext);
//     formData.append('email', email);

    
//     fetch('mail.php', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.text())
//     .then(data => {
//         // Process the response from the PHP script if needed
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
//     return false;
// }

