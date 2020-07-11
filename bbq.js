const STORE = {
  questions: [
    {
      question: "How old is the art of barbecue?",
      options: [
        "a.Invented in the 1950's",
        "b. Invented by Abraham Lincoln in 1830",
        "c. Has been around ever since meat was cooked over an open flame",
        "d. Since Roman times",
      ],
      answer:
        "c. Has been around ever since meat was cooked over an open flame",
    },
    //2
    {
      question: "What are the major barbecue styles of the United States?",
      options: [
        "a. North, South, East, West",
        "b. Maine style and Oregon Style",
        "c. New York, Deep Dish, and Detroit",
        "d.Texas, Carolina, Kansas City and Alabama",
      ],
      answer: "d.Texas, Carolina, Kansas City and Alabama",
    },
    //3
    {
      question: "Which style is know for using beef as the main meat source?",
      options: ["a.Carolina", "b.Alabama", "c.Texas", "d. Kansas City"],
      answer: "c.Texas",
    },
    //4
    {
      question:
        "Which region is famous for having 3 different styles of barbecue?",
      options: ["a.Alabama", "b.Carolina", "c.Texas", "d.Kansas City"],
      answer: "b.Carolina",
    },
    //5
    {
      question: "Which region is considered the crossroads of bbq?",
      options: ["a.Texas", "b. Alabama", "c.Kansas City", "d.Florida"],
      answer: "c. Kansas City",
    },
    //6
    {
      question: "Which region is famous for having white barbecue sauce?",
      options: [
        "a. Alabama",
        "b. Delaware",
        "c. Pacific Northwest",
        "d. Homestyle",
      ],
      answer: "a. Alabama",
    },
    //7
    {
      question: "How is barbecue typically cooked?",
      options: [
        "a. Hot and Fast",
        "b. COld and Quick",
        "c. Microwave",
        "d. Low and Slow",
      ],
      answer: "d. Low and Slow",
    },
    //8
    {
      question: "What temperature is most barbecue cooked to?",
      options: ["a. 145°F", "b. 32°F", "c. 203°C", "d. 203°F"],
      answer: "d. 203°F",
    },
    //9
    {
      question: "What type of heat is used for cooking barbecue?",
      options: [
        "a. Searing",
        "b. Indirect heat",
        "c. Sous vide",
        "d. Flash fry",
      ],
      answer: "b. Indirect heat",
    },
    //10
    {
      question: "WHich tool is most important for cooking barbecue?",
      options: ["a.Kitchen sink", "b. Grill/smoker", "c. Knife", "d. Spatula"],
      answer: "b. Grill/smoker",
    },
  ],
  questionIndex: 0,
  quizStarted: false,

  //render the question according to the index of that question
  render: function () {
    const container = $(".quiz-container");
    if (!this.quizStarted) {
      container.html(`
            <button id="btnStart" type="button">
                        Start</button>
                        `);
    } else if (this.quizStarted) {
      container.html(`
      <div>${this.questions[this.questionIndex].question}</div>
      <div>${this.questions[this.questionIndex].options}</div>
      <ul id="ul">
                <li id="opt1" onclick="button(this)"></li>
                <li id="opt2" onclick="button(this)"></li>
                <li id="opt3" onclick="button(this)"></li>
                <li id="opt4" onclick="button(this)"></li>
            </ul>     
      <button id="btnNext" type="button">
                Next</button>
      `);
    } else {
      quizbox.innerHTML = "Quiz Completed";
      ul.style.display = "none";
      nextButton.style.display = "Restart";
    }
  },
  //renders the quiz container upon start button click

  quizStartHandler: function () {
    $(".quiz-container").on("click", "#btnStart", function () {
      STORE.quizStarted = true;
      STORE.render();
    });
  },

  //increase the question index after Next button is clicked
  // var nextButton = document.getElementById("btnNext");
  next: function () {
    this.index++;
    this.load();
  },
  //Get the option that was clicked and extract that option and apply the style class
  check: function (ele) {
    var id = ele.id.split("");
    if (id[id.length - 1] == this.questions[this.index].answer) {
      this.score++;
      ele.className = "correct";
      this.scoreCard();
    } else {
      ele.className = "wrong";
    }
  },
  //Prevent user to change answer after one has been selected
  preventClick: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "none";
    }
  },
  //Allow user to click answer options
  allowClick: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "auto";
      ul.children[i].className = "";
    }
  },
  //When an answewred question is correct, the score is increased by one
  score: 0,
  //
  scoreCard: function () {
    scoreCard.innerHTML = this.score + "/" + this.questions.length;
  },
};
//When the window loads, the app will load
// window.load=STORE.load();

// function button(ele){
// STORE.check(ele);
// STORE.preventClick();
// }
// //When next button is clicked, call the next function which will load up the next question
// function next(){
// STORE.next();
// STORE.allowClick()}

function renderQuiz() {
  STORE.quizStartHandler();
//   STORE.renderAnswerOptions();
  //   STORE.handleoptionClick();
  //   STORE.handleformSubmit();
  STORE.render();
}

renderQuiz();
