import _ from "lodash";
import printMe from "./print.js";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then(registration => {
        console.log("SW registered: ", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

function component() {
  var element = document.createElement("div");

  // lodash 是由当前 script 脚本 import 导入进来的
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());
