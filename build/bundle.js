
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var e = [],
  t = [];
function n(n, r) {
  if (n && "undefined" != typeof document) {
    var a,
      s = !0 === r.prepend ? "prepend" : "append",
      d = !0 === r.singleTag,
      i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];
    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();
    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
  }
  function c() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
    var a = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, e), e;
  }
}

var css = "body {\r\n  background: azure;\r\n  color: #fff;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.js-image {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 20px;\r\n  border: 5px solid goldenrod;\r\n  box-shadow: 10px 5px 5px black\r\n}\r\n\r\n.h1-header {\r\n  margin: 20px;\r\n  text-align: center;\r\n  color: blue;\r\n  text-shadow: 1px 1px 2px black;\r\n  font-size: 3rem;\r\n}\r\n";
n(css,{});

console.log('Hello World!');
const h1 = document.createElement(`h1`);
h1.className = `h1-header`;
h1.textContent = `I love JavaScript`;
const jsImageHTML = document.createElement(`img`);
jsImageHTML.className = `js-image`;
jsImageHTML.src = `../assets/JavaScript.png`;
document.body.append(h1, jsImageHTML);
