document.addEventListener('DOMContentLoaded', function() {
    let score = 0;
    const scoreDisplay = document.getElementById('score');
    const plusOneBtn = document.getElementById('plusOne');
    const plusTwoBtn = document.getElementById('plusTwo');
    const minusOneBtn = document.getElementById('minusOne');
    const minusTwoBtn = document.getElementById('minusTwo');

    plusOneBtn.addEventListener('click', function() {
        score += 1;
        scoreDisplay.textContent = score;
    });

    plusTwoBtn.addEventListener('click', function() {
        score += 2;
        scoreDisplay.textContent = score;
    });

    minusOneBtn.addEventListener('click', function() {
        score -= 1;
        scoreDisplay.textContent = score;
    });

    minusTwoBtn.addEventListener('click', function() {
        score -= 2;
        scoreDisplay.textContent = score;
    });
  let scoreTwo = 0;
  const scoreDisplayTwo = document.getElementById('scoreTwo');
  const plusOneTwoBtn = document.getElementById('plusOneTwo');
  const plusTwoTwoBtn = document.getElementById('plusTwoTwo');
  const minusOneTwoBtn = document.getElementById('minusOneTwo');
  const minusTwoTwoBtn = document.getElementById('minusTwoTwo');

  plusOneTwoBtn.addEventListener('click', function() {
    scoreTwo += 1;
    scoreDisplayTwo.textContent = scoreTwo;
  });

  plusTwoTwoBtn.addEventListener('click', function() {
    scoreTwo += 2;
    scoreDisplayTwo.textContent = scoreTwo;
  });

  minusOneTwoBtn.addEventListener('click', function() {
    scoreTwo -= 1;
    scoreDisplayTwo.textContent = scoreTwo;
  });

  minusTwoTwoBtn.addEventListener('click', function() {
    scoreTwo -= 2;
    scoreDisplayTwo.textContent = scoreTwo;
  });
});
const audio = new Audio('goal.mp3');
document.getElementById('plusTwoTwo').addEventListener('click', function() {
  audio.play();
  setTimeout(function() {
    audio.pause();
    audio.currentTime = 0;
  }, 2000);
});

document.getElementById("generate-button").onclick = function() {
	const min = 1;
	const max = 6;
	const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	document.getElementById("result").textContent = randomNumber;
}


let interval;
let seconds = 0;
let minutes = 0;

function resetTimer() {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  document.getElementById('timer').textContent = formatTime();
}

function incrementSeconds() {
  seconds++;
  document.getElementById('timer').textContent = formatTime();
}

function incrementMinutes() {
  minutes++;
  document.getElementById('timer').textContent = formatTime();
}

function decrementSeconds() {
  if (seconds > 0 || minutes > 0) {
    if (seconds === 0) {
      seconds = 59;
      decrementMinutes();
    } else {
      seconds--;
    }
    document.getElementById('timer').textContent = formatTime();
  }
}

function decrementMinutes() {
  if (minutes > 0) {
    minutes--;
    document.getElementById('timer').textContent = formatTime();
  }
}

function startTimer() {
  interval = setInterval(() => {
    decrementSeconds();
  }, 450);
}

function stopTimer() {
  clearInterval(interval);
}

function formatTime() {
  let formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  let formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  
  return `${formattedMinutes}:${formattedSeconds}`;
}
