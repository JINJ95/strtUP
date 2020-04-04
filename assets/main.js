



// George

let averageAirQuality ;

function displayAQ(){
    let airQualityUrl = "https://api.openaq.org/v1/measurements?country=US&city=Salt%20Lake%20City&date_from=2020-04-04&order_by=date&parameter=pm25"
    $.ajax({
        url: airQualityUrl,
        method: "GET"
    }) .then(function(response){
        let averageArray = [];
        console.log(response);
        for(result in response.results){
            averageArray[result] = response.results[result].value;
        }
        averageAirQuality = averageArray.reduce((a, b) => a + b, 0);
        averageAirQuality = averageAirQuality/averageArray.length;
        printAqReadout();

    }) .catch(function(error){
        console.log(error);
    })
}

function printAqReadout(){
    $("#airQualityOutput").text(""+averageAirQuality.toFixed(2)+" PPM");
    switch(averageAirQuality){
    
    }
}

displayAQ();

// end George


// Jordan

function displayQuote () {

var quoteURL = "https://favqs.com/api/qotd";

$.ajax({
    url: quoteURL,
    method: "GET"
}).then(function (response) {
    //console.log(response);
    $("#quote").text(response.quote.body);
    $("#quoteAuthor").text("-" + response.quote.author);
});


}
// generates a quote
displayQuote();
$("#newQuoteBtn").on("click", function () {
    displayQuote();
});


// Ben's Java
// Spotify

// Youtube

// The end of Ben.. 's Java




//Brent's JS



//End Brent's JS








