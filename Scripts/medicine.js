
import {cartbar,footer,lakhplusnavbar} from "../Components/navbar.js";

let cb=document.getElementById("navbar");
cb.innerHTML=cartbar();


let ft=document.getElementById("footer");
ft.innerHTML=footer();

let lp=document.getElementById("enc")
lp.innerHTML=lakhplusnavbar()

