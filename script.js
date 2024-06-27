
//Autoslide
document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('.review-container');
  const scrollStep = 320; //slide value

  const startAutoScroll = () => {
      setInterval(() => {
          if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
              container.scrollLeft = 0;
          } else {
              container.scrollBy({ left: scrollStep, behavior: 'smooth' });
          }
      }, 3000); // change every 3sec
  };

  startAutoScroll();
});


const imageContainers = document.querySelectorAll('.image-container');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

imageContainers[currentIndex].style.display = 'block';

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateImage();
  });
});

// Auto slide
setInterval(() => {
  currentIndex++;
  if (currentIndex >= imageContainers.length) {
    currentIndex = 0;
  }
  updateImage();
}, 10000);

// Update the image and dots
function updateImage() {
  imageContainers.forEach((imageContainer) => {
    imageContainer.style.display = 'none';
  });
  imageContainers[currentIndex].style.display = 'block';
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });
  dots[currentIndex].classList.add('active');
}

// swipe functionality for mobile
document.addEventListener('touchstart', (event) => {
  const touchStartX = event.touches[0].clientX;
  document.addEventListener('touchend', (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    if (touchEndX < touchStartX) {
      // Swipe right
      currentIndex++;
      if (currentIndex >= imageContainers.length) {
        currentIndex = 0;
      }
    } else {
      // Swipe left
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = imageContainers.length - 1;
      }
    }
    updateImage();
  });
});

//Mobile Menue
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('nav ul li a');
  const menuCheckbox = document.getElementById('click');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuCheckbox.checked = false; 
    });
  });
});

window.onscroll = function () {
  var backToTopButton = document.getElementById("backToTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

document.getElementById("backToTop").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};




