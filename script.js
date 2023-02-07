console.log("hello world");
const todoInput = document.getElementById("todo-input")
const todosContiner=document.getElementById("todo-container")
function addTodo(){
    if(!todoInput.value){
        alert("can't be empty")
        return;
    }



    const todoItem=document.createElement("div")
    todoItem.classList.add("todo-card")
    const todoContent =document.createElement("p")

    const removeTodoBtn =document.createElement("button")
 removeTodoBtn.innerHTML="Delete"
    removeTodoBtn.addEventListener("click",function(){
        todoItem.remove()
        return; 
    })
      const  editTodoBtn=document.createElement("button")
      editTodoBtn.innerHTML="Edit"
      editTodoBtn.addEventListener("click",function(){
        const editInput=document.createElement("input")
        editInput.value=todoContent.innerText

        editInput.addEventListener("keypress",function(e){
            if(e.key =="Enter"){
                todoContent.innerText=editInput.value
                editInput.remove()
            }
            
        })
       todoItem.appendChild(editInput)


      })

    todoContent.classList.add("completed")
    
    todoContent.addEventListener("click",function(){
        if(
        todoContent.classList.contains("completed")){
        todoContent.classList.remove("completed")
        }else{
        todoContent.classList.add("completed")
        }
    })
    todoContent.innerHTML=todoInput.value
    todoItem.appendChild(todoContent)
    todoItem.appendChild(removeTodoBtn)
    todoItem.appendChild(editTodoBtn)
    todosContiner.appendChild(todoItem)
    
    let todos=localStorage.getItem("todos")
    if(todos){
        todos=todos+","+todoInput.value
        localStorage.setItem("todos",todos)
    } else{
      localStorage.setItem("todos",todoInput.value)
    }
    
    todoInput.value=""

}
function init(){
    const todos= localStorage.getItem("todos")
    if(todos){
        const todosArr = todos.split(",")
        todosArr.forEach(todo =>{
            createTodoCard(todo)
        })
    }
}
init()
