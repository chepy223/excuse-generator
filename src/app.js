/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let p = document.getElementById("excuse");
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = Math.floor(Math.random() * 4);
  let actionIndex = Math.floor(Math.random() * 4);
  let whatIndex = Math.floor(Math.random() * 3);
  let whenIndex = Math.floor(Math.random() * 5);

  p.innerHTML =
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex];

  console.log("Hello Rigo from the console!");
};
