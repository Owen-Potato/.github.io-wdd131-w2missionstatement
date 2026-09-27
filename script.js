
let selectElem = document.querySelector('select');
let logo = document.querySelector('.logo');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current == 'dark') {
        document.body.style.backgroundColor = '#000000ff';
        document.body.style.color = 'white';

        logo.src = 'byui-logo-white.png';
    } 
    else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';

        logo.src = 'BYUI logo.png';
    }
}