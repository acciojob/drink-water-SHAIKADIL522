const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  // clicking the last filled cup again un-fills just that cup
  if (
    smallCups[idx].classList.contains("full") &&
    (idx === smallCups.length - 1 ||
      !smallCups[idx + 1].classList.contains("full"))
  ) {
    idx--;
  }

  smallCups.forEach((cup, i) => {
    if (i <= idx) cup.classList.add("full");
    else cup.classList.remove("full");
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const total = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / total) * 100}%`;
    percentage.innerText = `${(fullCups / total) * 100}%`;
  }

  if (fullCups === total) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    remained.style.height = "auto";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}