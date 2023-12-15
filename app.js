/* Credits */

const creditBtn = document.getElementById("creditBtn");
const credits = document.getElementById("credits");
let creditFlag = true;

creditBtn.addEventListener("click", function () {
  if (creditFlag) {
    credits.style.visibility = "visible";
    creditFlag = false;
  } else {
    credits.style.visibility = "hidden";
    creditFlag = true;
  }
});

/* Sequenzen */

const ui = document.getElementById("ui");
const uiHdr = document.getElementById("uiHeader");
const uiBtn1 = document.getElementById("uiBtn1");
const uiBtn2 = document.getElementById("uiBtn2");
const videoPlayer = document.querySelector("video");
const elephant = document.getElementById("elephantEntity");
const BaumIn3D = document.getElementById("BaumIn3D");

let seqCounter = 0;

switch (seqCounter) {
  /* Intro Sequenz */
  case 0:
    uiBtn1.addEventListener("click", function () {
      if(seqCounter == 0){
        videoPlayer.play();
        ui.style.visibility = "hidden";
        setTimeout(seqCounter++, 30000)
        ;
      }
      if(seqCounter == 1){
        BaumIn3D.setAttribute("visible", "true");
        console.log("Button1 gedrückt");
      }

    });


  /* Frage Sequenz */
  case 1:
    videoPlayer.onpause = function () {
      uiHdr.innerHTML = "Was möchtest du von mir?";
      uiBtn1.innerHTML = "Zeige mir einen Baum";
      uiBtn2.innerHTML = "Zeige mir einen Elefanten";
      uiBtn2.style.display = "block";
      ui.style.visibility = "visible";
      uiBtn2.addEventListener("click", function () {
        elephant.setAttribute("visible", "true");
      });
    };
}
