//window onload
window.onload = function () {
  showQuestions(0);
};

//getting all required elements
// const buttonIntr = document.querySelector(".introductionButton");

//If start Button Clicked
// buttonIntr.onclick = () => {
//   //because in question.js we have only one questions object, we must put zero(0) in showQuestions function
//   showQuestions(0);
// };

//getting questions and options from array

let que_count = 0;
let que_numb = 1;
//getting the button next
const nextButton = document.querySelector(".nextButton");

//IF NEXT BUTTON CLICKED
nextButton.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
  } else {
    console.log("Question completed");
  }
};

//function for showing questions
function showQuestions(index) {
  //question getting query
  const que_text = document.querySelector(".que_text");
  //list of answer getting query
  const option_list = document.querySelector(".option_list");
  let que_tag =
    "<p>" +
    `${questions[index].numb}` +
    "." +
    `${questions[index].question}` +
    "</p>";
  let option_tag = `
    
    <div class="option">${questions[index].options[0]} <span></span> </div>
   
  
  <div class="option"> ${questions[index].options[1]}<span></span></div>
  
  
  <div class="option">${questions[index].options[2]}<span></span></div>
  
  <div class="option">${questions[index].options[3]}<span></span></div>`;

  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;
  //option list loop array
  const option = option_list.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    //we grab all option and put them onclick event
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

//counter question

function queCounter(index) {
  const queCounter = document.querySelector(".queCounter");
  let totalQuesCountTag =
    "<span><h2>" + index + "/" + questions.length + "</h2></span>";

  queCounter.innerHTML = totalQuesCountTag;
}

//function option selected answer

function optionSelected(answer) {
  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;
  if (userAns == correctAns) {
    console.log("Answer is Correct");
  } else console.log("Answer is Wrong");
}
