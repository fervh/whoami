/**
    * Mail sending function
*/

function sendMail(event) {
    event.preventDefault();

    const name = encodeURIComponent(document.getElementById('name').value.trim());
    const email = encodeURIComponent(document.getElementById('email').value.trim());
    const subjectInput = document.getElementById('subject').value.trim();
    const message = encodeURIComponent(document.getElementById('message').value.trim());

    const subject = encodeURIComponent(subjectInput !== "" 
        ? subjectInput 
        : "Contact regarding your portfolio and potential collaboration");

    const body = encodeURIComponent(
        `${decodeURIComponent(message)}` +
        `\n\n---\n` +
        `Name: ${decodeURIComponent(name)}\n` +
        `Email: ${decodeURIComponent(email)}\n\n`
    );

    const mailtoLink = `mailto:velahidalgofernando@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
}