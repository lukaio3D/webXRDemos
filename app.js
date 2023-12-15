const geschBtn = document.getElementById("geschichteButton");
const elephant = document.getElementById("elephantEntity");

geschBtn.addEventListener("click", function(){
    document.querySelector("video").play();
    setTimeout( elephant.setAttribute("visible", "true") , 5000);
})
