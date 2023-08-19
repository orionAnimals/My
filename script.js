let header_fixed = document.querySelector(".Header_wrapper");

// Sticky header on scroll
window.onscroll = scrollFunction;

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    header_fixed.classList.add("fixed");
  } else {
    header_fixed.classList.remove("fixed");
  }
}

// mobile menu hamburger
let hamburger_button = document.getElementById("hamburger_button")
hamburger_button.onclick = function () {
  header_fixed.classList.toggle("EXPANDED");
}


// theme toggle
  let btn_toggler = document.getElementById("toggle_theme_btn");
  let body = document.querySelector("body");
  btn_toggler.onclick = function() {
    body.classList.toggle("active");
    if(body.classList == "active"){
      btn_toggler.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    } else {
     btn_toggler.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    }
  }

// Portfolio project for each!
let wrapp_gallery_main = document.querySelectorAll(".wrapp_main_project");

  wrapp_gallery_main.forEach(wrapp_gallery_main => {
    // DETAILS PROJECT SHOW
    let button_details = wrapp_gallery_main.querySelector("#show_details_btn");
    let wrapper_details_project_backdrop_blur = wrapp_gallery_main.querySelector(".wrapper_details_project_backdrop_blur");
    button_details.onclick = function () {
      wrapper_details_project_backdrop_blur.classList.toggle("active");
      // DETAILS PROJECT change text in the button
      if(button_details.innerHTML == "+ Details +") {
        button_details.innerHTML = "- Details -";
      } else {
        button_details.innerHTML = "+ Details +";
      }
    }
    // SCREEN SIZE CHANGE VIEV MODES

    let PC_VIEV_btn = wrapp_gallery_main.querySelector("#PC_VIEV_btn");
    let pc_gallery = wrapp_gallery_main.querySelector("#PC_gallery");
    PC_VIEV_btn.onclick = function() {
      pc_gallery.classList.remove("hidden");
      tablet_gallery.classList.add("hidden");
      phone_gallery.classList.add("hidden");
      // change selected button styles
      PC_VIEV_btn.classList.add("selected");
      TABLET_VIEV_btn.classList.remove("selected");
      PHONE_VIEV_btn.classList.remove("selected");
    }
    let TABLET_VIEV_btn = wrapp_gallery_main.querySelector("#TABLET_VIEV_btn");
    let tablet_gallery = wrapp_gallery_main.querySelector("#TABLET_gallery");
    TABLET_VIEV_btn.onclick = function() {
      pc_gallery.classList.add("hidden");
      tablet_gallery.classList.remove("hidden");
      phone_gallery.classList.add("hidden");
      // change selected button styles
      TABLET_VIEV_btn.classList.add("selected");
      PC_VIEV_btn.classList.remove("selected");
      PHONE_VIEV_btn.classList.remove("selected");
    }
    let PHONE_VIEV_btn = wrapp_gallery_main.querySelector("#PHONE_VIEV_btn");
    let phone_gallery = wrapp_gallery_main.querySelector("#PHONE_gallery");
    PHONE_VIEV_btn.onclick = function() {
      pc_gallery.classList.add("hidden");
      tablet_gallery.classList.add("hidden");
      phone_gallery.classList.remove("hidden");
      // change selected button styles
      PHONE_VIEV_btn.classList.add("selected");
      PC_VIEV_btn.classList.remove("selected");
      TABLET_VIEV_btn.classList.remove("selected");
    }

    // GALLERY images
    let big_image = wrapp_gallery_main.querySelector(".image_large");
    let small_image_buttons = wrapp_gallery_main.querySelectorAll(".img_button_gall");

    small_image_buttons.forEach(small_image_buttons => {
      let small_Image = small_image_buttons.querySelector(".img_small");
      small_image_buttons.onclick = function(e) {
        big_image.src = small_Image.src;

        // remove claslist selected if the button is not currently on click
        var all_small_Images = wrapp_gallery_main.querySelectorAll('.img_small');
        var one_image;
        for(i=0; i < all_small_Images.length; i++) {
          one_image = all_small_Images[i];
          if (one_image !== e.target) {
            one_image.classList.remove("selected");
          } else {
            one_image.classList.add("selected");
          }
        }
      }
    });
  })


// If page is scrolled on certain part of the page change the link in menu
document.addEventListener('DOMContentLoaded', function(){ 
  const sections = document.querySelectorAll(".PAGE_PART");
  // IF the screen with is less than 768px menu links are different(in hamburger menu...)
  if (window.innerWidth <= 768) {
   var menu_links = document.querySelectorAll(".navigation_header_mobile li");
  } else if(window.innerWidth > 768) {
    var menu_links = document.querySelectorAll(".header_nav_big_screen li");
  }

  // functions to add and remove the active class from links as appropriate
  const makeActive = (link) => menu_links[link].classList.add("active");
  const removeActive = (link) => menu_links[link].classList.remove("active");
  const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
  
  const sectionMargin = 300;
  
  let currentActive = 0;

  window.addEventListener("scroll", () => {
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1;
    if (current !== currentActive) {
      removeAllActive();
      currentActive = current;
      makeActive(current);
    }
  });
}, false);


















// aurora === DOMContentLoaded timeend