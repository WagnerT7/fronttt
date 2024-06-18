function myFunction() {
    var x = document.getElementById("myTopmenu");
    if (x.className === "topmenu") {
      x.className += " responsive";
    } else {
      x.className = "topmenu";
    }
  }