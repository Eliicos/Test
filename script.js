// Simple Accordion for FAQ
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isOpen = content.style.display === 'block';

            // Close all accordions
            document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');

            // Open this one if it was closed
            if (!isOpen) {
                content.style.display = 'block';
            }
        });
    });
});