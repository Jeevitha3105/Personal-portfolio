document.addEventListener("DOMContentLoaded", function () {

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar && close && nav) {
  bar.addEventListener('click', function () {
    nav.classList.add('active');
  });

  close.addEventListener('click', function () {
    nav.classList.remove('active');
  });

  document.addEventListener('click', function (event) {
    const target = event.target;
    if (!nav.contains(target) && target !== bar) {
      nav.classList.remove('active');
    }
  });

  // Handle clicks on nav links to close navbar on small screens
  nav.querySelectorAll('a').forEach(function (navLink) {
    navLink.addEventListener('click', function () {
      if (window.innerWidth <= 858) {
        nav.classList.remove('active');
      }
    });
  });
}


  //timeline
  const sections = document.querySelectorAll(".row");

  function animateOnScroll() {
    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        setTimeout(() => {
          section.classList.add("show");
        }, index * 400);
      }
    });
  }

  animateOnScroll();

  window.addEventListener("scroll", animateOnScroll);


  //cursor
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");

  window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 500, fill: "forwards" }
    );
  });


  //footer
  const currentYearSpan = document.getElementById("currentYear");

  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // model
  var modals = document.querySelectorAll(".modal");

  var modalButtons = document.querySelectorAll(".openModal");
  var closeButtons = document.querySelectorAll(".close");

  // Function to open modal
  function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
      document.body.classList.add("modal-open");
    }
  }

  // Function to close modal
  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  }

  // Event listeners for opening modals
  modalButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var modalId = this.getAttribute("data-modal-id");
      openModal(modalId);
    });
  });

  // Event listeners for closing modals
  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var modalId = this.closest(".modal").id;
      closeModal(modalId);
    });
  });

  // Close modal if user clicks outside the modal content
  window.addEventListener("click", function (event) {
    modals.forEach(function (modal) {
      if (event.target == modal) {
        var modalId = modal.id;
        closeModal(modalId);
      }
    });
  });

  // Prevent modal from closing when clicking inside modal content
  modals.forEach(function (modal) {
    modal.children[0].addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });




});
