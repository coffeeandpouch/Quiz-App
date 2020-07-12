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
        "b. COld and Quick",
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
    .map(function (option, index) {
      return `<li class="opt"><input type="radio" name="answer" value="${index}" required><label>${option}</label></input></li>`;
    })
    .join("");

}
//Shows and builds submit button 
function showQuestion(store) {
  $("#questions").html(`
        <div>${STORE.questions[STORE.questionIndex].question}</div>
        <ul id="ul">
            ${populateOptions(STORE.questions[store.questionIndex].options)}
        </ul>     
        <input type="submit" class="btnSubmit"></input>
    `);
}
//toggle the greeting to hide
function toggleGreeting() {
    $('#greeting').toggle();
}
//Provides visual feedback on whether question is correct or not
function provideFeedback(store, element) {
    if (element.val() == store.questions[store.questionIndex.answer]) {
        store.correctAnswers++
        $("#questions").html(`<p>Correct!</p>`)
    } else {
        $("#questions").html(`<p>Wrong!</p>`) 
    }
}
//Function that starts the quiz and show the first question
$(function () {
  $("#start").click(function (event) {
    event.preventDefault;
    toggleGreeting();
    showQuestion(STORE);
  });
//Submits user answer input
  $("#questions").submit(function(event) {
    event.preventDefault();
    console.log('submitted');
    STORE.questionIndex++;

    $(".btnSubmit").hide();
    var answer_element = $("input[name='answer']:checked")
    provideFeedback(STORE, answer_element);
    $("#questions").after(`<div><button class="btnNext" id="next">
                Next</button></div>`)

    


  });

    // Move button to html after question form 
    // Make next button hidden to start 
    // Show the button when question answer submitted 


    // Move showQuestion to the action triggered by the next button 
    // showQuestion(STORE);
    // Hide the next button 
  $('#next').click(function (event) {  
    event.PreventDefault();
    showQuestion();
    $("#next").hide();


  });
});



