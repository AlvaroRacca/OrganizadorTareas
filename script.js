import checkComplete from "./components/checkComplete.js";
import deleterIcon from "./components/deleteIcon.js";

(() => {
  const btnAgregar = document.querySelector("[data-form-btn]");

  const createTask = (evento) => {
    const input = document.querySelector("[data-form-input]");
    evento.preventDefault(); /* Para quae no recargue la pagima */
    const value = input.value;
    input.value = "";
    const task = document.createElement("li");
    const list = document.querySelector("[data-list]");
    const taskContante = document.createElement("div");
    const taskTitulo = document.createElement("span");
    taskTitulo.classList.add("task");
    taskTitulo.innerText = value;
    taskContante.appendChild(checkComplete());
    taskContante.appendChild(taskTitulo);

    /*   task.innerHTML = content; */
    task.appendChild(taskContante);
    task.appendChild(deleterIcon());
    task.classList.add("card");
    list.appendChild(task);
  };

  btnAgregar.addEventListener("click", createTask);
})();
