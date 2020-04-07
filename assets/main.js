



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
    $("#airQualityOutput").text(""+averageAirQuality.toFixed(2)+" AQI");
    switch(averageAirQuality){
        case averageAirQuality <= 50:
            console.log("HELL YAEH");
            break;
        case averageAirQuality >= 50:
            console.log("oh no");
            break;
        default :
            console.log("TEST");
            break;
    }
}

displayAQ();

// end George


// Jordan

function setBackground () {
    var client_id = "RCxWMwEhzgzUqQu7IsYsENaOYusewqJSRQ2WcPni-Es";
    var query = $("#backgroundInput").val().trim();
    var unsplash = "https://api.unsplash.com/photos/random?&query="+ query + "&client_id=" + client_id;
    //console.log(unsplash);

    $.ajax({
        url: unsplash,
        method: "GET"
    }).then(function (response) {
        var imageUrl = response.urls["full"];
        console.log(imageUrl);
        $("body")
            .css("background-image", "url(" + imageUrl + ")")
            .css("background-position", "center")
            .css("background-size", "cover");
    });
}
//set Background
setBackground();
$("#backgroundBtn").on("click", function() {
    setBackground();
})

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
// Bands In Town

var BandsInTownID = ""
var artistID = ""
var BandsInTownUrl= ""










// Holiday Api
var currentDay = moment().format("DD");
var currentMonth = moment().format("MM");
var holidayURL = "https://holidayapi.com/v1/holidays?key=7244d9b6-e733-424f-8364-0d1df8d53c2c&country=US&year=2019&month=" + currentMonth + "&day=" + currentDay + "&upcoming=true";
$.ajax({
    url: holidayURL,
    method: "GET"
}).then(function (response) {
    var nextHoliday = response.holidays[0];
    $(".holidayResultsClass").text(nextHoliday.name);
    //Please note, I am using the free Holiday API. This only grants access to 2019 holiday's, not 2020. 
    //I used moment.js to change the date to this year's date, even though it will not be accurate for holidays with changing dates
    var thisYearDate = moment(nextHoliday.date).add(1, 'year').format("MMMM Do YYYY")
    $(".holidayDate").text(thisYearDate)
})


// The end of Ben.. 's Java




//Brent's JS



//End Brent's JS








