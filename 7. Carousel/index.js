const images = [
  {
    src: "./images/image0.jpg",
    caption: "one",
  },
  { src: "./images/image1.jpg", caption: "one" },
  { src: "./images/image2.jpg", caption: "one" },
  { src: "./images/image3.jpg", caption: "one" },
  { src: "./images/image4.jpg", caption: "one" },
  { src: "./images/image5.jpg", caption: "one" },
  { src: "./images/image6.jpg", caption: "one" },
  { src: "./images/image4.jpg", caption: "one" },
];
const imgContainer = document.getElementsByClassName("carousel")[0];
imgContainer.innerHTML = images
  .map((img) => {
    return `
    <div class="carousel-item">  
        <div class='index'>1/4</div>
        <img src='${img.src}' alt=""/>
        <div class="text">Caption ${img.caption}</div>
    </div>
    `;
  })
  .join("");

document.getElementsByClassName("carousel-item")[5]
.classList.add("carousel-item-visible");

let slideIndex = 0
function plusSlides(n){
  showSlides(slideIndex += n)

}
function showSlides(n){

  let slides = document.getElementsByClassName('carousel-item');
  if( n > slides.length) slideIndex = 1;
  if(n < 1) slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (let i=0; i<slides.length; i++){
    if(i == slideIndex){
      console.log(i, slideIndex)
      slides[i].classList.replace("carousel-item","carousel-item-visible")
   }
  }
  slides[slideIndex-1].style.display = "block";
  
}