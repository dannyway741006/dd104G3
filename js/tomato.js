var app = new Vue({
    el:'#tomatoContent',
    data:{
        newTodo:'',
        countdownTime:'5:00',
        start_time: '',
        end_time:'',
        now_time:'',
        isRest:false,
        countDownTimer:'',
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
            this.todos[key].isPlay = true;
            this.countDown();
        }
        },
         countDown(){
            var setMin = this.isRest ? 3 : 2;
            if(this.start_time == '' && this.end_time==''){
                this.start_time = new Date();
                this.end_time = new Date();
                this.end_time.setMinutes(this.start_time.getMinutes() + setMin);
                console.log(this.end_time)
                this.countDownTimer = setTimeout(() => {
                    this.runCountDown();
                }, 10);
            }
        },
        runCountDown(){
            this.now_time = new Date();
            var timeGap = this.end_time-this.now_time;
            console.log(timeGap);
            var sec = timeGap % (60 * 1000);
            // console.log(sec);
            if(sec.toString().length > 3){
                sec = sec.toString().length > 4?sec.toString().substr(0,2):sec.toString().substr(0,1);
                sec = '0'+ sec;
                console.log(sec);
            }else{
                sec = '00';
            }
            var min ='0'+  Math.floor(timeGap / (60 * 1000));
            console.log(min);
            this.countdownTime = min +':'+sec.substr(-2);
            //迴圈
            if (this.countdownTime !== '00:00') {
                this.t = setTimeout(() => {
                    this.runCountDown();
                }, 10);
            } else if (this.countdownTime === '00:00') {
                if (!this.isRest) {
                    var vm = this;
                    this.isRest = true;
                    vm.runCountDown();
                } else {
                    this.isRest = false;

                }
            }
        }
    },
});


let taskLi = document.querySelectorAll(".taskLi");
for (var i = 0; i < taskLi.length; i++) {
    taskLi[i].addEventListener("click", function () {
        for(var i = 0;i< taskLi.length; i++){
            taskLi[i].classList.remove("active");
        }   
        this.classList.add("active");
    });
}

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