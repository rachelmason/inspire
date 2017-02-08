new Vue({

    el: '#time',
    data: {
        time: new Date()
    },
    mounted: function () {
        var tm = this
        var interval = setInterval(function () {
            tm.time = new Date()
        }, 1000)
    },
    computed: {
        currentTime: function () {
            var t = this.time
            var minutes = t.getMinutes().toString()
            var hours = t.getHours()%12
            minutes = (minutes.length > 1) ? minutes : "0" + minutes
            hours = (hours == 0) ? 12 : hours
            return `${hours}:${minutes}`
        },

        greeting: function(){
            var te = this
            var hours = this.time.getHours()
            if(hours < 12){
            return 'good morning, rachel'
            }else if(hours < 17 ){
              return 'good afternoon, rachel'
            }else{
            return 'good evening, rachel'
            }
        }


    }

})