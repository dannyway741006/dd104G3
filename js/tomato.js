var app = new Vue({
    el:'#app',
    data:{
        myChart,
        //todolist 頁面切換
        toTrello:false,
        toStat:false,
        newTodo:'',
        //todolist 頁面切換結束
        timer:0,
        dashOffSet:290*Math.PI,
        dasharray:285*Math.PI,
        //要跑的時間
        workmin:0,
        worksec:10,
        workTime:0,
        restmin:0,
        restsec:15,
        restTime:0,
        myTimer:null,
        totalTimer:0,
        //計時器
        // countDownTimer:'',
        currentTomato:{},
        currentRing:null,
        currentTotalTime:0,
        //現在再跑的任務,
        working:true,
        todos:[
            {
                id:'mask1',
                title:'新任務',
                runstatus:0,
                currentTime:this.workTime,
                totalTime:0,
                complete:false,
            },
        ],
        trelloTodos:[
            {
                id:'mask2',
                title:'新任務trello',
                runstatus:0,
                currentTime:this.workTime,
                totalTime:0,
                complete:false,
            },
        ],
        rings:[
            {
             ringName:'鈴聲1',
             checked:false,
             id:'ring1',
            },
            {
                ringName:'鈴聲2',
                checked:false,
                id:'ring2',
            },
            {
                ringName:'鈴聲2',
                checked:false,
                id:'ring3',
            },
        ],
        
    },
    mounted() {
        if (localStorage.getItem('todos')) {
            try {
              this.todos = JSON.parse(localStorage.getItem('todos'));
            //   console.log()
            } catch(e) {
              localStorage.removeItem('todos');
            }
          }
    },
    watch:{
        timer(){
            //如果timer發生變化
            if(this.currentTomato){
                //如果有正在執行的任務
                 this.currentTomato.currentTime = this.timer;	
                 this.currentTomato.totalTime=this.totalTimer;
            } 
        },
        working(){
            //切換工作-休息狀態
            clearTimeout(this.mytimer); 
            this.currentTomato.runstatus = 0;
            this.timer = this.working? this.workTime:this.restTime;
            this.dashOffSet=290*Math.PI;
        },
    },
    computed: {
        viewTime:function(){
            let [mini,second] = [parseInt(this.timer/60).toString().padStart(2,'0'),(this.timer%60).toString().padStart(2,'0')];
            return `${mini}:${second}`
        },
    },
    methods: {

        setTime(){
            //設定時間
            this.workmin = this.workmin?this.workmin:0;
            this.worksec = this.worksec?this.worksec:0;
            this.restmin= this.restmin?this.restmin:0;
            this.restsec = this.restsec?this.restsec:0;
            this.workTime = parseInt(this.workmin)*60 +parseInt(this.worksec)*1;
            this.restTime = parseInt(this.restmin)*60 +parseInt(this.restsec)*1;
            this.currentTomato.currentTime = 0;
            this.currentTomato.runstatus =0;
            clearTimeout(this.mytimer);
            this.timer = this.workTime;
            alert('設定完成')
        },
        addTodo(){
            //加入任務
            var value = this.newTodo.trim();
            var timestamp = Math.floor(Date.now());
            // console.log(value,timestamp)
            if(!value){
                return;
            }
            let task = {
                id:timestamp,
                title:value,
                runstatus:0,
                currentTime:this.workTime,
                totalTime:0,
                complete:false,
            }
            this.todos.push(task)
            // localStorage.todos = this.todos;
            this.newTodo="";
            this.savelocal()
        },
        removeTodo(item,key){
            var index = myChart.data.labels.indexOf(item.title)
            console.log(index)
            if(index!=-1){
                console.log(index)
                myChart.data.labels.splice(index,1);
                myChart.data.datasets[0].data.splice(index,1);
                myChart.update();   
            }   
            this.todos.splice(key,1);
            this.savelocal()
        },
        savelocal() {
            //加到localstorage
            const parsed = JSON.stringify(this.todos);
            localStorage.setItem('todos', parsed);
          },
        pauseTomato(item){   
            //暫停
            item.runstatus = 0;
            clearTimeout(this.mytimer);
            this.savelocal()
        },
        startTomato(item){
            if(item.complete){
                alert('請先解除任務完成狀態')
            }
            else if(!this.currentTomato.currentTime){
                alert('請先設定時間')
            }
            else if(this.currentTomato && this.currentTomato.runstatus == 1){  
                this.currentTomato.runstatus = 0; //任務進行中點擊其他任務      
                console.log('1')
                clearTimeout(this.mytimer);
                this.dashOffSet=290*Math.PI;
            }
            else if(this.currentTomato&&item.id != this.currentTomato.id){
                this.dashOffSet=290*Math.PI;
                //點擊不同li 一開始沒有任務
                if(!this.working){
                    this.working = true;
                    return
                }
                console.log('3')
                this.working = true;
                this.currentTomato = item;
                this.currentTomato.currentTime =  this.working? this.workTime:this.restTime;
                console.log(this.currentTomato.currentTime)
                item.runstatus =1;
                this.countDown(this.currentTomato.currentTime,this.currentTomato.totalTime)
            }
            else{
                //暫停之後重啟      
                console.log('2')
                item.currentTime = this.timer;
                this.currentTomato = item;
                item.runstatus =1;
                console.log(this.currentTomato.currentTime)
                this.countDown(this.currentTomato.currentTime,this.currentTomato.totalTime);
            }
        },
         countDown(count,total){
            console.log(count)
            console.log(total)
            console.log(this.timer)
           this.timer = 0;
           this.timer = count;
           this.totalTimer = total;
           clearTimeout(this.mytimer);
           this.runCountDown()
        },
        runCountDown(){
            this.dashOffSet -= this.working?this.dasharray/this.workTime:this.dasharray/this.restTime;
            // this.currentTomato.currentTotalTime++;
            if(this.working){
                this.totalTimer++;
            }   
            this.timer-=1;
            if(this.timer>-1){
                var vm = this;
                vm.mytimer = setTimeout(function(){ vm.runCountDown() }, 1000);
            }else{
                this.currentTomato.runstatus = 0;
                this.timer = this.workTime;
                this.working = !this.working;
                this.totalTimer-=!this.working?1:0
                this.savelocal()
            }
            }
        ,totalTime(timer){
            //計算累積時間
            let [mini,second] = [parseInt(timer/60).toString().padStart(2,'0'),(timer%60).toString().padStart(2,'0')];
            return `${mini}:${second}`
        },
        editChart(item){
            if(!item.complete){
            myChart.data.labels.push(item.title)
            myChart.data.datasets[0].data.push(item.totalTime)
            myChart.update();
            // item.complete=!item.complete
            // this.savelocal()
            }else{
                // console.log(item.index)
                var index = myChart.data.labels.indexOf(item.title)
                console.log(index)
                myChart.data.labels.splice(index,1);
                myChart.data.datasets[0].data.splice(index,1);
                // myChart.update();
                // item.complete=!item.complete
            this.savelocal()
                // console.log(text)
            }
            
        },    
    },
});
//chart
var ctx = document.getElementById("statChart");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["任務1", "任務2", "任務3", "任務4",],
      datasets: [{
        label: '完成所花時間:秒',
        data: [10, 8, 15, 3,],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(212, 204, 112,0.2)',
          'rgba(0, 195, 255,0.2)',
          'rgba(217, 0, 255,0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(212, 204, 112,1)',
          'rgba(0, 195, 255,1)',
          'rgba(217, 0, 255,1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
        legend: { //是否要顯示圖示
            display: false,
        },
      scales: {
        xAxes: [{
            display: true
        }],
        yAxes: [{
          ticks: {

            beginAtZero:true,
            suggestedmin:0,
            suggestedmax:200,
            
          }
        }]
      }
    }
  });