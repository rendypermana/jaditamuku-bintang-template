<template>
<div>
    <div class="countdown">
       <div class="container">
           <div class="counter-down">
               <h3 data-aos="zoom-in">Counting down to the big day</h3>
               <div class="counting-three" data-aos="zoom-in">
                   <div class="time">
                       <h3>{{twoDigit(hari)}}</h3>
                       <span>Days </span>
                   </div>
                   <div class="time">
                       <h3>{{twoDigit(jam)}}</h3>
                       <span>Hours </span>
                   </div>
                   <div class="time">
                       <h3>{{twoDigit(menit)}}</h3>
                       <span>Minutes </span>
                   </div>
                   <div class="time">
                       <h3>{{twoDigit(detik)}}</h3>
                       <span>Seconds </span>
                   </div>
               </div>
           </div>
       </div>
    </div>
    <!-- <div class="separator-4"></div> -->
</div>
</template>
<script>
export default {
    data(){
        return{

            hari: "",
            jam: "",
            menit: "",
            detik: "",
            d:""
        }
    },
    mounted(){
        this.timerCount()
    },
    methods:{
        twoDigit(value){
            if (value < 0) {
                return '00';
            }
            if (value.toString().length <= 1) {
                return `0${value}`;
            }
            return value;
        },
        timerCount(){
            const finaleDate = new Date("September 25, 2021 10:00:00").getTime();
            const timer = () =>{
                const now = new Date().getTime();
                let diff = finaleDate - now;

                let days = Math.floor(diff / (1000*60*60*24));
                let hours = Math.floor(diff % (1000*60*60*24) / (1000*60*60));
                let minutes = Math.floor(diff % (1000*60*60)/ (1000*60));
                let seconds = Math.floor(diff % (1000*60) / 1000);

                this.hari = days;
                this.jam = hours;
                this.menit = minutes;
                this.detik = seconds;
            }

            timer();
            setInterval(timer,1000);
        }
    }
}
</script>