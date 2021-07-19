// Open burger menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

// Close burger menu
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Reveal searchbar
function openSearch() {
    // Opens to the full height of the navigation bar
    document.getElementById("searchBar").style.height = "70px";
  }

// Hide searchbar
  function closeSearch() {
    document.getElementById("searchBar").style.height = "0";
  }

//   Openen accordion menu in navigatie
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
} 