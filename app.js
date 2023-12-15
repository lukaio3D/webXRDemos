const geschBtn = document.getElementById("geschichteButton");
const elephant = document.getElementById("elephantEntity");

geschBtn.addEventListener("click", function(){
    document.querySelector("video").play();
    setTimeout( elephant.setAttribute("visible", "true") , 5000);
})

const creditBtn = document.getElementById('creditBtn');
const credits = document.getElementById("credits");
let creditFlag = true;

credits.style.visibility = "hidden";

creditBtn.addEventListener("click", function(){
    if (creditFlag){
        credits.style.visibility = "visible";
        creditFlag = false;
    }
    else {
        credits.style.visibility ="hidden";
        creditFlag = true;
    }
})