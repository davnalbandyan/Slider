"use strict"

let scrollPhotos = document.querySelector(".container");

let nextBtn = document.getElementById("nextBtn");

let backBtn = document.getElementById("backBtn");

scrollPhotos.addEventListener("wheel",(e)=>{
    e.preventDefault();
    scrollPhotos.scrollLeft += e.deltaY;
    scrollPhotos.style.scrollBehavior = "auto"
})

nextBtn.addEventListener("click",()=>{
    scrollPhotos.style.scrollBehavior = "smooth"
    scrollPhotos.scrollLeft += 900
})

backBtn.addEventListener("click",()=>{
    scrollPhotos.style.scrollBehavior = "smooth"
    scrollPhotos.scrollLeft -= 900
})