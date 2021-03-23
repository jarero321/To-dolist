"use strict"
// declaracion de variables
let contador = 0;
const search_bar = document.getElementById("search-bar");
const add_new_task = document.getElementById("add-new");
const button_add = document.getElementById("button-add");
const container_todolist = document.getElementById("container-todolist");
const agregar_task = () => {
    const fragment = document.createDocumentFragment();
    const value = add_new_task.value;
    let estructura = `<li class="li-item">
    <div class="random-color">
    </div><input type="checkbox" value="complete" id="checkbox${contador}" class="complete">
    <label for="checkbox${contador}"></label>
    <p class="">${value}</p>
    <button class="button-erase" value="erase" id="button_erase${contador}">
    </button></li>`
    add_new_task.value = "";
    container_todolist.innerHTML += estructura;
    contador += 1;


}
const buscador = () =>{
    const nodos = [...container_todolist.children];
    nodos.forEach(item => {
        if(item.children[3].textContent.search(search_bar.value) == -1){
            item.classList.add("none");
        }else if(search_bar.value == ""){
            item.classList.remove("none");
        }
    })
}
// detectar los valores del text area para buscar 
search_bar.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        e.preventDefault();
        search_bar.value = "";
        buscador();
    }else{
        buscador();
    }
})
// detectar los valores del text area de agregar tarea
add_new_task.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        e.preventDefault();
        button_add.click();

    }
})
// agregar evento al button de add
button_add.addEventListener("click", (e) => {
    agregar_task();
})
// eliminar task
function deleteTodos(e) {
    if (e.target.classList.contains('button-erase')) {
      e.target.parentElement.remove();
    }
  }
container_todolist.addEventListener('click', deleteTodos);
