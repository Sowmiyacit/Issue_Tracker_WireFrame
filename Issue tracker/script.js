// Redirect function for role cards with smooth transition
function redirectTo(page) {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = page;
    }, 300);
}

// Add loading animation for form submissions
function showLoading(button) {
    button.innerHTML = '<span class="spinner"></span> Loading...';
    button.disabled = true;
}

// Form toggle for student login/signup with animation
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginBtn && signupBtn) {
        loginBtn.addEventListener('click', function() {
            loginBtn.classList.add('active');
            signupBtn.classList.remove('active');
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
            loginForm.style.animation = 'fadeInForm 0.5s ease-in-out';
        });

        signupBtn.addEventListener('click', function() {
            signupBtn.classList.add('active');
            loginBtn.classList.remove('active');
            signupForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
            signupForm.style.animation = 'fadeInForm 0.5s ease-in-out';
        });
    }

    // Form submissions with loading animation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            showLoading(submitBtn);

            // Simulate processing delay
            setTimeout(() => {
                // Simulate login/signup success
                if (window.location.pathname.includes('student-login.html')) {
                    window.location.href = 'http://figma.com/make/mMufxqO9C4k8eZWHcuny4L/Student-Dashboard?node-id=0-1&p=f&t=k8Ekb3M7Fdcykykz-0&fullscreen=1';
                } else if (window.location.pathname.includes('staff-login.html')) {
                    window.location.href = 'https://www.figma.com/make/QvVsWHVBnMlhkrVbmp3kIO/College-Issue-Tracker-Dashboard?t=zRtArel9Uy3bB5oD&fullscreen=1';
                } else if (window.location.pathname.includes('admin-login.html')) {
                    window.location.href = 'https://www.figma.com/make/HhJDSNUPdTXgiTJHbvlCjj/College-Issue-Tracker-Admin-Panel?node-id=0-1&p=f&t=fIgTaVObIRlsYe7Z-0&fullscreen=1';
                }
            }, 1500);
        });
    });

// Add smooth transitions on page load
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);

    // Department card click handlers for staff login
    const deptCards = document.querySelectorAll('.dept-card');
    deptCards.forEach(card => {
        card.addEventListener('click', function() {
            const dept = this.getAttribute('data-dept');
            const deptInput = document.getElementById('department-input');
            const deptSelection = document.getElementById('department-selection');
            const loginForm = document.getElementById('login-form');
            if (deptInput && deptSelection && loginForm) {
                deptInput.value = dept;
                deptSelection.style.display = 'none';
                loginForm.classList.remove('hidden');
                loginForm.style.animation = 'fadeInForm 0.5s ease-in-out';
            }
        });
    });
});

// Add spinner styles dynamically
const spinnerStyle = document.createElement('style');
spinnerStyle.textContent = `
    .spinner {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: #fff;
        animation: spin 1s ease-in-out infinite;
        margin-right: 8px;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(spinnerStyle);
