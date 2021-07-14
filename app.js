function ButtonToStart() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "Aliyan Hussain" && password == "Hello World") {
        window.location.replace("index.html");
    }
    else {
        alert("Wrong Username or Pawword!\nPlease try again.");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
}
function logout() {
    window.location.replace("login.html");
}

function loadmore() {
    var hide = document.getElementById("loading");
    hide.setAttribute("class", "tohide");
    var display = document.getElementById("todisplay");
    document.getElementById("todisplay1").innerHTML = display.innerHTML;
}
function searchicon(){
    document.getElementById("search").value = "";
}

function addToCart(){
    alert("Successfully added to cart.");
    var a = document.getElementById("item1");
    var b = document.getElementById("cartMain");
    b.innerHTML = a.innerHTML;
    window.location = "cart.html"
}
