function afficherNombre(nombre) {

    let affichage = document.getElementById('affichage')

    if (affichage.innerText == 0) {
        document.getElementById('affichage').innerText = ''
    }

    document.getElementById('affichage').innerText += nombre

}

function effacerNombre() {

    document.getElementById('affichage').innerText = 0

    if (affichage.innerText >= 0) {
        document.getElementById('clear').innerText = ''
    }

}

function calculer(nombre) {
    let calculer = document.getElementById('calculer')

    if (calculer.innerText == nombre) {
        document.getElementById(affichage).innerText = ''
    }

    document.getElementById('affichage').innerText += nombre
}