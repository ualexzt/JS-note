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
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});

function loadData(data) {
  let tBody = document.getElementById("tbodyMain");

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
        <button type="button" class="btn btn-outline-secondary">
          <i class="bi bi-archive"></i>
        </button>
        <button type="button" class="btn btn-outline-secondary">
          <i class="bi bi-trash"></i>
        </button>
      </td>`;
    }
    tBody.appendChild(row);
  });
}

loadData(data);
