const url = "https://hooks.zapier.com/hooks/catch/8129734/ok9i4d4/"
const data = {
    name: "John Doe",
    email: "cbpoot@gmail.com",
    message: "Hello World",
    subject: "Test message"
}

$('#myForm.genric-btn').click(
    () => {
        $post(url, data, (data, status) => {
            console.log('${data} and status is ${status}')
        })
    }
)