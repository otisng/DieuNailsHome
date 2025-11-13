// Back to top button functionality
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) { // Show button when scrolled down 300px
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

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
        successMessage.classList.add('d-none');
        errorMessage.classList.add('d-none');
        
        // Get form data
        const formData = new FormData(contactForm);
        const templateParams = {
            from_name: formData.get('from_name'),
            from_email: formData.get('from_email'),
            message: formData.get('message'),
            to_email: 'tinhnd.gigamall@gmail.com'
        };
        
        // Send email using EmailJS
        emailjs.send('service_qpt6io5', 'template_3kq1mcu', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                successMessage.classList.remove('d-none');
                successMessage.classList.add('d-block');
                
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
                errorMessage.classList.remove('d-none');
                errorMessage.classList.add('d-block');
                
                // Reset button state
                submitBtn.disabled = false;
                btnText.textContent = 'Send Message';
                
                // Scroll to error message
                errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
    });
})();