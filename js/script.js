// Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function activeLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("active");
  }
}

links.forEach(activeLink);

// Ativar Itens no Orçamento (Purchase)
const parameters = new URLSearchParams(location.search);

function activeProduct(parameter) {
  const element = document.getElementById(parameter);
  if (element) {
    element.checked = true;
  }
}

parameters.forEach(activeProduct);

// Perguntas Frequentes
const questions = document.querySelectorAll(".questions button");

function activeQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("open");
  const open = answer.classList.contains("open");
  question.setAttribute("aria-expanded", open);
}

function questionsEvent(question) {
  question.addEventListener("click", activeQuestion);
}

questions.forEach(questionsEvent);
