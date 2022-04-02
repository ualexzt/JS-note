const category = [
  {
    id: 1,
    name: "Task",
  },
  {
    id: 2,
    name: "Random Thought",
  },
  {
    id: 3,
    name: "Idea",
  },
];
const data = [
  {
    id: 1,
    name: "Add notes",
    createdAt: "20/03/2022",
    category: "Task",
    content: "My notes",
    dates: "",
    archived: true,
  },
  {
    id: 2,
    name: "Go home",
    createdAt: "9/04/2022",
    category: "Task",
    content: "I wont to go home",
    dates: "",
    archived: false,
  },
];
var myModal = document.getElementById("exampleModal");
var myInput = document.getElementById("name");

myModal.addEventListener("shown.bs.modal", function () {
  const selectOptions = document.getElementById("category").options;
  category.forEach((item) => {
    selectOptions.add(new Option(item.name));
  });
  myInput.focus();
});

function loadData(data) {
  let tBody = document.getElementById("tbodyMain");
  tBody.innerHTML = "";

  data.forEach((el) => {
    let row = document.createElement("tr");
    if (!el.archived) {
      row.innerHTML = `<th scope="row">${el.id}</th>
      <td>${el.name}</td>
      <td>${el.createdAt}</td>
      <td>${el.category}</td>
      <td>${el.content}</td>
      <td>${el.dates}</td>
      <td>
        <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i class="bi bi-pen"></i>
        </button>
        <button type="button" class="btn btn-outline-secondary" onClick=archiveTask(${el.id})>
          <i class="bi bi-archive"></i>
        </button>
        <button type="button" class="btn btn-outline-secondary" onClick="deleteTask(${el.id})">
          <i class="bi bi-trash"></i>
        </button>
      </td>`;
    }
    tBody.appendChild(row);
  });
}

loadData(data);

function deleteTask(id) {
  const idx = data.findIndex((item) => item.id === id);
  data.splice(idx, 1);
  console.log(data);
  loadData(data);
}
function archiveTask(id) {
  const idx = data.findIndex((item) => item.id === id);
  data.map((item) => {
    if (item.id === id) {
      item.archived = true;
    }
  });
  console.log(data);
  loadData(data);
}
