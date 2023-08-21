function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // You can add form validation here if needed

    // Compose the email link
    var subject = "Message from " + name;
    var body = encodeURIComponent(message);
    var emailLink = "mailto:mahambadominic0@gmail.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + body;

    // Open the user's email client with the pre-filled email draft
    window.location.href = emailLink;
}
