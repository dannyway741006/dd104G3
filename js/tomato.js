var app = new Vue({
    el:'#tomatoContent',
    data:{
        newTodo:'',
        todos:[
            {
                id:'mask1',
                title:'任務1',
                complete:false,
                isPlay: false,
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
            this.todos.push({
                id:timestamp,
                title:value,
                complete:false,
                isPlay: false,
            })
            this.newTodo="";
        },
        removeTodo(key){
            this.todos.splice(key,1)    
        },
        changePlay(key){  
        if(this.todos[key].isPlay){
            this.todos[key].isPlay = !this.todos[key].isPlay;
        }else{
            this.todos.forEach(item => {
                item.isPlay = false;
            });
            this.todos[key].isPlay = true
            
        }
        // this.todos.forEach(item => {
        //     item.isPlay = false;
        // });
        // this.todos[key].isPlay = !this.todos[key].isPlay;

        },
        
    },
});
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

// let playPause = document.querySelectorAll('.playPause');

// for(var i = 0;i<playPause.length;i++){
//     playPause[i].addEventListener('click',function(){
//         if(this.className == 'playPause active'){
//             this.classList.remove('active')
//         }else{
//             for(var j =0;j<playPause.length;j++){
//                 playPause[j].classList.remove('active')
//             }
//             this.classList.add('active')
//         }
//     })
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