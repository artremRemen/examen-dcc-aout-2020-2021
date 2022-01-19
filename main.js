// Nom    : Remendaer
// Prénom : Arthur
// Groupe : 2285

(function() {
    const Tymper = {
        init() {
            console.log(fonts);
            this.FontsList = document.querySelectorAll('option');
            this.AppItem = document.querySelector('.app');
            this.scoreDisplay = document.querySelector(".information__score");
            this.timeDisplay = document.querySelector(".information__time");
            this.submitButton = document.querySelector('[value="Valider"]');
            this.score = 0;
            this.time = 0;

            /* Functions */
            const RandomNumber = () => {
                this.number = parseInt(Math.random(0, 20) * 10 * 2);
                return this.number;
            }



            this.IntervalId = setInterval((e) => {
                console.log('test');
                this.time++

                    this.scoreDisplay.innerText = `Temps restant pour cette carte:00:${this.time}.`;

            }, 1000);

            if (this.time === 20) {

                clearInterval(this.IntervalId);
            }

            this.AppItem.innerHTML = `<li data-font-name="${fonts[RandomNumber()].name}" data-family="${fonts[RandomNumber()].familly}" class='app__item'>
            <div class="app__item__info"><span class="app__item__info__name">nom</span>
              <span class="app__item__info__info">famille - auteur</span>
            </div>
            <img class='app__item__font' src='./assets/fonts/${fonts[RandomNumber()].file}.svg' alt='Aa, abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ'>
            </li>`;

        }
    }
    Tymper.init();
})();