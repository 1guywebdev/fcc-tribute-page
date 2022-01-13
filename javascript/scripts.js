var modal = document.getElementById("modal");

var img = document.getElementById("image");
var modalImg = document.getElementById("modal-image");
var imgText = document.getElementById("img-caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  imgText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close-modal")[0];

span.onclick = function(){
  modal.style.display = "none";
}


const details = document.querySelectorAll("details");

details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});
