const arrow = document.querySelector(".arrow");
const container = document.querySelector(".container");
const shoeShowcaseCover = document.querySelector(".Showcase-cover");
console.log(arrow);
console.log(container);

const numberofDivs = shoeShowcaseCover.querySelectorAll("div").length;
let clickCounter = 0;
arrow.addEventListener("click", function(){
    // const ratio = Math.floor(window.innerWidth/210);
    clickCounter++;
    if(clickCounter < numberofDivs){
        // shoeShowcaseCover.style.transform = `translateX(${shoeShowcaseCover.computedStyleMap().get("transform")[0].x.value = -210}px)`;
        shoeShowcaseCover.style.transform = `translateX(${(-200) * clickCounter}px)`;
    }
    else{
        shoeShowcaseCover.style.transform = "translateX(0)";
        clickCounter = 0;
    }
})

console.log(shoeShowcaseCover);
console.log(shoeShowcaseCover.computedStyleMap().get("transform")[0].x.value);
console.log(shoeShowcaseCover.querySelectorAll("div").length);
console.log(window.innerWidth/300);