(function(){
	var qc = new QuoteService()

new Vue({
		el:"#quote",
		data:{
			quote:{},
		},
		mounted: function(){
		
			qc.getQuote(this.setQuote)
			this.quote = this.currentQuote
		},
		computed:{
			currentQuote: function(){
				if(this.quote){
					return this.quote.quote
				}
			}
		},
		methods:{
			setQuote: function(quote){
				this.quote = JSON.parse(quote);
			}
		}


	})

	
}())
