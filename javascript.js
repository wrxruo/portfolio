myID = document.getElementById("navbarID");
	var myScrollFuncNavbar = function () {
	    var y = window.scrollY;
	    if (y >= 200) {
	        myID.className = "fixed-navbar show"
	    } else {
	        myID.className = "fixed-navbar hide"
	    }
	};

myIDw = document.getElementById("whitespaceID");
var myScrollFuncWhitespace = function () {
    var yw = window.scrollY;
    if (yw >= 500) {
        myIDw.className = "whitespace show-right"
    } else {
        myIDw.className = "whitespace hide-right"
    }
};
window.addEventListener("scroll", myScrollFuncNavbar);
window.addEventListener("scroll", myScrollFuncWhitespace);