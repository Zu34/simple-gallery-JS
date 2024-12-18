// data stored in an array of objects
const images = [
    { src: "../imgs/img1.jpg", alt: "Img1" },
    { src: "../imgs/img2.jpg", alt: "Img2" },
    { src: "../imgs/img3.jpg", alt: "Img3" },
    { src: "../imgs/img4.jpg", alt: "Img4" },
  ];
  
  const displayImage = document.getElementById("display-image");
  const previewContainer = document.querySelector(".previews");
  

  displayImage.src = images[0].src;
  displayImage.alt = images[0].alt;
  
  images.forEach((image) => {

    const preview = document.createElement("img");
    preview.src = image.src;
    preview.alt = image.alt;
    preview.classList.add("preview");
  
    preview.addEventListener("click", () => {
      displayImage.src = image.src;
      displayImage.alt = image.alt;
  
      document.querySelectorAll(".preview").forEach((prev) => {
        prev.style.borderColor = "transparent";
      });
      preview.style.borderColor = "#333";
    });
  
    
    previewContainer.appendChild(preview);
  });
  
  