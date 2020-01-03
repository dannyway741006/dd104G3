var app = new Vue({
    el:'#tomatoContent',
    data:{
        newTodo:'',
        countdownTime:'1:00',
        start_time: '',
        end_time:'',
        now_time:'',
        stoping:false,
        countTomato:null,
        t:'',
        todos:[
            {
                id:'mask1',
                title:'任務1',
                complete:false,
                runstatus:0,
            },
        ],
    },
    methods: {
        addTodo(){
            var value = this.newTodo.trim();
            var timestamp = Math.floor(Date.now());
            // console.log(value,timestamp)
            if(!value){
                return;
            }
            var task = {     
                    id:timestamp,
                    title:value,
                    complete:false,
                    runstatus:0,
            }
            this.todos.push(task)
            this.newTodo="";
        },
        removeTodo(key){
            this.todos.splice(key,1)    
        },
        pauseTomato(item){
            
        },
        startTomato(item){
          
        },
        runCountDown(key){

        },
    },
});


// let taskLi = document.querySelectorAll(".taskLi");
// for (var i = 0; i < taskLi.length; i++) {
//     taskLi[i].addEventListener("click", function () {
//         for(var i = 0;i< taskLi.length; i++){
//             taskLi[i].classList.remove("active");
//         }   
//         this.classList.add("active");
//     });
// }

//todolist切換
var todoList = document.querySelector('.todoList')
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