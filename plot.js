// sort the cities by population growth
var sortedPopulation = cityGrowths.sort(function(population, Increase_from_2016) {return population - Increase_from_2016});

// select only the top five cities by population growth.
var topFive = sortedPopulation.slice(0, 5);

// create two arrays: an array of city names, and an array of corresponding population growths.
var topFiveCityNames = topFive.map(city => city.City); //both elements "city" is a placeholder

var topFiveCityGrowths = topFive.map(city => parseInt(city.Increase_from_2016));


//Create a bar chart with the arrays
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};

var data = [trace];

var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Pop Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);

// 7 largest cities by population
var sortedPopulation = cityGrowths.sort(function(population, Increase_from_2016) {return population - Increase_from_2016});
//create array of city names
var cityNames = sortedPopulation.map(function(city) {
    return city.City
});
//extract top 7 city names
var topSevenCities = cityNames.slice(0,7);

//create array of population growth
var popGrowth = sortedPopulation.map(city => parseInt(city.Increase_from_2016));
//extract top 7 pop growths
var topSevenGrowth = popGrowth.slice(0,7);

//Create bar chart with arrays
var trace = {
    x: topSevenCities,
    y: topSevenGrowth,
    type: "bar"
};

var data = [trace];

var layout = {
    title: "Seven Fastest Growing Cities",
    xaxis: {title: topSevenCities},
    yaxis: {title: topSevenGrowth}
};

Plotly.newPlot("bar-plot_2", data, layout);





















//TUTORING!
// let test

// d3.json("samples.json").then(function(data) {

// let wfreq = data.metadata.filter(person => person.wfreq !== null);
//     console.log(wfreq)

//     test = data.metadata.filter(person => person.id == 950);
//     console.log(test)
    

// });

// var selection = d3.select("#selectData");

// // Populate options
// d3.json("samples.json").then(function(data) {
//     var options = data.names;

//     options.forEach((element) => {
//         selection.append('option').text(element).property('value', element)
//     });

//     console.log(options)

//     let selectedOption = data.metadata.filter(sample => sample.id === parseInt(options[6]));
//         console.log(selectedOption)
        
    
// });




