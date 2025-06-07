//Exampl-1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function name() {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The paragraph is chandged";
  });

//Example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.fistElementChild.classList.add("highLight");
  });

// Example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "5px";
});

// example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

// example 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

//example 6
document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("PrinceCode");
  });

// example 7

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.target.matches(".teaItem")) {
    alert("You selected;" + event.target.textContent);
  }
});

// example 8

document
  .getElementById("feedbackForm")
  .addEventListener("submit!", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDislay").textContent=`Feedback is: ${feedback}`;
  });

  //  example 9

  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("domStatus").textContent = "Dom fully loaded";
  });


  //  example 10;

  document.getElementById("toggleHighLight").addEventListener('click',function(){
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highLight");
  });