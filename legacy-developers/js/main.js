/**
 * LEGACY DEVELOPERS - CORE CLIENT SCRIPT
 * Handles navigation, mobile drawer, interactive forms,
 * Live chat simulation, gallery lightbox, and authentication modals.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initContactForms();
  initNewsletterForm();
  initLiveChat();
  initLightbox();
  initModals();
  initNavScroll();
  initGalleryFilter();
});

/* ---------------------------------------------------------
   1. MOBILE MENU
   --------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navList = document.getElementById('mainNavList');

  if (toggleBtn && navList) {
    toggleBtn.addEventListener('click', () => {
      navList.classList.toggle('show');
      toggleBtn.setAttribute('aria-expanded', navList.classList.contains('show'));
    });

    // Close when clicking nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('show');
      });
    });
  }
}

/* ---------------------------------------------------------
   2. NAVBAR ACTIVE HIGHLIGHT ON SCROLL
   --------------------------------------------------------- */
function initNavScroll() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}

/* ---------------------------------------------------------
   3. CONTACT FORM SUBMISSION
   --------------------------------------------------------- */
function initContactForms() {
  const forms = document.querySelectorAll('.contact-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('.form-submit-btn');
      const successAlert = form.querySelector('.form-success-alert');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Sending...</span>';
      }

      // Simulate network request
      setTimeout(() => {
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Submit</span>';
        }
        if (successAlert) {
          successAlert.style.display = 'block';
          successAlert.innerText = 'Thank you! Your message has been sent to Legacy Developers. We will contact you shortly.';
          setTimeout(() => {
            successAlert.style.display = 'none';
          }, 6000);
        }
      }, 1000);
    });
  });
}

/* ---------------------------------------------------------
   4. NEWSLETTER SUBSCRIPTION FORM (Landing Page)
   --------------------------------------------------------- */
function initNewsletterForm() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.btn-primary') || form.querySelector('button');
      const input = form.querySelector('.subscribe-input');
      const msg = form.querySelector('.subscribe-msg');

      if (btn) {
        btn.disabled = true;
        btn.innerText = 'Subscribing...';
      }

      setTimeout(() => {
        if (btn) {
          btn.disabled = false;
          btn.innerText = 'Subscribe';
        }
        if (input) input.value = '';
        if (msg) {
          msg.style.display = 'block';
          msg.innerText = 'Thanks for submitting! You are now on our VIP launch list.';
          setTimeout(() => {
            msg.style.display = 'none';
          }, 5000);
        }
      }, 900);
    });
  });
}

/* ---------------------------------------------------------
   5. LIVE CHAT WIDGET
   --------------------------------------------------------- */
function initLiveChat() {
  const toggleBtn = document.getElementById('chatToggleBtn');
  const chatModal = document.getElementById('chatModal');
  const closeBtn = document.getElementById('chatCloseBtn');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const chatBody = document.getElementById('chatBody');

  if (toggleBtn && chatModal) {
    toggleBtn.addEventListener('click', () => {
      chatModal.classList.toggle('open');
      if (chatModal.classList.contains('open') && chatInput) {
        chatInput.focus();
      }
    });
  }

  if (closeBtn && chatModal) {
    closeBtn.addEventListener('click', () => {
      chatModal.classList.remove('open');
    });
  }

  if (chatForm && chatInput && chatBody) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = chatInput.value.trim();
      if (!text) return;

      // Append user msg
      appendChatMessage(chatBody, text, 'user');
      chatInput.value = '';

      // Auto response
      setTimeout(() => {
        const replies = [
          "Thank you for contacting Legacy Developers! An architect is reviewing your inquiry.",
          "We'd love to schedule a personal consultation for your project. Please feel free to call us at 123-456-7890 or leave your email.",
          "Our team specializes in custom home building, architectural blueprints, and luxury remodels. How can we bring your vision to life?",
          "We have received your message and will get back to you immediately!"
        ];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        appendChatMessage(chatBody, randomReply, 'bot');
      }, 1000);
    });
  }
}

function appendChatMessage(container, text, type) {
  const div = document.createElement('div');
  div.className = `chat-message ${type}`;
  div.innerText = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

/* ---------------------------------------------------------
   6. LIGHTBOX FOR GALLERY & PROJECT PHOTOS
   --------------------------------------------------------- */
function initLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');

  if (!lightbox || !lightboxImg) return;

  document.querySelectorAll('[data-lightbox]').forEach(el => {
    el.addEventListener('click', () => {
      const src = el.getAttribute('data-img') || el.querySelector('img')?.src;
      const caption = el.getAttribute('data-caption') || el.querySelector('img')?.alt || 'Legacy Developers Portfolio';
      
      if (src) {
        lightboxImg.src = src;
        if (lightboxCaption) lightboxCaption.innerText = caption;
        lightbox.classList.add('open');
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('open');
    });
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('open');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      lightbox.classList.remove('open');
    }
  });
}

/* ---------------------------------------------------------
   7. MODALS (Login & Checkout)
   --------------------------------------------------------- */
function initModals() {
  const loginModal = document.getElementById('loginModal');
  const loginTriggers = document.querySelectorAll('.open-login-modal');
  const closeBtns = document.querySelectorAll('.modal-close-btn');
  const modalOverlays = document.querySelectorAll('.modal-overlay');

  loginTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      loginModal?.classList.add('open');
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modalOverlays.forEach(m => m.classList.remove('open'));
    });
  });

  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
      }
    });
  });

  // Login form toggle
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const alert = loginForm.querySelector('.modal-alert');
      if (alert) {
        alert.style.display = 'block';
        alert.innerText = 'Login successful! Welcome back.';
        setTimeout(() => {
          loginModal?.classList.remove('open');
          alert.style.display = 'none';
        }, 1500);
      }
    });
  }

  // Pricing Buy Now triggers
  document.querySelectorAll('.btn-buy-plan').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const planName = btn.getAttribute('data-plan') || 'Foundation Plan';
      const checkoutModal = document.getElementById('checkoutModal');
      const checkoutPlanTitle = document.getElementById('checkoutPlanTitle');
      if (checkoutPlanTitle) checkoutPlanTitle.innerText = planName;
      if (checkoutModal) checkoutModal.classList.add('open');
    });
  });

  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const alert = checkoutForm.querySelector('.modal-alert');
      if (alert) {
        alert.style.display = 'block';
        alert.innerText = 'Order placed successfully! An invoice has been sent to your email.';
        setTimeout(() => {
          document.getElementById('checkoutModal')?.classList.remove('open');
          alert.style.display = 'none';
        }, 2000);
      }
    });
  }
}

/* ---------------------------------------------------------
   8. GALLERY FILTER
   --------------------------------------------------------- */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      items.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}
