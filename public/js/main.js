
$(document).ready(function(){

	$('#searchButton').on('click', function(){
		search()
	})

	function search(){
		let query = $('#searchTerm').val()
		let limit 
		if(limit != undefined){
			limit = limit
		}
		else{
			limit = 10
		}
		$.get(`/search?q=${query}&limit=${limit}`, (data, err) => {
			data = JSON.parse(data)
			// data.results.forEach(function(part){
			// 	console.log(part.item.datasheets[0])
			// })
			console.log(data)
			console.log('err ',err)
		})
	}
});