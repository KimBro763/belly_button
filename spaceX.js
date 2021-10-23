// INSPECT API CALL WITH D3.JSON

// Note: theD3.js library is downloaded from its CDN link, and loaded into the index.HTML file. 

//url to SpaceX is defined
const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json() method places a call to SpaceX's API, retrieves data and prints it
d3.json(url).then(receivedData => console.log(receivedData));

// RETRIEVE THE DETAILS ONLY FROM THE VANDENBERG AIR FORCE BASE'S LOCATION
// retrieve full name of Vandenberg Air Force Base
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// retrieve the latitude of the Vandenberg Airforce Base
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

//retrieve the latitude and longitude for each launch station

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude.longitude));


//READ IN JSON //
// use d3.json() to read samples.json into my script
d3.json("samples.json").then(function(data){
    console.log(data);
});


// CREATE AN ARRAY //
//extract only the wfreq of each person into a new array
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

//sort the wfreq array in descending order
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a, b) => b-a);
    console.log(wfreq);
});

//delete null values from wfreq array
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.filter(person => person.wfreq !== null);
     console.log(wfreq);
});

// display the metadata of any individual from the dataset
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});


var selection = d3.select("#selectData");

// Populate options
d3.json("samples.json").then(function(data) {
    var options = data.names;

    options.forEach((element) => {
        selection.append('option').text(element).property('value', element)
    });

    console.log(options)

    let selectedOption = data.metadata.filter(sample => sample.id === parseInt(options[6]));
        console.log(selectedOption)
        
    
});