let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        console.log('TESTANDO: ' + e.target.innerText);

        // LOGICA ? VERDADEIRO : FALSO
        display.innerText == 'ERROR' ? display.innerText = null : display.innerText;

        switch (e.target.innerText) {
            case 'C':
                display.innerText = null;
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                }
                catch {
                    display.innerText = 'ERROR';
                }
                break;
            case '←':
                display.innerText = display.innerText.slice(0, -1);
                break;
            default:
                display.innerText += e.target.innerText;
                break;
        }
    });
});