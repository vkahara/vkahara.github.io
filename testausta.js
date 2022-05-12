const salasana = "COOL";


function haeSalasana() {

    var syotettySalasana = document.getElementById("syotaSalasana").value;


    if (syotettySalasana === salasana) {

        location.href = "salaisuus.html";

    } else {
        alert("VÄÄRÄ SALASANA");
    }
}