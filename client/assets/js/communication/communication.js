//& This method for know display size . . .  Start


// Send email to developer for validation and submit event handler
$("#emailSendToDeveloper").validate({
  rules: {
    // Specify validation rules for form fields
    senderName: {
      required: true,
      // maxlength: 25
    },
    senderEmail: {
      required: true,
      // number: true,
      // min: 0,
      // maxlength: 10
    },
    senderSubject: {
      required: true,
    },
    senderMessage: {
      required: true
    }
  },
  messages: {
    // Specify error messages for your form fields
    senderName: {
      required: formMessage.ENTER_NAME,
    },
    senderEmail: {
      required: formMessage.ENTER_EMAIL,
    },
    senderSubject: {
      required: formMessage.ENTER_SUBJECT,
    },
    senderMessage: {
      required: formMessage.ENTER_MESSAGE
    }
  },
  errorClass: "invalid-field",
  errorElement: "span",
  highlight: function (element, errorClass) { $(element).removeClass(errorClass) },
  submitHandler: function () {
    // If the form is valid, you can submit it here
    sendEmailToDeveloper()
  }
});

function sendEmailToDeveloper() {
  // toastr.remove();
  // toastr.success("Message testing . . . ");
  // toastr.info("Message testing . . . ");
  // toastr.error("Message testing . . . ");
  // toastr.warning("Message testing . . . ");

  let data = {
    name: $("#senderName").val(),
    email: $("#senderEmail").val(),
    subject: $("#senderSubject").val(),
    message: $("#senderMessage").val(),
  }

  // Using jQuery for the AJAX request
  $.ajax({
    url: path.SERVER + path.COMMUNICATION + '/send-email-to-developer',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function (data) {
      console.log('Server response:', data);
      toastr.remove();
      toastr.success(data.message);
      $("#emailSendToDeveloper")[0].reset();
    },
    error: function (error) {
      toastr.remove();
      toastr.error(error.responseJSON.message);
      console.error('Server error : ', error);
    }
  });
}