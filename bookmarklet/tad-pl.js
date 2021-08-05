/* This is a crude method to ensure bookmarklets will never break in the future (e.g. addition or removal of scripts), and to assist with version control. */

/* Append sa11y.css */
var sa11ycss = document.createElement("link");
sa11ycss.setAttribute("rel", "stylesheet");
sa11ycss.setAttribute("href", "https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@latest/src/sa11y.min.css");
sa11ycss.setAttribute("type", "text/css");
var bodyheader = document.getElementsByTagName("head")[0];
bodyheader.appendChild(sa11ycss);

/* Queue jQuery, Poppers.js, Tippy.js, and Sa11y in specific order. */
var popperJS = document.createElement("script");
popperJS.src = "https://unpkg.com/@popperjs/core@2";

var tippyJS = document.createElement("script");
tippyJS.src = "https://unpkg.com/tippy.js@6";

/* jsDelivr Combine: jQuery Slim, Sa11y (English), Sa11y.js */
var sa11yJS1 = document.createElement("script");
sa11yJS1.src = "https://cdn.jsdelivr.net/combine/npm/jquery@3.6.0/dist/jquery.slim.min.js,gh/ryersondmp/sa11y/src/sa11y-english.min.js,gh/ryersondmp/sa11y/src/sa11y.min.js";

/* Queue in the right order. */
document.body.appendChild(popperJS);

popperJS.onload = popperJS.onreadystatechange = function() {
  document.body.appendChild(tippyJS);
    tippyJS.onload = tippyJS.onreadystatechange = function() {
      document.body.appendChild(sa11yJS1);
    };
};
