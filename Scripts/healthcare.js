

import {navbar,footer,newquicklink,lakhplusnavbar} from "../Components/navbar.js"

let n=document.getElementById("navbar")
n.innerHTML=navbar()

let ft=document.getElementById("footer")
ft.innerHTML=footer()

let nql=document.getElementById("newquicklink")
nql.innerHTML=newquicklink()

let lp=document.getElementById("lakhplus")
lp.innerHTML=lakhplusnavbar()