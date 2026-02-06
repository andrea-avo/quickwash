document.addEventListener("DOMContentLoaded", function () {
  var welcomeText = "Welcome to QuickWash";
  var additionalText =
    "Choose the laundry service that you are interested in today.";
  var speed = 50; // kecepatan ketik (ms)
  var typingWelcome = document.getElementById("typing-welcome");
  var typingAdditional = document.getElementById("typing-additional");
  var buttonElement = document.getElementById("button");

  function typeWriter(element, text, callback) {
    var i = 0;

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        callback();
      }
    }

    type();
  }

  function animateButton() {
    buttonElementElement.style.opacity = "1";
    buttonElement.classList.add("animate__animated", "animate__fadeInUpBig");
  }

  typeWriter(typingWelcome, welcomeText, function () {
    typeWriter(typingAdditional, additionalText, animateButton);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tail = document.querySelector(".neon-tail");

  document.addEventListener("mousemove", function (e) {
    const { clientX, clientY } = e;

    const explosion = document.createElement("div");
    explosion.classList.add("neon-explosion");
    explosion.style.left = `${clientX}px`;
    explosion.style.top = `${clientY}px`;
    document.body.appendChild(explosion);

    explosion.addEventListener("animationend", function () {
      explosion.remove();
    });
    tail.style.left = `${clientX}px`;
    tail.style.top = `${clientY}px`;
  });

  document.addEventListener("mouseenter", function () {
    tail.classList.add("active");
  });

  document.addEventListener("mouseleave", function () {
    tail.classList.remove("active");
  });
});

feather.replace();
