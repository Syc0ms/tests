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

function submitUserForm() {
    // Perform form validation here if needed

    // Get form data
    const formData = new FormData(document.getElementById('contact-form'));

    // Send form data to server-side script
    fetch('mail.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        console.log(result);
        // Optionally, display a success message to the user
    })
    .catch(error => {
        console.error('Error:', error);
        // Optionally, display an error message to the user
    });

    return false; // Prevent the default form submission
}
