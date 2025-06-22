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

function executerOperation(nombre, operation) {
    document.getElementById('affichage').innerText = 0

    return operation(nombre, nombre)

    function additionner(nombre) {
        document.getElementById('additionner').innerText = ''
        return nombre + nombre
    }

    function soustraction(nombre) {
        document.getElementById('soustraction').innerText = ''
        return nombre + nombre
    }

    function multiplication(nombre) {
        return nombre * nombre
    }

    function division(nombre) {
        return nombre / nombre
    }

}
