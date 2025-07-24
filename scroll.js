
window.onscroll = function() {
    let scrollBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

//typing text
document.addEventListener("DOMContentLoaded", () => {
  const roles = [
    "AI/ML  Apprentice",
    "JAVA & PYTHON Programmer",
    "FRONTEND DEPLOYER",
    "SYSTEM Design Enthusiast",
    "BACKEND Deployer",
    "TECH Problem Solver",
    "COMMUNICATION Specialist"

  ];

  const typingElement = document.getElementById("typing-text");

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
      typingElement.textContent = currentRole.substring(0, charIndex);
    } else {
      charIndex++;
      typingElement.textContent = currentRole.substring(0, charIndex);
    }

    // Pause after full word typed
    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, 1000); // pause before deleting
      return;
    }

    // Move to next word after deleting
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(type, isDeleting ? 50 : 120); // Speed for typing/deleting
  }

  setTimeout(type, 2100);
});
