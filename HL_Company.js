const barsIcon = document.querySelector(".fa-bars");
const mobieList = document.querySelector(".mobie-list");

barsIcon.addEventListener("click", function() {
  mobieList.classList.toggle("active");
});

document.getElementById('exit-icon').addEventListener('click', function() {
  mobieList.classList.remove("active");
});