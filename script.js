$(document).ready(function(){
var senderName = $(".name").val();
var senderEmail = $(".from").val();
var messageBody = $(".message").val();    
$("button").click(sendEmail);

function sendEmail() {
    Email.send({
        // Host : "smtp.yourisp.com",
        // Username : "username",
        // Password : "password",
        To : 'contact.soumikdas@gmail.com',
        From : senderEmail,
        Subject : "Email from your portfolio",
        Body : messageBody}).then( message => alert(message));
}

});