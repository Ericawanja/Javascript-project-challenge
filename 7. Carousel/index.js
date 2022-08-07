  const images=[
    {src:'./images/image0.jpg'},
    {src:'./images/image1.jpg'},
    {src:'./images/image2.jpg'},
    {src:'./images/image3.jpg'},
    {src:'./images/image4.jpg'},
    {src:'./images/image5.jpg'},
    {src:'./images/image6.jpg'},
    {src:'./images/image4.jpg'},

  ]
  const imgContainer = document.getElementsByClassName("carousel")[0]
  imgContainer.innerHTML= images.map(img=>{
    return`
    <div class="carousel-item">
            <img src='${img.src}' alt="">
        </div>
    `
  }).join("")

  document.querySelector('.carousel-item').classList.add("carousel-item-visible")