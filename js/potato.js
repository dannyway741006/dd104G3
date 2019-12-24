// let customTask=document.querySelector('.customTask');
// customTask.addEventListener('click',(e)=>{
//     e.target.classList.add('active')

// })
let taskLi = document.querySelectorAll(".taskLi");
for (var i = 0; i < taskLi.length; i++) {
    taskLi[i].addEventListener("click", function () {
        for(var i = 0;i< taskLi.length; i++){
            taskLi[i].classList.remove("active");
        }   
        this.classList.add("active");
    });
}

let todoList = document.querySelector('.todoList')
function todo_page1() {
    todoList.classList.remove("active");
  }
  function todo_page2() {
    todoList.classList.add("active");
  }
