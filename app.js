const game = document.getElementById("game");
const scoreDisplay = document.getElementById("score");


document.addEventListener("DOMContentLoaded", function() {
    const backgroundMusic = document.getElementById("backgroundMusic");
    backgroundMusic.play();
});

const JeopardyCategories = [

    {
        genre: "From the Checkbook",
        questions: [

            {
                question: "Liabilities plus Equity equals what?",
                answers:["Debts", "Assets"],
                correct: "Assets",
                level: "easy"
            
            },
           
            {
                question: " The [-------] method recognizes revenue when it is earned.",
                answers:["Accrual", "Cash"],
                correct: "Accrual",
                level: "medium"
            
            },

            {
                question: "The [-------] principle of GAAP records transactions at arm's length.",
                answers:["Materiality", "Cost"],
                correct: "Cost",
                level: "hard"
            
            },

        ],
    },
{
    genre: "F1 Funnies",
    questions: [
        {
            question: "Which league is considered more of a marathon?",
            answers:["Formula 1", "Nascar"],
            correct: "Nascar",
            level: "easy"
        
        },
       
        {
            question: "The concept of Blue Flags in Formula 1 indicates what?",
            answers:["Wet Track", "Allowing Faster Cars to Pass"],
            correct: "Allowing Faster Cars to Pass",
            level: "medium"
        
        },

        {
            question: "The Formula 1 Grand Prix held at Monaco where?",
            answers:["Eau Rouge", "Casino Square"],
            correct: "Casino Square",
            level: "hard"
        
        },


    ]

},
{
    genre: "Drakey poohhh",
    questions: [
        {
            question: "I was running through the [----] with my woes.",
            answers:["Streets", "Six"],
            correct: "Six",
            level: "easy"
        
        },
       
        {
            question: "The mixtape that had a track called Best I Ever Had was [------]",
            answers:["So Far Gone", "If You're Reading This It's Too Late"],
            correct: "So Far Gone",
            level: "medium"
        
        },

        {
            question: "I'm more than a [-----], I'm a movement",
            answers:["Presence", "Rapper"],
            correct: "Presence",
            level: "hard"
        
        },


    ]
},

{
    genre: "Atkinson AHH!!",
    questions: [
        {
            question: "What was the name Erin was almost called?",
            answers:["Sabrina", "Rachel"],
            correct: "Sabrina",
            level: "easy"
        
        },
       
        {
            question: "What city of Texas was Erin Atkinson born?",
            answers:["McKinney", "Plano"],
            correct: "Plano",
            level: "medium"
        
        },

        {
            question: "What time was Erin Atkinson born?",
            answers:["10:23 pm", "10:24 pm"],
            correct: "10:23 pm",
            level: "hard"
        
        },


    ]
}


];

let score = 0;

function addCategory(category) {
  const column = document.createElement("div");
  column.classList.add("genre-column");

  const genreTitle = document.createElement("div");
  genreTitle.classList.add("genre-title");
  genreTitle.innerHTML = category.genre;

  column.appendChild(genreTitle);
  game.append(column);

  category.questions.forEach((question) => {
    const card = document.createElement("div");
    card.classList.add("card");
    column.append(card);

    if (question.level === "easy") {
      card.innerHTML = 100;
    } else if (question.level === "medium") {
      card.innerHTML = 200;
    } else if (question.level === "hard") {
      card.innerHTML = 300;
    }

    card.setAttribute("data-question", question.question);
    card.setAttribute("data-answer-1", question.answers[0]);
    card.setAttribute("data-answer-2", question.answers[1]);
    card.setAttribute("data-answer-3", question.answers[2]);
    card.setAttribute("data-correct", question.correct);
    card.setAttribute("data-value", card.innerHTML);

    card.addEventListener("click", flipCard);
  });
}

JeopardyCategories.forEach((category) => addCategory(category));

function flipCard() {
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((card) => card.removeEventListener("click", flipCard));

  this.innerHTML = "";
  this.style.fontSize = "15px";
  this.style.lineHeight = "15px";

  const textDisplay = document.createElement("div");
  textDisplay.classList.add("card-text");
  textDisplay.innerHTML = this.getAttribute("data-question");

  const firstButton = document.createElement("button");
  const secondButton = document.createElement("button");

  firstButton.classList.add("first-button");
  secondButton.classList.add("second-button");
  firstButton.innerHTML = this.getAttribute("data-answer-1");
  secondButton.innerHTML = this.getAttribute("data-answer-2");

  firstButton.addEventListener("click", getResult.bind(this, firstButton));
  secondButton.addEventListener("click", getResult.bind(this, secondButton));

  this.append(textDisplay, firstButton, secondButton);
}

function getResult(clickedButton) {
  const cardOfButton = clickedButton.parentElement;
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((card) => card.addEventListener("click", flipCard));

  if (cardOfButton.getAttribute("data-correct") === clickedButton.innerHTML) {
    score = score + parseInt(cardOfButton.getAttribute("data-value"));
    scoreDisplay.innerHTML = score;
    cardOfButton.classList.add("correct-answer");
    setTimeout(() => {
      while (cardOfButton.firstChild) {
        cardOfButton.removeChild(cardOfButton.lastChild);
      }
      cardOfButton.innerHTML = cardOfButton.getAttribute("data-value");
    }, 100);
  } else {
    cardOfButton.classList.add("wrong-answer");
    setTimeout(() => {
      while (cardOfButton.firstChild) {
        cardOfButton.removeChild(cardOfButton.lastChild);
      }
      cardOfButton.innerHTML = 0;
    }, 100);
  }

  cardOfButton.removeEventListener("click", flipCard);
}




const goToNewPageButton = document.getElementById("goToNewPageButton");

if (goToNewPageButton) {
  goToNewPageButton.addEventListener("click", function () {
    // Change "newpage.html" to the desired URL of your new page
    window.location.href = "spokenword.html";
  });
}