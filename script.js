const gameplaces = document.querySelectorAll('.gameplace');

gameplaces.forEach(gameplace => {
    gameplace.addEventListener('click', function(event) {
        const span = gameplace.querySelector('.xo');

        if (span && span.textContent === "") {
            span.textContent = 'X';
        }
    })
})





