let changingWord = document.getElementById("Dynamic-content");

let elements = document.getElementsByClassName("two"); 

let arr=["Where to ?","Stay SomeWhere Great","Do Something Fun","Find Place to Eat","Find the Best Flight","Explore Place to Rent"];

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function () {
        changingWord.innerHTML=arr[i];
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".explore-slides");
    const prevBtn = document.querySelector(".previous");
    const nextBtn = document.querySelector(".next-step");
    const sliderItems = document.querySelectorAll(".explore-slider");

    let index = 0;
    let totalSlides = sliderItems.length - 3; // Automatically detect total slides
    let slideWidth = sliderItems[0].offsetWidth; // Get first slide width

    function updateSlider() {
        slideWidth = sliderItems[0].offsetWidth; // Update width dynamically
        slides.style.transform = `translateX(-${index * 296 + (index * 10)}px)`;
        prevBtn.style.display = index === 0 ? "none" : "block";
        nextBtn.style.display = index === totalSlides - 1 ? "none" : "block";
    }

    function moveSlide(direction) {
        if ((direction === -1 && index > 0) || (direction === 1 && index < totalSlides - 1)) {
            index += direction;
        }
        updateSlider();
    }

    prevBtn.addEventListener("click", () => moveSlide(-1));
    nextBtn.addEventListener("click", () => moveSlide(1));

    window.addEventListener("resize", () => {
        slideWidth = sliderItems[0].offsetWidth; // Update on window resize
        updateSlider();
    });

    updateSlider();
});


document.addEventListener("DOMContentLoaded", function () {
    const s1 = document.getElementsByClassName("slides")[0];
    const p1 = document.getElementsByClassName("prev")[0]; 
    const n1 = document.getElementsByClassName("next")[0];  
    const slider1 = document.getElementsByClassName("slider");

    let i = 0;
    let SW1 = slider1[0].offsetWidth;
    let totS1 = 2;

    function Slider() {
        s1.style.transform = `translateX(-${i * 300}px)`;
        p1.style.display = i === 0 ? "none" : "block";
        n1.style.display = i === totS1 - 1 ? "none" : "block";
    }

    function move(dir) {
        if ((dir === -1 && i > 0) || (dir === 1 && i < totS1 - 1)) {
            i += dir;
        }
        Slider();
    }
    p1.addEventListener("click", () => move(-1));
    n1.addEventListener("click", () => move(1));

    window.addEventListener("resize", () => {
        SW1 = slider1[0].offsetWidth;
        Slider();
    });

    Slider();
});

document.addEventListener("DOMContentLoaded", function () {
    const s2 = document.getElementsByClassName("review-slides")[0];
    const p2 = document.getElementsByClassName("forward")[0]; 
    const n2 = document.getElementsByClassName("backward")[0];  
    const slider2 = document.getElementsByClassName("review");

    let j = 0;
    let SW2 = slider2[0].offsetWidth;
    let totS2 = 4;

    function Slider() {
        s2.style.transform = `translateX(-${j * 400 + (j*10)}px)`;
        p2.style.display = j === 0 ? "none" : "block";
        n2.style.display = j === totS2 - 1 ? "none" : "block";
    }

    function move(dir) {
        if ((dir === -1 && j > 0) || (dir === 1 && j < totS2 - 1)) {
            j += dir;
        }
        Slider();
    }
    p2.addEventListener("click", () => move(-1));
    n2.addEventListener("click", () => move(1));

    window.addEventListener("resize", () => {
        SW2 = slider2[0].offsetWidth;
        Slider();
    });
    Slider();
});

