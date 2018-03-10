/* validated with JSLint edition 2018-02-27 (http://jslint.com/)
 * no errors reported (JSLint options: Assume… a browser)
 */

/* jsDetectInternet: an algorithm to determine Internet connectivity
 * see https://github.com/Project4Dimensions/detectInternet
 * for fun, delete // before a.appendChild(b) (i.e., uncomment it)
 */

function jsDetectInternet(parent) {
    "use strict";
    var a = document.getElementById(parent);
    var b = document.createElement("span");
    var ba = document.createElement("img");
    a.innerHTML = "";
    ba.onload = function () {
        b.appendChild(ba);
        a.innerHTML = "There is Internet connectivity<br>";
        //a.appendChild(b);
    };
    ba.onerror = function () {
        a.innerHTML = "There is no Internet connectivity";
    };
    ba.src = "//www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
}
