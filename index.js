var STORE = {
  questions: [
    //1
    {
      question: "How old is the art of barbecue?",
      options: [
        "a. Invented in the 1950's",
        "b. Invented by Abraham Lincoln in 1830",
        "c. Has been around ever since meat was cooked over an open flame",
        "d. Since Roman times",
      ],
      answer: 2,
    },
    //2
    {
      question: "What are the major barbecue styles of the United States?",
      options: [
        "a. North, South, East, West",
        "b. Maine style and Oregon Style",
        "c. New York, Deep Dish, and Detroit",
        "d. Texas, Carolina, Kansas City and Alabama",
      ],
      answer: 3,
    },
    //3
    {
      question: "Which style is know for using beef as the main meat source?",
      options: ["a.Carolina", "b.Alabama", "c.Texas", "d. Kansas City"],
      answer: 2,
    },
    //4
    {
      question:
        "Which region is famous for having 3 different styles of barbecue?",
      options: ["a.Alabama", "b.Carolina", "c.Texas", "d.Kansas City"],
      answer: 1,
    },
    //5
    {
      question: "Which region is considered the crossroads of bbq?",
      options: ["a. Texas", "b. Alabama", "c. Kansas City", "d. Florida"],
      answer: 2,
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
      answer: 0,
    },
    //7
    {
      question: "How is barbecue typically cooked?",
      options: [
        "a. Hot and Fast",
        "b. Cold and Quick",
        "c. Microwave",
        "d. Low and Slow",
      ],
      answer: 3,
    },
    //8
    {
      question: "What temperature is most barbecue cooked to?",
      options: ["a. 145°F", "b. 32°F", "c. 203°C", "d. 203°F"],
      answer: 3,
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
      answer: 1,
    },
    //10
    {
      question: "Which tool is most important for cooking barbecue?",
      options: ["a.Kitchen sink", "b. Grill/smoker", "c. Knife", "d. Spatula"],
      answer: 1,
    },
  ],
  correctAnswers: 0,
  questionIndex: 0,
  quizStarted: false,
};

//Populates options for the current question
function populateOptions(currentQuestionOptions) {
  return currentQuestionOptions
    .map(generateOption)
    .join("");
}
function generateOption(option, index) {
  return `<li class="opt"><input type="radio" name="answer" value="${index}" required><label>${option}</label></input></li>`;
}
//Shows question and builds submit button
function showQuestion(store) {
  $("#questions").html(generateQuestion(store));
}
function generateQuestion(store) {
  return `
  <div>Question #${store.questionIndex + 1}</div><br>
   <div>Score:<br>${store.correctAnswers}/${store.questions.length}</div>
  <div>${store.questions[store.questionIndex].question}</div>
  <ul id="ul">
      ${populateOptions(store.questions[store.questionIndex].options)}
  </ul> 
  <input type="submit" class="btnSubmit"></input>
`;

}
//toggle the greeting to hide
function toggleGreeting() {
  $("#greeting").toggle();
}

//Provides visual feedback on whether question is correct or not
function provideFeedback(store, element) {
  if (element.val() == store.questions[store.questionIndex].answer) {
    store.correctAnswers++;
    $("#questions").html(generateCorrectAnswer());
  } else {
    $("#questions").html(
      generateIncorrectAnswer(
        STORE.questions[STORE.questionIndex].options[
          STORE.questions[STORE.questionIndex].answer
        ]
      )
    );
  }
}
function generateCorrectAnswer() {
  return `<p>Correct!</p>`;
}
function generateIncorrectAnswer(answer) {
  return `<p>Wrong!</p>
        <div>The correct answer is:<br>
        ${answer}</div>`;
}

//Computes the score at the end of the quiz
function showScore(store) {
  $("#questions").html(generateScore(store));
}
function generateScore(store) {
  return `<div>Score:${store.correctAnswers}/${store.questions.length}</div>`
}

//Function that starts the quiz and show the first question
$(function () {
  $("#start").click(function (event) {
    event.preventDefault;
    toggleGreeting();
    showQuestion(STORE);
  });

  //Submits user answer input and provides feedback
  $("#questions").submit(function (event) {
    event.preventDefault();
    $(".btnSubmit").hide();
    var answer_element = $("input[name='answer']:checked");
    provideFeedback(STORE, answer_element);
    STORE.questionIndex++;
    if (STORE.questionIndex < 10) {
      $("#next").toggle();
    } else {
      $("#score").toggle();
    }
  });
  //What happens when the next button is clicked
  $("#next").click(function (event) {
    event.preventDefault();
    $("#next").toggle();
    showQuestion(STORE);
  });

  //When the show score button at the end of the quiz is clicked and generates restart button
  $("#score").click(function (event) {
    event.preventDefault();
    $("#score").toggle();
    showScore(STORE);
    $("#restart").toggle();
  });
  //Shows what happens when the restart button is clicked
  $("#restart").click(function (event) {
    event.preventDefault();
    STORE.questionIndex = 0;
    STORE.correctAnswers = 0;
    $("#restart").toggle();
    showQuestion(STORE);
  });
});
