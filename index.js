document.addEventListener("DOMContentLoaded", function () {
  const displayPunch = document.querySelector(".display-punch");
  const displayPunch2 = document.querySelector(".display-punch2");
  let playBtn = document.querySelectorAll(".play-btn");
  let resultElement = document.querySelector(".result-element");

  playBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      let src = btn;
      displayPunch.classList.remove("scissor-rotate");
      displayPunch2.classList.remove("scissor-rotate");
      displayPunch.classList.add("animation");
      displayPunch2.classList.add("animation");
      displayPunch.src = "punch-img.png";
      displayPunch2.src = "punch-right.png";
      resultElement.textContent = `wait...`;

      let arr = ["punch-right.png", "paper.png", "scissor.png"];
      let randomNumber = Math.floor(Math.random() * 3);
      let randomChoice = arr[randomNumber];
      let bla = ["r", "p", "s"][randomNumber];
      let userValue = btn.value;
      console.log(userValue);

      btn.disabled = true;

      let win = {
        stoner: "draw",
        paperp: "draw",
        scissors: "draw",
        stonep: "computer",
        stones: "user",
        paperr: "user",
        papers: "computer",
        scissorr: "computer",
        scissorp: "user",
      };

      setTimeout(() => {
        displayPunch.classList.remove("animation");
        displayPunch2.classList.remove("animation");
        displayPunch.src = src.firstChild.src;
        displayPunch2.src = randomChoice;

        let winCheck = win[userValue + bla];
        if (winCheck === "draw") {
          resultElement.textContent = "Draw";
        } else {
          resultElement.textContent = `${winCheck} won`;
        }
        // add class of scissor to rotate
        if (btn.value === "scissor") {
          displayPunch.classList.add("scissor-rotate");
        }
        if (randomChoice === "paper.png") {
          displayPunch2.classList.add("scissor-rotate");
        }

        btn.disabled = false;
      }, 3000);
    });
  });
});
