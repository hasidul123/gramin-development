// Jab koi contact form submit karega to message dikhega
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Page ko reload hone se rokega
    alert('Thank you bhai! Aapka message hume mil gaya hai. Hum aapse jald hi connect karenge.');
    this.reset(); // Form clear kar dega
});