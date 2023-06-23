let header_fixed = document.querySelector(".Header_wrapper");

// Sticky header on scroll
window.onscroll = scrollFunction;

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    header_fixed.classList.add("fixed");
  } else {
    header_fixed.classList.remove("fixed");
  }
}
// theme toggle
let btn_toggler = document.getElementById("toggle_theme_btn");
let body = document.querySelector("body");

let logo_img = document.getElementById("logo");
  btn_toggler.onclick = function() {
    body.classList.toggle("active");

    if (body.classList == "active") {
      logo_img.innerHTML = `<img src="Images/logo_M_black.png" alt="Bohdan Zahorovets logo"></img>`;
      btn_toggler.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    } else {
      logo_img.innerHTML = `<img src="Images/logo_M.png" alt="Bohdan Zahorovets logo"></img>`;
      btn_toggler.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    }
  }

// photo gallery viev mode toggling

let wrapp_gallery_main = document.querySelectorAll(".wrapp_main_gallery");
let button_overflow_viev_mode = document.querySelectorAll(".button_overflow_viev_mode");

button_overflow_viev_mode.forEach(button_overflow_viev_mode => {
  button_overflow_viev_mode.onclick = function() {
    if (button_overflow_viev_mode.classList == "button_overflow_viev_mode selected") {
      button_overflow_viev_mode.classList.remove("selected");
    } else {
      button_overflow_viev_mode.classList.add("selected");
    }
  }
});
// details toggle about project

wrapp_gallery_main.forEach(wrapp_gallery_main => {
  
  let button_details = wrapp_gallery_main.querySelector(".show_details_btn");
  let wrapper_details_project = wrapp_gallery_main.querySelector(".wrapper_details_project");

    button_details.onclick = function () {
      wrapper_details_project.classList.toggle("active");
    };
});







// js course













// aurora === DOMContentLoaded timeend