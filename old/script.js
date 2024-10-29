document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    alert('Thank you for contacting me!');

    e.target.reset();
    const submitButton = e.target.querySelector('button[type="submit"]');
    submitButton.innerText = 'Message Sent!';
    setTimeout(() => {
        submitButton.innerText = 'Send';
    }, 2000);
});
