// -------   Mail Send ajax

$(document).ready(function () {
    var form = $('#myForm'); // contact form
    var submit = $('.submit-btn'); // submit button
    var alert = $('.alert-msg'); // alert div for show alert message

    // form submit event
    form.on('submit', function (e) {
        e.preventDefault(); // prevent default form submit

        $.ajax({
            url: "https://hooks.zapier.com/hooks/catch/8129734/ok9i4d4/", // form action url
            type: 'POST', // form submit method get/post
            dataType: 'html', // request type html/json/xml
            data: form.serialize(), // serialize form data
            beforeSend: function () {
                alert.fadeOut();
                submit.html('Sending....'); // change submit button text
            },
            success: function (data) {
                alert.html(data['status']).fadeIn(); // fade in response data
                form.trigger('reset'); // reset form
                submit.attr("style", "display: none !important");; // reset submit button text
                console.log('${data} and status is ${status}');
            },
            error: function (e) {
                console.log(e)
            }
        });
    });
});