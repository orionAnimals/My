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

let logo_img = document.querySelector(".logo");
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
  var OFFSET = 10;

  window.addEventListener('scroll', () => {
  
    if (this.pageOffset > document.getElementById('about_me').offsetTop - OFFSET) {
      document.getElementById("about_me_link").style.color = "var(--orange-main)";
    } else if (this.pageOffset > document.getElementById('portfolio').offsetTop - OFFSET) {
      document.getElementById("portfolio_link").style.color = "var(--orange-main)";
    } else if (this.pageOffset > document.getElementById('contact_me').offsetTop - OFFSET) {
      document.getElementById("contact_me_link").style.color = "var(--orange-main)";
    } else {
      return;
    }
  
  })












class shit {
  constructor(age, name, job){
    this.age = age;
    this.name = name;
    this.job = job;
  }
  virgin(){
    console.log(`${this.name} is shitty`);
  }
}

const shit1 = new shit ("shit", 32, "nope");
console.log(shit1)
shit1.virgin();

// js course













// aurora === DOMContentLoaded timeend