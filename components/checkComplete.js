const checkComplete = () => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", completarTask);
  return i;
};

const completarTask = (event) => {
  const element = event.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
  element.classList.toggle("far");
  /* toggle verifica si existe la clase, si existe la elimina y si 
  no existe la agrega */
};

export default checkComplete;
