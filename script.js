
const bell = document.getElementById("bell");
const character = document.getElementById("character-container");
const closeBtn = document.getElementById("close-btn");
const speechBubble = document.getElementById("speech-bubble");
const typedText = document.getElementById("typed-text");
const options = document.getElementById("options");
const ding = document.getElementById("ding-sound");

const infoButtons = document.querySelectorAll(".info-btn");
const contentSections = document.querySelectorAll(".content-section");

bell.addEventListener("click", () => {
  ding.play();
  bell.style.display = "none";
  character.style.display = "block";
  typeText("Hello! How can I help you today?");
  showOptions(["What's this place?", "What can I buy?", "How do I order?"]);
});

closeBtn.addEventListener("click", () => {
  character.style.display = "none";
  bell.style.display = "block";
  typedText.textContent = "";
  options.innerHTML = "";
});

function typeText(text) {
  typedText.textContent = "";
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      typedText.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 50);
}

function showOptions(optionList) {
  options.innerHTML = "";
  optionList.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.addEventListener("click", () => {
      typeText("Here's some info about: " + opt);
    });
    options.appendChild(btn);
  });
}

infoButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;
    contentSections.forEach(section => {
      section.style.display = section.id === target ? "block" : "none";
    });
  });
});
