
 var link = document.querySelector(".current");
 var link2 = document.querySelector(".login");
 var link3 = document.querySelector(".cart")
 // link.addEventListener("click", function() {
// console.log("кликпо ссылке");
// });


  var popup = document.querySelector(".droplink");
  var popup2 = document.querySelector(".login-details");
  var popup3 = document.querySelector(".cart-items");
  // var close = popup.querySelector(".right-menu-close");
  


  link.addEventListener("mouseover", function(event) {
    event.preventDefault();
    popup.classList.add("droplink-show");
  });

  link2.addEventListener("mouseover", function(event) {
    event.preventDefault();
    popup2.classList.add("login-details-modal");
  });


  link3.addEventListener("mouseover", function(event) {
    event.preventDefault();
    popup3.classList.add("cart-items-show");
  });



  // close.addEventListener("click", function(event) {
  //   event.preventDefault();
  //   popup.classList.remove("droplink-show");
  // });

    window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {
        if (popup.classList.contains("droplink-show")) {
          popup.classList.remove("droplink-show");

        }
      }
    });

window.addEventListener("keydown", function(event) {
      // debugger
    if (event.keyCode === 27) {
      if (popup2.classList.contains("login-details-modal")) {
        popup2.classList.remove("login-details-modal");

      }
    }
}); 

   window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {
        if (popup3.classList.contains("cart-items-show")) {
          popup3.classList.remove("cart-items-show");

        }
      }
    });

   






