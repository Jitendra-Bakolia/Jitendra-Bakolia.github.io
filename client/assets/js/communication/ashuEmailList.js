$(document).ready(function () {
    
    $.ajax({
        url: path.SERVER + path.COMMUNICATION + `/fetch-ashu--email-list`,
        type: 'GET',
        contentType: 'application/json',
        processData: false,
        contentType: false,
        success: function (data) {
            if (data && data.emails.length > 0) {
                $("#emailAshuList").empty()
                for (let index = 0; index < data.emails.length; index++) {
                    const email = data.emails[index];
                    email.createdAt = new Date(email.createdAt);
                    $("#emailAshuList").append(`
                                            <li class="mb-3">
                                                <strong>Name : </strong> ${email.name} <br>
                                                <strong>Email : </strong> <a href="mailto:${email.email}">${email.email}</a> <br> 
                                                <strong>Message : </strong> ${email.message} <br>
                                                <strong>Time : </strong> ${email.createdAt.toLocaleString()} <br>
                                            </li>`);
                }
            }
        },
        error: function (error) {
            console.log(`🙈 🙉 🙊 ~ file: emailAshuList.js:16 ~ error : `, error)
            toastr.remove();
            toastr.error(error.responseJSON.message);
        }
    });
});