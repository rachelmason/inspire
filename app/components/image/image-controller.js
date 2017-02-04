(function(){
	var imgS = new ImageService()


	new Vue({
		el:'#image',
		data:{
			image: '',
		},
		computed:{
			bgStyle: function(){
				if(!this.image.url){
					return {
						'background-image':'url(https://splashbase.s3.amazonaws.com/snapwiresnaps/regular/tumblr_oiglihEuGs1teue7jo1_1280.jpg)'
					}
				}
				return {
						'background-image':`url(${this.image.url})`
					}
			}
			
		},
		mounted: function(){
			imgS.getImage(this.setImage)
		},
		methods:{
			setImage: function(image){
				this.image = image;
			}
		}
	})
	
}/*(i commented this out)*/)
