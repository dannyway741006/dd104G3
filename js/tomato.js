var app = new Vue({
    el:'#app',
    data:{
        //todolist 頁面切換
        toTrello:false,
        toStat:false,
        newTodo:'',
        //todolist 頁面切換結束
        timer:10,
        //要跑的時間
        myTimer:null,
        //計時器
        countDownTimer:'',
        currentTomato:{},
        //現在再跑的任務,
        working:true,
        todos:[
            {
                id:'mask1',
                title:'任務1',
                runstatus:0,
                currentTime:10,
                complete:false,
            },
            {
                id:'mask2',
                title:'任務2',
                runstatus:0,
                currentTime:10,
                complete:false,
            },
        ],
    },
    watch:{
        timer(){
            //如果timer發生變化
            if(this.currentTomato){
                //如果有正在執行的任務
                 this.currentTomato.currentTime = this.timer;	
            } 
        },
        working(){
            clearTimeout(this.mytimer); 
            this.currentTomato.runstatus = 0;
            this.timer = this.working? 10:15;
        }
    },
    computed: {
        viewTime:function(){
            //顯示的計時時間
            // if (this.tomatoCount<1) {
            // 	return "番茄钟计时器";
            // } 
            let [mini,second] = [parseInt(this.timer/60).toString().padStart(2,'0'),(this.timer%60).toString().padStart(2,'0')];
            return `${mini}:${second}`
        },
    },
    methods: {
        addTodo(){
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
                currentTime:10,
                complete:false,
            }
            this.todos.push(task)
            this.newTodo="";
        },
        removeTodo(key){
            this.todos.splice(key,1)    
        },
        // restMode(){
        //     clearTimeout(this.mytimer);
        //     this.currentTomato.runstatus = 0;
        // },
        pauseTomato(item){
            
            item.runstatus = 0;
            clearTimeout(this.mytimer);
            console.log('暫停')
        },
        startTomato(item){ 
             if(this.currentTomato && this.currentTomato.runstatus == 1){   
                this.currentTomato.runstatus = 0; //this.currentTomato.currentTime = 10;      
                console.log('1')
                clearTimeout(this.mytimer);
            }
            else if(this.currentTomato&&item.id != this.currentTomato.id){
                //點擊不同li
                console.log('3')
                this.working = true;
                this.currentTomato.currentTime = 10;
                this.currentTomato = item;
                item.runstatus =1;
                this.countDown(this.currentTomato.currentTime)
            }
            else{
                //一開始沒有任務      
                console.log('2')
                item.currentTime = this.timer;
                this.currentTomato = item;
                item.runstatus =1;
                console.log(this.currentTomato.currentTime)
                this.countDown(this.currentTomato.currentTime)
                
            }
        },
         countDown(count){
            console.log(count)
            console.log(this.timer)
           this.timer = 0;
           this.timer = count;
           clearTimeout(this.mytimer);
           this.runCountDown()
        },
        runCountDown(){
            
            this.timer-=1;
            if(this.timer>0){
                var vm = this;
                vm.mytimer = setTimeout(function(){ vm.runCountDown() }, 1000);
            }else{
                this.currentTomato.runstatus = 0;
                this.timer = 10;
                this.working = !this.working;
            }
            }
            
    },
});

//chart
var ctx = document.getElementById("statChart");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["任務1", "任務2", "任務3", "任務4", ],
      datasets: [{
        label: '完成所花時間:分鐘',
        data: [60, 45, 120, 110,],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
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