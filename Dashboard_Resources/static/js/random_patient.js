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
    });
};

// Initialize
init();