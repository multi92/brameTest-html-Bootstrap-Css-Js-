//getting questions and options from array

let que_count = 0;

function showQuestions(index) {
  const que_text = document.querySelector(".que_text");
  const option_list = document.querySelector(".option_list");
  let que_tag = "<span>" + questions[index].question + "</span>";
  let option_tag =
    '<div class="option"></span></div>' +
    '<div class="option"></span></div>' +
    '<div class="option"></span></div>' +
    '<div class="option"></span></div>';
  que_text.innerHTML = que_tag;
}
