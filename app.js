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
const uiBtn3 = document.getElementById("uiBtn3");
const videoPlayer = document.querySelector("video");
const elephant = document.getElementById("elephantEntity");
const BaumIn3D = document.getElementById("BaumIn3D");

uiBtn1.addEventListener("click", function () {
  videoPlayer.play();
  ui.style.visibility = "hidden";
  uiBtn1.style.display = "none";

});

uiBtn2.addEventListener("click", function () {
  elephant.setAttribute("visible", "true");
  videoPlayer.pause();
  videoPlayer.setAttribute("src", "src/Elefant.mp4")
  videoPlayer.play();
});

uiBtn3.addEventListener("click", function () {
  BaumIn3D.setAttribute("visible", "true");
  videoPlayer.pause();
  videoPlayer.setAttribute("src", "src/Steine.mp4")
  videoPlayer.play();
});

videoPlayer.onpause = function () {

  uiHdr.innerHTML = "Was kann ich für dich tun?";
  uiBtn3.innerHTML = "Zeige mir eine Steinformation";
  uiBtn2.innerHTML = "Zeige mir einen Elefanten";
  uiBtn2.style.display = "block";
  uiBtn3.style.display = "block";
  ui.style.visibility = "visible";
};
