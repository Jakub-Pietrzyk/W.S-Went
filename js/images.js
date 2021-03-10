function imgPreview() {

  document.querySelectorAll("img.clickable").forEach(function(img){
    img.onclick = function(el){
      document.querySelector(".preview-img").src = el.target.src;
      document.querySelector(".preview").classList.remove("hidden");
    }
  })

  document.querySelector(".preview").onclick = function(el){
    if(!el.target.classList.contains("preview-img")){
      document.querySelector(".preview-img").src = "";
      el.target.classList.add("hidden");
    }
  }

}

document.addEventListener("DOMContentLoaded", function(event) {
  imgPreview()
});
