// JavaScript to handle the burger menu toggle for mobile view
document.getElementById("burger").addEventListener("click", () => {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
});

// Subscription/Offer Section

document
  .getElementById("subscription-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get the email address from the input field
    const email = document.getElementById("email").value;

    // Simulate subscription process
    alert(`Thank you for subscribing with ${email}!`);
  });

//Partner Restaurant section
document.addEventListener("DOMContentLoaded", () => {
  // Here you can dynamically load restaurants if needed using APIs or data
  console.log("Partner Restaurants Section loaded");

  // Example of adding more restaurant data
  const restaurantsContainer = document.getElementById("restaurants-container");

  const restaurantCard = document.createElement("div");
  restaurantCard.classList.add("restaurant-card");
  restaurantCard.innerHTML = `
        <img src="${newRestaurant.img}" alt="${newRestaurant.name}">
        <h3>${newRestaurant.name}</h3>
    `;

  restaurantsContainer.appendChild(restaurantCard);
});

// About Us section
document.addEventListener("DOMContentLoaded", () => {
  const learnMoreBtn = document.querySelector(".learn-more-btn");

  learnMoreBtn.addEventListener("click", () => {
    alert("Learn more about our mission and values."); // Example interaction
  });
});

// var swiper = new Swiper(".testimonialSlider", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });

var swiper = new Swiper(".testimonialSlider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1000,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
