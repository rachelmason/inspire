(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	
	
		//What can you do with this weather object?

	var vm = new Vue({
			el: '#weather',
			data:{
				weather: {},
				displayTemp: 'loading...'
				
			},
			computed:{
				far: function(){
					if(this.weather.main){
					return Math.floor((this.weather.main.temp - 273)*9/5+32)+"ºF" 
					}
				},
				cel: function(){
					if(this.weather.main){
					return Math.floor(this.weather.main.temp - 273)+"ºC"
					}
				},
				// displayTemp: function(){
				// 	if(this.weather.main){
				// 		return this.far
				// 	}
				// 	return "loading..."
				// }
			},
			mounted: function(){
				var wv = this
				weatherService.getWeather(function(weather){
					wv.setWeather(weather)
					wv.displayTemp = wv.far
				})
			},
			methods:{
				setWeather:function(weather){
					this.weather = JSON.parse(weather);
					this.main = this.weather.main
				},
				toggleTemp:function(){
					if(this.displayTemp == this.far){
					 this.displayTemp = this.cel
					 return
					}
					this.displayTemp = this.far
				}
			}
		})

	
	
	
	
	
	
}())
