const lista = document.getElementById("lista")


document.getElementById("nappi").onclick=(lisaaListaan);




function Topic(otsikko, kuvaus, lahde, aloituspaiva, valmistumispaiva, valmius){
    this.otsikko = document.getElementById("otsikko").value
    this.kuvaus = document.getElementById("kuvaus").value
    this.lahde = document.getElementById("lahde").value
    this.aloituspaiva = document.getElementById("aloituspaiva").value
    this.valmistumispaiva = document.getElementById("lopetuspaiva").value
    this.valmius = document.getElementById("valmius").value
    this.toString = "Otsikko: " + this.otsikko + "; Kuvaus: " + this.kuvaus + "; Lähde: " + this.lahde + "; Aloituspäivä: " + this.aloituspaiva + "; Valmistumispäivä: " + this.valmistumispaiva + "; " + this.valmius;
}
function lisaaListaan(){
    lista.innerHTML += "<li>" + new Topic().toString;
}

document.getElementById("lista").style.listStyle='none'
