$(document).ready(function() {

    $('#searchButton').on('click', function() {
        search()
    })

    function search() {
        const query = $('#searchTerm').val()
        const limit = $('#searchLimit').val()

        if (query != '') {
            console.log('query', query)

            $.get(`/search?q=${query}&limit=${limit}`, (data, err) => {
                data = JSON.parse(data)
                // data.results.forEach(function(part){
                // 	console.log(part.item.datasheets[0])
                // })
                console.log(data)
                console.log('err ', err)
            })
        } else {

            console.log('no input')
        }
    }
});