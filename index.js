var taulukko = document.getElementById("lista");
titlevalue = document.getElementById("topic");
descriptionvalue = document.getElementById("description");
additionalsourcevalue = document.getElementById("sources");
creationdatevalue = document.getElementById("startdate");
finisheddatevalue = document.getElementById("finishingdate");
isreadyvalue = document.getElementById("finished");
var formi = document.getElementById("formi");




function poista(poistettava){
    fetch('http://localhost:8080/api/topics/' + poistettava, {
        method: 'DELETE',
    })
        .then(res => res.text())
        .then(res => console.log(res))
}


function naytatiedot() {
    taulukko.innerHTML = "";
    taulukko.innerHTML += "<thead><tr><th>Id</th><th>Otsikko</th><th>Kuvaus</th><th>Lähde</th><th>Aloituspäivä</th><th>Valmistumispäivä</th><th>Tila</th><th>Poista</th></tr></thead>"
    fetch('http://localhost:8080/api/topics', {
        method:"GET"
    })
        .then(function(response) {
            if (!response.ok) {
                console.log("Responsessa vikaa")
            }
            return response.json();
        })
        .then(function(responseAsJson) {
            for (var i = 0; i < responseAsJson.length; i++) {
                taulukko.innerHTML += "<tr><td>" + responseAsJson[i].id + "</td><td>" + responseAsJson[i].topic + "</td><td>" +
                    responseAsJson[i].description + "</td><td>" + responseAsJson[i].sources + "</td><td>" + responseAsJson[i].startdate +
                    "</td><td>" + responseAsJson[i].finishingdate + "</td><td>" + responseAsJson[i].finished + "</td><td><a onclick=\'poista(" + responseAsJson[i].id + "); window.location.reload();\'>Poista</a></td></tr>";
            }
        });
}


function piilotaLista(){
    taulukko.innerHTML = "";
}


const formToJSON = elements => [].reduce.call(elements, (data, element) => {
    data[element.id] = element.value;
    return data;
}, {});

function lisaatiedot() {
    const data = formToJSON(formi.elements);
    console.log(formi);
    if (data != null) {
        fetch('http://localhost:8080/api/topics', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data),

        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.log('Ei onnistu');
            });
    }

}
