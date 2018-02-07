

$(document).ready(function(){
	let query = 'relays'
	$.get(`/search?q=${query}`, function(data){
		data = JSON.parse(data)
		console.log(data)
	})
});