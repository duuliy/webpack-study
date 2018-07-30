import printMe from "./print.js";
import _ from "lodash";
import { cube } from "./math.js";
import Print from './print';

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

function component() {
  // var element = document.createElement("pre");
  // var btn = document.createElement("button");

  // Lodash, now imported by this script

  // btn.innerHTML = "Click me and check the console!";
  // btn.onclick = printMe;

  // element.appendChild(btn);

  // element.innerHTML = ["Hello webpack!", "5 cubed is equal to "  cube(5)].join(
  //   "\n\n"
  // );

  var button = document.createElement("button");
  var br = document.createElement("br");

  button.innerHTML = "Click me and look at the console!";
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e =>
    import(/* webpackChunkName: "print" */ "./print").then(module => {
      var print = module.default;

      print();
    });

  element.onclick = Print.bind(null, 'Hello webpack!');  

  return element;
}

document.body.appendChild(component());
