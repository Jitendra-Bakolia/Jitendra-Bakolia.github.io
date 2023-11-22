//& This method for know display size . . .  Start
$("#submitButtonTest").click(() => {
    console.log("🙈 🙉 🙊 Line 4 ~  :  ");
  
    // Using jQuery for the AJAX request
    $.ajax({
      url: 'https://jiten.tech/communication/send-email-to-developer',
      type: 'GET', // Change to 'POST' if needed
      contentType: 'application/json',
      // If you need to send data, use the data property
      // data: JSON.stringify(requestData),
      success: function (data) {
        console.log('Server response:', data);
        // Handle the response data as needed
      },
      error: function (error) {
        console.error('Error during AJAX request:', error);
        // Handle errors
      }
    });
  
  
  })