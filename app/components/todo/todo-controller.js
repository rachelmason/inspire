(function(){
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	var ts = new TodoService()

	new Vue({
		el:"#todo",
		data:{
			todos:[],
			todo:''
			
		},
		mounted:function(){
			this.todos = ts.getTodos()
		},
		methods:{
			submitTodo(todo){
				this.todos.push({
					task:todo,
					cross: false
				})
				this.todo=''
			},
			removeTodo(index){
				var tv = this
				var todo = this.todos[index]
				todo.cross = !todo.cross
				var timeout = setTimeout(function(){
				tv.todos.splice(index,1)
				ts.saveTodos(tv.todos)
				}, 1000)
			},
		},
		computed:{
			count: function(){
				var total = 0
				for (var i = 0; i < this.todos.length; i++) {
					if(this.todos.length >0){
					total += 1
			
					}
					
				}
				return total
			},

		}


	})
	
	
	
}())
