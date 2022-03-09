let patientsData =[];
// Empty object to store random patient's data
let randomPatientData={};
let randomID = parseInt(localStorage.getItem("randomID"));
function init(){
    d3.json("patients.json").then(function(patients){
        console.log(randomID);
        patientsData = patients;
        console.log(patientsData);
        for(key in patientsData){
            randomPatientData[key]=patientsData[key][randomID];
        };
        console.log("Random Patient's Data");
        console.log(randomPatientData);
        d3.select("#sex").property("value", randomPatientData.sex);
        d3.select("#height").property("value",randomPatientData.height_cm);
        d3.select("#weight").property("value",randomPatientData.weight_kg);
        d3.select("#age").property("value",Math.trunc(randomPatientData.age));
        d3.select("#o2_saturation").property("value",randomPatientData.oximeter_saturation);
        d3.select("#heart_rate").property("value",randomPatientData.heart_rate);
    });
};

// Initialize
init();

function getData(){
    console.log("Working");
    let prueba ={key:"value"};
    $.ajax({
        url:"/test",
        type:"POST",
        contentType: "application/json",
        data: JSON.stringify(prueba)});
};