// Back to top button
var btn = $('#backtotop');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
       btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

window.onload = function() {
    document.querySelector('.preloader').style.display = 'none';
}

// EmailJS Configuration and Form Handling
(function() {
    // Initialize EmailJS with your public key
    emailjs.init("jmmSexwT-WKPoQ7Oe"); // Replace with your actual EmailJS public key
    
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const errorText = document.getElementById('error-text');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.textContent = 'Đang gửi...';
        
        // Hide previous messages
        successMessage.classList.add('hidden');
        errorMessage.classList.add('hidden');
        
        // Get form data
        const formData = new FormData(contactForm);
        const templateParams = {
            from_name: formData.get('from_name'),
            from_email: formData.get('from_email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            to_email: 'tinhnd.gigamall@gmail.com'
        };
        
        // Send email using EmailJS
        emailjs.send('service_qpt6io5', 'template_3kq1mcu', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                successMessage.classList.remove('hidden');
                
                // Reset form
                contactForm.reset();
                
                // Reset button state
                submitBtn.disabled = false;
                btnText.textContent = 'Send Message';
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
            }, function(error) {
                console.log('FAILED...', error);
                
                // Show error message
                errorText.textContent = 'Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.';
                errorMessage.classList.remove('hidden');
                
                // Reset button state
                submitBtn.disabled = false;
                btnText.textContent = 'Send Message';
                
                // Scroll to error message
                errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
    });
})();