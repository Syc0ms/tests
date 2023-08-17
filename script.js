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

$(document).ready(function() {
    $("#contact-form").submit(function(event) {
        event.preventDefault(); // Prevent the default form submission
	    console.log("asdasd")

        var formData = $(this).serialize(); // Serialize the form data

        $.ajax({
            type: "POST",
            url: "mail.php",
            data: formData,
            dataType: "html",
            success: function(response) {
                // Handle the response here, e.g., show a message to the user
                alert(response);
            }
        });
    });
});
