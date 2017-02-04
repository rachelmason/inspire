new Vue({

    el: '#time',
    data: {
        time: new Date(),
        greeting: '',
        hello: "good " + this.greeting +", rachel"
    },
    mounted: function () {
        var tm = this
        var interval = setInterval(function () {
            tm.time = new Date()
        }, 1000)
        tm.greetingTime()
    },
    computed: {
        currentTime: function () {
            var t = this.time
            var minutes = t.getMinutes().toString()
            var hours = t.getHours().toString()
            minutes = (minutes.length < 2) ? minutes : "0" + minutes
            hours = (hours == '0') ? hours : "12"
            return `${t.getHours()}:${t.getMinutes()}`
        }


    },
    methods:{
        greetingTime: function(){
            if(hours == '5' || hours == '6' || hours == '7' || hours == '8' || hours == '9' || hours == '10' || hours == '11'){
            this.greeting = 'morning'
            }else if(hours == '12' || hours == '13' || hours == '14' || hours == '15' || hours == '16'){
              this.greeting = 'afternoon'
            }else{
           this.greeting = 'evening'
            }
        }

    }

})