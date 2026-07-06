/* ========================================
   SCRIPT.JS - SHARED FOR ALL PAGES
   Copy this entire code into script.js
   ======================================== */

// ===== 1. HAMBURGER MENU =====
var hamburger = document.getElementById('hamburger');
var navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        console.log("Hamburger clicked!");
    });

    document.querySelectorAll('.nav-links li a').forEach(function(link) {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ===== 2. DROPDOWN =====
var homeLink = document.getElementById('homeLink');
var homeDropdown = document.getElementById('homeDropdown');

if (homeLink && homeDropdown) {
    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        homeDropdown.classList.toggle('show');
        console.log("Dropdown toggled!");
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown-parent')) {
            homeDropdown.classList.remove('show');
        }
    });
}

// ===== 3. SWITCH HOME 1 & 2 =====
function switchToHome1() {
    var hero1 = document.getElementById('heroHome1');
    var hero2 = document.getElementById('heroHome2');
    if (hero1) hero1.style.display = 'flex';
    if (hero2) hero2.style.display = 'none';
    
    document.querySelectorAll('.nav-links li a').forEach(function(link) {
        link.classList.remove('active');
    });
    if (homeLink) homeLink.classList.add('active');
    
    var opt1 = document.getElementById('home1Option');
    var opt2 = document.getElementById('home2Option');
    if (opt1) opt1.classList.add('active');
    if (opt2) opt2.classList.remove('active');
    
    if (homeDropdown) homeDropdown.classList.remove('show');
    localStorage.setItem('homePreference', 'home1');
    console.log("Switched to Home 1");
}

function switchToHome2() {
    var hero1 = document.getElementById('heroHome1');
    var hero2 = document.getElementById('heroHome2');
    if (hero1) hero1.style.display = 'none';
    if (hero2) hero2.style.display = 'flex';
    
    document.querySelectorAll('.nav-links li a').forEach(function(link) {
        link.classList.remove('active');
    });
    if (homeLink) homeLink.classList.add('active');
    
    var opt1 = document.getElementById('home1Option');
    var opt2 = document.getElementById('home2Option');
    if (opt2) opt2.classList.add('active');
    if (opt1) opt1.classList.remove('active');
    
    if (homeDropdown) homeDropdown.classList.remove('show');
    localStorage.setItem('homePreference', 'home2');
    console.log("Switched to Home 2");
}

var home1Opt = document.getElementById('home1Option');
var home2Opt = document.getElementById('home2Option');
var footerHome1 = document.getElementById('footerHome1');
var footerHome2 = document.getElementById('footerHome2');

if (home1Opt) home1Opt.addEventListener('click', function(e) {
    e.preventDefault();
    switchToHome1();
});

if (home2Opt) home2Opt.addEventListener('click', function(e) {
    e.preventDefault();
    switchToHome2();
});

if (footerHome1) footerHome1.addEventListener('click', function(e) {
    e.preventDefault();
    switchToHome1();
});

if (footerHome2) footerHome2.addEventListener('click', function(e) {
    e.preventDefault();
    switchToHome2();
});

// Load saved home preference
window.addEventListener('DOMContentLoaded', function() {
    var saved = localStorage.getItem('homePreference');
    if (saved === 'home2') {
        switchToHome2();
    } else {
        switchToHome1();
    }
});

// ===== 4. DARK/LIGHT MODE (🌙 ICON) - WORKS ON ALL PAGES =====
var darkBtn = document.getElementById('dark-light');
var isDark = false;

if (darkBtn) {
    console.log("Dark button found!");
    
    // Load saved dark mode
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkBtn.textContent = '☀️';
        isDark = true;
    }

    darkBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        isDark = !isDark;
        if (isDark) {
            document.body.classList.add('dark-mode');
            this.textContent = '☀️';
            localStorage.setItem('darkMode', 'enabled');
            console.log("Dark mode ON");
        } else {
            document.body.classList.remove('dark-mode');
            this.textContent = '🌙';
            localStorage.setItem('darkMode', 'disabled');
            console.log("Dark mode OFF");
        }
    });
}

// ===== 5. RTL/LTR TOGGLE (⇄ ICON) - WORKS ON ALL PAGES =====
var slideBtn = document.getElementById('slide-toggle');
var isRTL = false;

if (slideBtn) {
    console.log("Slide button found!");
    
    // Load saved RTL preference
    if (localStorage.getItem('rtlMode') === 'enabled') {
        document.documentElement.classList.add('rtl-mode');
        isRTL = true;
    }

    slideBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        isRTL = !isRTL;
        if (isRTL) {
            document.documentElement.classList.add('rtl-mode');
            localStorage.setItem('rtlMode', 'enabled');
            console.log("RTL mode ON");
        } else {
            document.documentElement.classList.remove('rtl-mode');
            localStorage.setItem('rtlMode', 'disabled');
            console.log("RTL mode OFF");
        }
        
        // Animation effect
        var mainContent = document.querySelector('main') || document.querySelector('.hero-home1') || document.body;
        mainContent.style.transition = 'all 0.5s ease';
        mainContent.style.opacity = '0.7';
        setTimeout(function() {
            mainContent.style.opacity = '1';
        }, 300);
    });
}

// ===== 6. LOGIN BUTTON (👤 ICON) - WORKS ON ALL PAGES =====
var loginBtn = document.getElementById('loginBtn');
if (loginBtn) {
    console.log("Login button found!");
    loginBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        console.log("Login button clicked - redirecting to login.html");
        window.location.href = 'login.html';
    });
}

// ===== 7. SIGNUP LINKS - WORKS ON ALL PAGES =====
document.querySelectorAll('a[href="signup.html"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
        console.log("Signup link clicked");
    });
});

// ===== 8. FORM SUBMISSION (Contact Form) =====
var contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We\'ll get back to you soon. 💪');
        this.reset();
    });
}

// ===== 9. FAQ TOGGLE =====
function toggleFAQ(element) {
    var item = element.closest('.faq-item');
    if (item) {
        var isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(function(el) {
            el.classList.remove('active');
        });
        if (!isActive) {
            item.classList.add('active');
        }
    }
}

// ===== 10. PRICING TOGGLE =====
function togglePricing(type) {
    var isYearly = (type === 'yearly');
    
    document.querySelectorAll('.toggle-option').forEach(function(btn) {
        btn.classList.remove('active');
    });
    document.querySelector('.toggle-option[onclick*="' + type + '"]').classList.add('active');
    
    document.querySelectorAll('.pricing-card .price .amount').forEach(function(el) {
        var monthlyPrice = el.dataset.monthly;
        var yearlyPrice = el.dataset.yearly;
        if (isYearly) {
            el.textContent = yearlyPrice;
            el.closest('.price').querySelector('.period').textContent = '/month (billed yearly)';
        } else {
            el.textContent = monthlyPrice;
            el.closest('.price').querySelector('.period').textContent = '/month';
        }
    });
    
    document.querySelectorAll('.pricing-card .price .original-price').forEach(function(el) {
        if (el.dataset.monthly && el.dataset.yearly) {
            if (isYearly) {
                el.style.display = 'inline';
                el.textContent = '$' + el.dataset.yearly;
            } else {
                el.style.display = 'inline';
                el.textContent = '$' + el.dataset.monthly;
            }
        }
    });
}

console.log("✅ All scripts loaded successfully!");