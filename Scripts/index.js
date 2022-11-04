



let discoverarr = [

    {
        img_url :"https://assets.pharmeasy.in/apothecary/images/medicine_v1.webp?dim=256x0",
        type :"Medicine",
        discount :"UPTO 50% OFF"
    },

    {
        img_url :"https://assets.pharmeasy.in/apothecary/images/healthcare_v1.webp?dim=256x0",
        type :"Heathcare",
        discount :"UPTO 60% OFF"
    },

    {
        img_url :"https://assets.pharmeasy.in/apothecary/images/labTest_v1.webp?dim=256x0",
        type :"Lab Tests",
        discount :"UPTO 70% OFF"
    },

    {
        img_url :"https://assets.pharmeasy.in/apothecary/images/offers.webp?dim=256x0",
        type :"Offers",
        discount :""
    },

    {
        img_url :"https://assets.pharmeasy.in/apothecary/images/plus.webp?dim=256x0",
        type :"Plus",
        discount :"SAVE 5% EXTRA"
    },

    {
        img_url :"https://assets.pharmeasy.in/apothecary/images/healthBlog_v1.webp?dim=256x0",
        type :"Health Blogs",
        discount :""
    },

]



let interval_slide_images_arr = [
{url : "https://cms-contents.pharmeasy.in/banner/ac2113bb2c4-MwebRegisterbanner.jpg"},
{url : "https://cms-contents.pharmeasy.in/banner/4676cae97dd-Medi40_app.jpg"},
{url : "https://cms-contents.pharmeasy.in/banner/8b3f5424f6d-WELCOME400_HP.jpg"},
{url : "https://cms-contents.pharmeasy.in/banner/72da6091040-WELCOME400_HP_696x301_NEW.jpg"},
{url : "https://cms-contents.pharmeasy.in/banner/9bab2d71538-PE_Care.jpg"},
{url : "https://cms-contents.pharmeasy.in/banner/1cbcc2c1661-App.jpg"},
{url : "https://cms-contents.pharmeasy.in/banner/7140411e069-omicron_Lupin.jpg"},

]





// importing navbar

import {navbar,quicklink,footer} from "../Components/navbar.js"

let nv=document.getElementById("navbar");
nv.innerHTML=navbar();

// importing quicklink

let ql=document.getElementById("quicklink");
ql.innerHTML=quicklink();

// importing footer

let ft=document.getElementById("footer");
ft.innerHTML=footer();





// search functionallity



let search = document.getElementById("search");
search.addEventListener("click",()=>{
document.getElementById("input").innerText=null;

let searchData = document.getElementById("input").value;
console.log(searchData)
if(searchData=="healthcare"){
    window.location.href = "healthcare.html"
}
if(searchData=="medicine"){
    window.location.href = "search.html"
}
else{
    window.location.href = "search.html"
}

})




// discover Div Part

let main_div = document.querySelector(".slider")
let imageSlide =(arr,container)=>{
 container.innerText = ""
for(let i=0; i<arr.length; i++){
 //    console.log(arr)
 discoverarr.map((el)=>{
     let sliding_div = document.createElement("div")
     sliding_div.className = "sliding_div"

      let img_div = document.createElement("img")
      img_div.className = "bannerimg"
      img_div.src = el.img_url

      let type=document.createElement("h3")
      type.className= "typeh3"
      type.innerText=el.type 

      let discount=document.createElement("p")
      discount.className= "typeh3"
      discount.innerText=el.discount

      sliding_div.append(img_div,type,discount)
      container.append(sliding_div)

  })

}   
}



imageSlide(discoverarr,main_div)
let hdSlide = document.querySelector(".slider")
let temp = 0
document.querySelector(".hdLarr").addEventListener("click",()=>{
 
 let winWidth = 10
 temp = temp-winWidth
 let final = winWidth*(discoverarr.length-1)
if(temp>0){
 console.group("left",temp)
 hdSlide.style.transform = `translate3d(${-temp}px,0px,0px)`
 hdSlide.style.transition = ".4s"
} else{
 hdSlide.style.transform = `translate3d(${-final}px,0px,0px)`
 hdSlide.style.transition = "0.2s"
 temp = final
} 
 
})

document.querySelector(".hdRarr").addEventListener("click",()=>{
 let winWidth = 10
 
 temp = temp + winWidth
 console.group("right",temp)
 if(temp<winWidth*6){
     hdSlide.style.transform = `translate3d(${-temp}px,0px,0px)`
     hdSlide.style.transition = ".4s"
 }else{
     hdSlide.style.transform = `translate3d(${-0}px,0px,0px)`
     hdSlide.style.transition = "0.2s"
     temp = 0
 }
})


// Interval div Part

let interval_slide_bar_div = document.querySelector(".sliding_window")
let isPaused = false;
let topTemp  = 0
let winWidth = 460;



setInterval(()=>{
 
    if(!isPaused){
        topTemp = topTemp + winWidth     
        
        if(topTemp<winWidth*((interval_slide_images_arr.length-1))){
            interval_slide_bar_div.style.transform = `translate3d(${-topTemp}px,0px,0px)`
            interval_slide_bar_div.style.transition = ".4s"
            //console.log(topTemp,winWidth)
        }else{
            interval_slide_bar_div.style.transform = `translate3d(${-0}px,0px,0px)`
            interval_slide_bar_div.style.transition = "0.2s"
            topTemp = 0
        }             
     }
    },2000)
   
let start = (arr,container)=>{
    container.innerText = ""

    for(let i=0; i<arr.length; i++){
        let img = document.createElement("img")
        img.className = "top_img"
        img.src = arr[i].url
        container.append(img)
    }
   
} 
start(interval_slide_images_arr,interval_slide_bar_div)

    
    document.querySelector("#lArro").addEventListener("click",()=>{

        topTemp = topTemp - winWidth

        let final = winWidth*(interval_slide_images_arr.length-1)
        if(topTemp>0){
          console.group("left",topTemp)
          interval_slide_bar_div.style.transform = `translate3d(${-topTemp}px,0px,0px)`
          interval_slide_bar_div.style.transition = ".4s"
        }else{
            interval_slide_bar_div.style.transform = `translate3d(${-final}px,0px,0px)`
            interval_slide_bar_div.style.transition = "0.2s"
          topTemp = final
       }
        
    })

    document.querySelector("#rArro").addEventListener("click",()=>{
        
        topTemp = topTemp + winWidth
        
        if(topTemp<winWidth*(interval_slide_images_arr.length)){
            interval_slide_bar_div.style.transform = `translate3d(${-topTemp}px,0px,0px)`
            interval_slide_bar_div.style.transition = ".4s"
        }else{
            interval_slide_bar_div.style.transform = `translate3d(${-0}px,0px,0px)`
            interval_slide_bar_div.style.transition = "0.1s"
            topTemp = 0
        }
        
    })

