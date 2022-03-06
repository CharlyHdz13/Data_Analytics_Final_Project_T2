// Get the select element to see which cluster is selected
let selectCluster = document.getElementById("selectCluster");
let button = document.getElementById("randomPatient");
let patientsData =[];

function init(){
    // Hide Random Patient button
    button.style.display = "none";
    d3.json("patients.json").then(function(patients){
        patientsData = patients;
        //console.log(patientsData);
        clustersGraph();
        lineChart(-1);
        barChart(-1);
        mapCreation();
    });
};

// Initialize
init();
// Function that will show the Random Patient button and fill the graphs according to the selected cluster
function updateGraphs() {
    // Show Random Patient button
    button.style.display = "block";
    // Get the selected value from the select element
    let value = selectCluster.options[selectCluster.selectedIndex].value;
    console.log("I will be updating the graphs");
    console.log(value);
    lineChart(value);
    barChart(value);
    console.log(patientsData);
    let clusterSize = 0;
    for(id in patientsData.Class){
        if(patientsData.Class[id] === parseInt(value)){
            clusterSize++;
        };
    };
    // Returns a random integer from 0 to 5378:
    let randomID = Math.floor(Math.random() *clusterSize)+1;
    console.log(randomID);
    // Save random patient's data in local storage to use in random-patient
    localStorage.setItem("randomID",randomID);
};

// Function that builds 3D Cluster plot
function clustersGraph(){
    // Build generic empty traces for each class
    let trace0 = {
        x:[],
        y:[],
        z:[],
        mode:"markers",
        marker:{
            color:"#EAFD02"
        },
        type:"scatter3d"
    };
    let trace1 = {
        x:[],
        y:[],
        z:[],
        mode:"markers",
        marker:{
            color:"#FD7402"
        },
        type:"scatter3d"
    };
    let trace2 = {
        x:[],
        y:[],
        z:[],
        mode:"markers",
        marker:{
            color:"#15FD02"
        },
        type:"scatter3d"
    };
    let trace3 = {
        x:[],
        y:[],
        z:[],
        mode:"markers",
        marker:{
            color:"#02CCFD"
        },
        type:"scatter3d"
    };
    // Add values to the x, y and z according to class
    for (let id in patientsData["Class"]){
        if (patientsData["Class"][id]===0){
            trace0.x.push(patientsData["PC 1"][id]);
            trace0.y.push(patientsData["PC 2"][id]);
            trace0.z.push(patientsData["PC 3"][id]);
        }else if (patientsData["Class"][id]===1){
            trace1.x.push(patientsData["PC 1"][id]);
            trace1.y.push(patientsData["PC 2"][id]);
            trace1.z.push(patientsData["PC 3"][id]);
        }else if (patientsData["Class"][id]===2){
            trace2.x.push(patientsData["PC 1"][id]);
            trace2.y.push(patientsData["PC 2"][id]);
            trace2.z.push(patientsData["PC 3"][id]);
        }else{
            trace3.x.push(patientsData["PC 1"][id]);
            trace3.y.push(patientsData["PC 2"][id]);
            trace3.z.push(patientsData["PC 3"][id]);
        }
    };
    // Create data array that Plotly will use for the graph
    let data =[trace0,trace1,trace2,trace3];
    console.log(data);
    // Tell Plotly to create graph at the div 3DPlot
    Plotly.newPlot("3DPlot",data);

};

// Function that builds scatter line plot
function lineChart(cluster){
    console.log(cluster);
    // Array with the number of the months
    let months = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    // Get the leaving dates of the patients
    let leavingDates = patientsData.leaving_date;
    // Empty arrays to fill leaving dates in UTC format
    let deathsDates =[];
    let deathsDatesCluster=[];
    // Fill deathDates array with dates in UTC format only for patients where the outcome was death
    for (id in leavingDates){
        // Convert from epoch to UTC
        let UTCDate = new Date(leavingDates[id]);
        if (patientsData.outcome[id] === "Death"){
            // Fill array if condition is met
            deathsDates.push(UTCDate);
            // Fill cluster array if there is a selected cluster
            if (cluster>=0 && patientsData.Class[id]=== parseInt(cluster)){
                deathsDatesCluster.push(UTCDate);
            };
        };
    };
    // Sort the arrays in ascending order
    deathsDates.sort(function compareFn(a,b){
        return a-b;
    });
    deathsDatesCluster.sort(function compareFn(a,b){
        return a-b;
    });
    // Empty arrays that will store dates in a MM/YY format
    deathDatesMMYY=[];
    deathDatesMMYYCluster=[];
    // Fill deathDatesMMYY array
    deathsDates.forEach(date => {
        // Concatenetion of getMonth() / getFullYear
        let newDate = months[date.getMonth()]+"/"+date.getFullYear();
        // Fill array with date in new format
        deathDatesMMYY.push(newDate);
    });
    // Fill deathDatesMMYYCluster array
    deathsDatesCluster.forEach(date => {
        // Concatenetion of getMonth() / getFullYear
        let newDate = months[date.getMonth()]+"/"+date.getFullYear();
        // Fill array with date in new format
        deathDatesMMYYCluster.push(newDate);
    });
    // Get the counts of deaths for each date in deathDatesMMYY
    let countUnique = deathDatesMMYY => {
        let counts ={};
        for (var i=0; i<deathDatesMMYY.length; i++){
            counts[deathDatesMMYY[i]] = 1 + (counts[deathDatesMMYY[i]]||0);
        };
        return counts;
    };
    // Prebuilt trace for total deaths
    let trace ={
        x:deathDatesMMYY,
        y:[],
        mode:"lines+markers",
        name:"Total Deaths",
        marker:{
            size:10
        },
        line:{
            color:"#000000"
        }
    };
    // Prebuilt trace for cluster deaths
    let traceCluster ={
        x:[],
        y:[],
        mode:"lines+markers",
        name:" ",
        marker:{
            size:10
        },
        line:{
            color:"#00AEFF"
        }
    };
    // Fill trace.y with the corresponding count of deaths for each date
    deathDatesMMYY.forEach(date=>{
        trace.y.push(countUnique(deathDatesMMYY)[date]);
    });
    console.log(trace);
    // Place trace into array and graph in div LineChart
    let data =[trace];
    // Fill traceCluster with data if a cluster is selected
    if (cluster>=0){
        // Fill traceCluster.x with the corresponding dates
        traceCluster.x = deathDatesMMYYCluster;
        // Fill traceCluster.y with the corresponding count of deaths for each date
        deathDatesMMYYCluster.forEach(date=>{
            traceCluster.y.push(countUnique(deathDatesMMYYCluster)[date]);
        });
        // Fill traceCluster.name with the Cluster {cluster number} Deaths format
        traceCluster.name = "Cluster "+cluster+" Deaths";
        // Push traceCluster to data to graph
        data.push(traceCluster);
    };
    Plotly.newPlot("LineChart",data);
};
// Function that builds bar chart
function barChart(cluster){
    // Array of comorbidities
    comorbidities =[
        "obesity",
     "diabetes_mellitus",
     "arterial_hypertension",
     "autoimmune_disease",
     "immunosuppression",
     "cancer",
     "smoking",
     "alcoholism",
     "asthma"
    ];
    let comorbiditiesObject ={};
    comorbidities.forEach(comorbidity=>{
        let count =0;
        for (id in patientsData[comorbidity]){
            if(cluster>=0){
                if (patientsData[comorbidity][id]=== true && patientsData.Class[id]=== parseInt(cluster)){
                    count++;
                }
            }else{
                if (patientsData[comorbidity][id]=== true){
                    count++;
                };
            };
        }
        comorbiditiesObject[comorbidity]=count;
    });
    // Empty object to comorbidities sorted by magnitud
    sortedComorbiditiesObject ={}; 
    // Sort comorbidities and store
    Object.keys(comorbiditiesObject).sort((a,b)=>{
        return comorbiditiesObject[a]-comorbiditiesObject[b]
    }).map(item=>sortedComorbiditiesObject[item]=comorbiditiesObject[item]);
    // Build generic empty trace
    let trace = {
        x:Object.values(sortedComorbiditiesObject),
        y:Object.keys(sortedComorbiditiesObject),
        type:"bar",
        name:"",
        marker:{
            color:"#1300FF"
        },
        orientation:"h"
    };
    console.log(trace);
    let data =[trace];
    Plotly.newPlot("BarChart",data)
};
function mapCreation(){
    // Create the map object with a center and zoom level.
    let map = L.map('map').setView([19.4, -99.12], 11);
    // We create the tile layer that will be the background of our map.
    let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: API_KEY
    });
    // Then we add our 'graymap' tile layer to the map.
    streets.addTo(map);
    // Object that has the latitudes and longitudes for each healthcare center
    healthcareCenters={
        GEA:[19.29066,-99.16032],
        HGM:[19.41318,-99.15124],
        HIM:[19.41098,-99.15195],
        HJM:[19.48362,-99.13617],
        HRAEB:[21.06174,-101.5764],
        HRAECS:[14.82602,-92.34196],
        HRAECV:[23.76229,-99.10687],
        HRAEI:[19.31893,-98.85468],
        HRAEO:[16.94781,-96.71235],
        HRAEPY:[21.02033,-89.5819],
        INCICH:[19.2919,-99.15359],
        INER:[19.29412,-99.15617],
        Nutricion:[19.28825,-99.15614]
    }
    // Loop through each hospital to get the number of deaths and fill map with circles
    for (hospital in healthcareCenters){
        let r = 0;
        for (id in patientsData["sex"]){
            if(patientsData["healthcare_center"][id]=== hospital && patientsData["outcome"][id]=== "Death"){
                r++;
                };
            };
            console.log(r);
            L.circle(healthcareCenters[hospital], {
                radius: r*5
                }).bindPopup("<h2>Institute: "+hospital+"</h2>"+"<br><h2>Deaths: "+r+"</h2>"
                ).addTo(map);
        };
};
