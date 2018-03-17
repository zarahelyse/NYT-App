$("#submit_btn").on("click", function(){
    var person = $("#hisFig").value;
    var beginDate = $("#minYr").value;
    var endDate = $("#maxYr").value;

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
'api-key': "0196839c3940438aa8ba8f72b96a9f69",
'q': person,
'begin_date': beginDate,
'end_date': endDate
});
$.ajax({
url: url,
method: 'GET',
}).done(function(result) {
var doc = result.response.docs
for(i=0; i < 5; i++){
 var headlineDiv = $("<div>")
 var p = $("<p>")
 p.text(doc[i].headline.print_headline)
 headlineDiv.append(p)
 $("#results").prepend(headlineDiv)
 console.log(doc);
}
console.log(result);
}).fail(function(err) {
throw err;
});

})