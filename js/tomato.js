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


//todolist切換
var todoStat = document.querySelector('.todo-stat')
var ToTrello = document.querySelector('.moveToTrello');
var backToCus = document.querySelector('.backToCus');
var ToStat = document.querySelector('.moveToStat');
var backTrello = document.querySelector('.backToTrello');
var todoStat = document.querySelector('.todo-stat');

ToTrello.addEventListener('click',function(){
    todoList.classList.add('toTrello')
})
backToCus.addEventListener('click',function(){
    todoList.classList.remove('toTrello')
})
ToStat.addEventListener('click',function(){
    todoStat.classList.add('active')
})
backTrello.addEventListener('click',function(){
    todoStat.classList.remove('active')
})
//todolist切換---結束