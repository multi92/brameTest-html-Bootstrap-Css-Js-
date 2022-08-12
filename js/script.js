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

function showQuestions(index) {
  const que_text = document.querySelector(".que_text");
  const option_list = document.querySelector(".option_list");
  let que_tag = "<p>" + `${questions[index].question}` + "</p>";
  let option_tag = `
    
    <div class="option">${questions[index].options[0]} <span></span></div>
  
  <div class="option"> ${questions[index].options[1]}<span></span></div>
  
  <div class="option">${questions[index].options[2]}<span></span></div>
  
  <div class="option">${questions[index].options[3]}<span></span></div>`;

  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;
}
