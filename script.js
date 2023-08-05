let result = document.getElementById("result");
let history = [];

function appendCharacter(character) {
  result.value += character;
}

function calculateResult() {
  try {
    const expression = result.value;
    const operationResult = eval(expression);
    result.value = operationResult;
    addToHistory(expression, operationResult);
  } catch (error) {
    result.value = "Ошибка";
  }
}

function clearResult() {
  result.value = "";
}

function addToHistory(expression, result) {
  history.push({ expression, result });
}

function showHistory() {
  const historyContainer = document.getElementById("history");
  historyContainer.innerHTML = "";
  history.forEach(item => {
    const historyItem = document.createElement("div");
    historyItem.classList.add("history-item");
    historyItem.innerText = `${item.expression} = ${item.result}`;
    historyContainer.appendChild(historyItem);
  });
  historyContainer.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
  const showHistoryButton = document.createElement("div");
  showHistoryButton.classList.add("show-history");
  showHistoryButton.innerHTML = '<button onclick="showHistory()">History</button>';
  document.body.appendChild(showHistoryButton);
});