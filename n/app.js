(function displayDayAndDate() {
  var now, days, months, year;

  now = new Date();

  days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  var day = now.getDay();
  var month = now.getMonth();
  var date = now.getDate();
  var year = now.getFullYear();

  document.querySelector(".dayOfWeek").innerHTML = "- " + days[day - 1] + " -";
  document.querySelector(".currentDate").innerHTML =
    months[month] + " " + date + ", " + year;
})();

let items = [];

function addTask(text) {
  var task = {
    text,
    checked: false,
    id: Date.now()
  };

  items.push(task);
  console.log(items);

  const list = document.querySelector(".list");
  list.insertAdjacentHTML(
    "beforeend",
    `
  <li class="todo-item animated fadeIn faster " data-key="${task.id}">
    <input id = "${task.id}" type="checkbox" class="styled-checkbox" >
    <label for="${task.id}" class="tick" >${task.text}</label>
 <button class= "delete-todo" > 
 <img src="\\css\\svg\\remove.svg" alt="" />
 </button>
 </li>

`
  );
}

var form = document.querySelector(".js-form");
form.addEventListener("submit", event => {
  event.preventDefault();
  const input = document.querySelector(".text-input");
  const text = input.value.trim();

  if (text !== "") {
    addTask(text);
    input.value = "";
    input.focus();
  }
});

const list = document.querySelector(".list");
list.addEventListener("click", event => {
  const itemKey = event.target.parentElement.dataset.key;

  if (event.target.classList.contains("tick")) {
    toggleDone(itemKey);
  }
});

list.addEventListener("click", event => {
  if (event.target.classList.contains("delete-todo")) {
    const itemKey = event.target.parentElement.dataset.key;

    deleteToDo(itemKey);
  }
});

function toggleDone(key) {
  const item = document.querySelector(`[data-key='${key}']`);
  const index = items.findIndex(item => item.id === Number(key));

  items[index].checked = !items[index].checked;

  if (items[index].checked) {
    item.classList.add("done");
  } else {
    item.classList.remove("done");
  }
}
function deleteToDo(key) {
  items = items.filter(item => item.id !== Number(key));
  const item = document.querySelector(`[data-key='${key}']`);
  item.remove();
}

(function backgroundHandler() {
  var element = document.querySelector(".background-Image");
  element.style.backgroundImage = "url('/css/svg/color.png')";
})();
