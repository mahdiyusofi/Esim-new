const offscreenMenu = document.querySelector(".off-nav-bar");
const onbtn = document.querySelector("#hamburger-show-btn");

onbtn.addEventListener("click", () => {
    offscreenMenu.classList.toggle("active");
})

function myFunction() {
    document.getElementById("lan-Dropdown").classList.toggle("show");
  }

window.onclick = function(event) {
    if (!event.target.matches('.lan-dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }