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
    let data = {};
    data["sex"]=d3.select("#sex").property("value");
    data["height"]=d3.select("#height").property("value");
    data["weight"]=d3.select("#weight").property("value");
    data["age"]=d3.select("#age").property("value");
    data["o2_saturation"]=d3.select("#o2_saturation").property("value");
    data["heart_rate"]=d3.select("#heart_rate").property("value");
    data["obesity"]=d3.select("#obesity").property("checked");
    data["diabetes"]=d3.select("#diabetes").property("checked");
    data["hypertension"]=d3.select("#hypertension").property("checked");
    data["smoking"]=d3.select("#smoking").property("checked");
    data["alcoholism"]=d3.select("#alcoholism").property("checked");
    data["asthma"]=d3.select("#asthma").property("checked");
    data["cancer"]=d3.select("#cancer").property("checked");
    data["immunosuppression"]=d3.select("#immunosuppression").property("checked");
    $.ajax({
        url:"/test",
        type:"POST",
        contentType: "application/json",
        data: JSON.stringify(data)});
};