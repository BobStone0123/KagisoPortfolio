
(function(){
    emailjs.init("jK6xBAwZ6v3J2KwzS"); 
})();
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_0i8y748', 'template_iwde5gf', this)
        .then(function(response) {
            alert('✅ Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('❌ Failed to send message. Error: ' + JSON.stringify(error));
        });
});
