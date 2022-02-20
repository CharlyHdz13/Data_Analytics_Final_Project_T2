// Hide Random Patient button
let button = document.getElementById("randomPatient");
button.style.display = "none";

// Get the select element to see which cluster is selected
let selectCluster = document.getElementById("selectCluster");

// Function that will show the Random Patient button and fill the graphs according to the selected cluster
function updateGraphs() {
    // Show Random Patient button
    button.style.display = "block";

    // Get the selected value from the select element
    let value = selectCluster.options[selectCluster.selectedIndex].value;
    console.log("I will be updating the graphs");
    console.log(value);
}
