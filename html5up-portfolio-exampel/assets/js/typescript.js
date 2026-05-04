function typeWriter(elementId, text, speed) {
    return new Promise((resolve) => {  // Ein Promise wird zurückgegeben
        const element = document.getElementById(elementId);
        if (!element) return;

        let i = 0;
        const intervalId = setInterval(() => {
            element.innerHTML += text.charAt(i);
            i++;
            if (i === text.length) {
                clearInterval(intervalId);
                resolve();  // Resolve wird aufgerufen. Man sagt du bist fertig kannst weiter machen
            }
        }, speed); // Geschwindigkeit des Typescripteffekt
    });
}







async function startTyping() {
    await typeWriter('intro', 'Wir sind die Gruppe 15 ', 50);
    
}

startTyping();
