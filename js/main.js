/* ========================================
   Main — Misc utilities
   ======================================== */
document.addEventListener('DOMContentLoaded', () => {

    // ---- Smooth scroll for anchor links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ---- Loading screen fade out ----
    const loader = document.getElementById('loader');
    if (loader) {
        window.addEventListener('load', () => {
            loader.style.opacity = '0';
            setTimeout(() => { loader.style.display = 'none'; }, 500);
        });
    }

    // ---- Formspree submission handler (AJAX) ----
    const forms = document.querySelectorAll('form[action^="https://formspree.io"]');
    
    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            const data = new FormData(form);
            
            // Loading state
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            
            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                    btn.style.background = '#27ae60';
                    form.reset();
                    
                    // Specific logic for Modal: Close after 3 seconds
                    if (form.classList.contains('contact-modal-form')) {
                        setTimeout(() => {
                            const modal = document.getElementById('contactModal');
                            if (modal) {
                                modal.classList.remove('active');
                                document.body.style.overflow = '';
                            }
                        }, 2500);
                    }
                } else {
                    const errorMsg = await response.json();
                    throw new Error(errorMsg.error || 'Oops! There was a problem submitting your form');
                }
            } catch (error) {
                console.error('Submission error:', error);
                btn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error Occurred';
                btn.style.background = '#e74c3c';
            } finally {
                // Reset button after specified time
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                }, 3000);
            }
        });
    });


    // ---- Current year in footer ----
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // ---- Custom Cursor Tracking ----
    const cursor = document.getElementById('customCursor');
    if (cursor && window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        const hoverElements = document.querySelectorAll('a, button, .service-card, .gallery-item');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
        });
    }

    // ---- Sticky Contact Modal Logic ----
    const stickyCta = document.getElementById('stickyCta');
    const contactModal = document.getElementById('contactModal');
    const contactModalClose = document.getElementById('contactModalClose');

    if (stickyCta && contactModal && contactModalClose) {
        // Open Modal
        stickyCta.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });

        // Close Modal
        const closeModal = () => {
            contactModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        contactModalClose.addEventListener('click', closeModal);

        // Click outside to close
        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                closeModal();
            }
        });
    }
});
