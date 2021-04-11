import _ from "lodash";
import myName from "./myName";
import "./style.css";
import image from "./image.jpg";
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
  const element = document.createElement("div");
  const element2 = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  element2.innerHTML = myName("Sam");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = image;

  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);

  return [element, element2];
  // return element;
}

document.body.appendChild(component()[0]);
document.body.appendChild(component()[1]);
