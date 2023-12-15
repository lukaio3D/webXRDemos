const geschBtn = document.getElementById("geschichteButton");

geschBtn.addEventListener("click", function(){
    document.querySelector("video").play();
    console.log("button geklickt!");
})
