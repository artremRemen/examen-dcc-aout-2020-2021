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
            this.FamillyInput = document.querySelector('[list="families"]');
            this.NameInput = document.querySelector('[list="fonts"]');
            this.bodyElement = document.querySelector('body');
            this.score = 0;
            this.time = 20;
            this.number;
            this.NumberUsed = [];
            this.Response = 0;
            this.Result = 0;

            /* Functions */
            const RandomNumber = () => {
                this.number = parseInt(Math.random(0, 20) * 10 * 2);
                console.log(this.number);
                this.AppItem.innerHTML = `<li data-font-name="${fonts[this.number].name}" data-family="${fonts[this.number].family}" class='app__item'>
                <div class="app__item__info"><span class="app__item__info__name">nom</span>
                  <span class="app__item__info__info">famille - auteur</span>
                </div>
                <img class='app__item__font' src='./assets/fonts/${fonts[this.number].file}.svg' alt='Aa, abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ'>
                </li>`;
                return this.number;
            }

            const VerifResponse = () => {
                if (this.NameInput.value === fonts[this.number].name) {
                    this.Response++;
                }
                if (this.FamillyInput.value === fonts[this.number].family) {

                    this.Response++;
                }
                if (this.Response === 1) {
                    this.Result = this.Result + 0.5;
                }
                if (this.Response === 2) {
                    this.Result = this.Result + 1;
                }
                return this.Result;
            }


            this.number = RandomNumber();

            this.timeDisplay.innerText = `Temps restant pour cette carte:00:${this.time}`;
            this.scoreDisplay.innerText = `Score:${this.Result}`;

            this.IntervalId = setInterval((e) => {
                this.time--;
                this.timeDisplay.innerText = `Temps restant pour cette carte:00:${this.time}`;
                if (this.time === 0) {
                    clearInterval(this.IntervalId);
                }
            }, 1000);

            this.bodyElement.addEventListener('keypress', (e) => {
                if (e.code === 'Enter') {
                    e.preventDefault();
                    VerifResponse();
                    this.number = RandomNumber();
                    this.scoreDisplay.innerText = `Score:${this.Result}`;
                }
            })
            this.submitButton.addEventListener('click', (e) => {
                e.preventDefault();
                VerifResponse();
                this.number = RandomNumber();
                this.scoreDisplay.innerText = `Score:${this.Result}`;
            })
        }
    }
    Tymper.init();
})();