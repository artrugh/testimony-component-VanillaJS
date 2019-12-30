import { slider } from './slider.js'
import { data } from "./data.js";

//get the data
const testimony = data;

const body = document.querySelector("body");
body.style.backgroundColor = "gray"

const container = document.createElement("div");
container.id = "container";
body.appendChild(container);


// you can choose between two tipe of sliders
// id = opacity-slider || id = position-slider 

// arguments for the slider:
// 1.src (has to be an array),
// 2.id(has to be  - opacity-slider || position-transition -,
// 3.settimer (has to be always longer than the transition css effect)

slider(testimony, "position-slider", 5000);
