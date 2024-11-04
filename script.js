
document.getElementById('popup').style.display = 'block';

function noResponse() {
    document.getElementById('popup').innerHTML = "<h2>Добре, ти в безпеці!</h2>";
}

function firstYes() {
    document.getElementById('popup').innerHTML = "<h2>Ти точно хочеш покарання?</h2><div class='button-container'><button class='button yes-button' onclick='confirmPunishment()'>Так, точно</button><button class='button no-button' onclick='noResponse()'>Ні, передумала</button></div>";
}

function confirmPunishment() {
    const popup = document.getElementById('popup');
    popup.innerHTML = "<h2>Заявка в поліцію буде відправлена через <span id='policeTimer' class='timer'>3</span> секунди...</h2>";
    popup.style.display = 'block';

    let policeCountdown = 3;
    const policeTimer = setInterval(() => {
        policeCountdown--;
        document.getElementById('policeTimer').innerText = policeCountdown;
        if (policeCountdown <= 0) {
            clearInterval(policeTimer);
            popup.innerHTML += "<h2>Виклики СБУ за твоєю адресою через <span id='sbuTimer' class='timer'>3</span> секунди!</h2>";
            let sbuCountdown = 3;
            const sbuTimer = setInterval(() => {
                sbuCountdown--;
                document.getElementById('sbuTimer').innerText = sbuCountdown;
                if (sbuCountdown <= 0) {
                    clearInterval(sbuTimer);
                    displayFinalMessage();
                }
            }, 1000);
        }
    }, 1000);
}

function displayFinalMessage() {
    const finalMessage = document.getElementById('finalMessage');
    finalMessage.innerHTML = "На все добре, успіхів!";
    finalMessage.style.display = 'block';
    finalMessage.style.animation = 'fadeIn 0.5s ease';
    document.getElementById('popup').style.display = 'none';
}
