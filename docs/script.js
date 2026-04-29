const titleButton = document.querySelector("#titleJoke");
const titleLine = document.querySelector("#titleLine");
const cheatPanel = document.querySelector("#cheatPanel");
const closeCheat = document.querySelector("#closeCheat");
const cheatJoke = document.querySelector("#cheatJoke");
const confettiField = document.querySelector("#confettiField");

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why can't you give Elsa a balloon? Because she'll let it go.",
  "I'm reading a book about anti-gravity. It's impossible to put down.",
  "Did you hear about the guy who invented Lifesavers? He made a mint.",
  "Did you hear about the award the scarecrow recieved? he was outstanding in his field!",
  "I used to hate facial hair, but then it grew on me.",
  "What do you call a fake noodle? An impasta.",
  "I told my doctor I broke my arm in two places. He told me to stop going to those places.",
  "Why did the bicycle fall over? Because it was two-tired.",
  "Why did the crow get an award? Because he was out standing in his field."
];

const cheatJokes = [
  "I asked my API for a joke. It gave me a status code and emotional support.",
  "Cheat mode unlocked: all jokes now ship with unnecessary confidence.",
  "You found the hidden feature. The hidden feature is mostly vibes.",
  "Dad Mode has entered production. There is no rollback plan.",
  "Konami would be proud. Your terminal would be concerned."
];

const konami = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA"
];

let jokeIndex = 0;
let konamiIndex = 0;

function setJoke(nextIndex) {
  jokeIndex = nextIndex % jokes.length;
  titleLine.classList.remove("is-swapping");
  window.requestAnimationFrame(() => {
    titleLine.textContent = jokes[jokeIndex];
    document.title = `JokeBot | ${jokes[jokeIndex]}`;
    titleLine.classList.add("is-swapping");
  });
}

function burstConfetti(amount = 90) {
  const colors = ["#38d6ff", "#ff3d9d", "#b9ff4d", "#ffb84a", "#f8fbff"];
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.setProperty("--drift", `${(Math.random() - 0.5) * 360}px`);
    piece.style.setProperty("--duration", `${2.3 + Math.random() * 2.2}s`);
    piece.style.setProperty("--confetti-color", colors[i % colors.length]);
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    piece.style.animationDelay = `${Math.random() * 0.28}s`;
    fragment.append(piece);
  }

  confettiField.append(fragment);
  window.setTimeout(() => {
    confettiField.replaceChildren();
  }, 5200);
}

function openCheatMode() {
  document.body.classList.add("cheat-mode");
  cheatJoke.textContent = cheatJokes[Math.floor(Math.random() * cheatJokes.length)];
  cheatPanel.classList.add("is-open");
  burstConfetti(130);
}

function closeCheatMode() {
  cheatPanel.classList.remove("is-open");
}

titleButton.addEventListener("click", () => {
  setJoke(jokeIndex + 1);
  burstConfetti(18);
});

titleButton.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    titleButton.click();
  }
});

closeCheat.addEventListener("click", closeCheatMode);

cheatPanel.addEventListener("click", (event) => {
  if (event.target === cheatPanel) {
    closeCheatMode();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === konami[konamiIndex]) {
    konamiIndex += 1;
    if (konamiIndex === konami.length) {
      konamiIndex = 0;
      openCheatMode();
    }
    return;
  }

  konamiIndex = event.code === konami[0] ? 1 : 0;

  if (event.key === "Escape") {
    closeCheatMode();
  }
});
