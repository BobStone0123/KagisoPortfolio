
(function(){
    emailjs.init("jK6xBAwZ6v3J2KwzS"); 
})();
function showPopupMessage(message, isSuccess = true) {
    const popup = document.getElementById('popup-message');
    popup.innerText = message;
    popup.style.backgroundColor = isSuccess ? '#28a745' : '#dc3545'; // Green or red
    popup.style.display = 'block';
    popup.style.opacity = '1';

    setTimeout(() => {
        popup.style.opacity = '0';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300); // match transition time
    }, 4000); // show for 3 seconds
}
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_0i8y748', 'template_iwde5gf', this)
        .then(function(response) {
            showPopupMessage('✅ Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            showPopupMessage('❌ Failed to send message. Please try again later.', false);
            console.error('EmailJS error:', error);
        });
});
