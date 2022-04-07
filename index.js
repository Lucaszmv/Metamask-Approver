const $ = (elem) => { return document.querySelector(elem) };
const sleep = (ms) => { return new Promise((resolve) => setTimeout(resolve, ms)) };

(async function () {

//texto ativado

const texto = document.createElement('span');

texto.style.position = 'fixed';
texto.style.top = '5px';
texto.style.left = '5px';
texto.style.zIndex = '5000';
texto.style.fontSize = '13px';
texto.style.color = '#008080';
texto.innerHTML = 'SCRIPT ATIVADO';
texto.style.fontWeight = 'bold';

document.body.append(texto);


// aprovar transação
        while (true) {

            const transaction = $('.transaction-list-item--unconfirmed');

            if(transaction && (transaction.innerText.includes('Desaprovado') || transaction.innerText.includes('Unapproved'))) {
                $('.transaction-list-item--unconfirmed').click();
            }

            const button = $('.btn-primary');
                if(button && !button.disabled) {
                    button.click()
                }

            try {
                setTimeout(() => document.getElementsByClassName("home__tab")[1].click(), 3000);

                await sleep(500);

            }catch (error) {
            console.log("Até o momento não encontrei nenhum botão para confirmar!")
            }

    }

})()

