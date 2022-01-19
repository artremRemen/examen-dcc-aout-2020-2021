// Nom    : Remendaer
// Prénom : Arthur
// Groupe : 2285

(function() {
    const Tymper = {
        init() {
            this.FontsList = document.querySelectorAll('option');
            this.AppItem = document.querySelector('.app');
            this.scoreDisplay = document.querySelector(".information__score");
            this.timeDisplay = document.querySelector(".information__time");
            this.submitButton = document.querySelector('[value="Valider"]');
            this.FamillyInput = document.querySelector('[list="families"]');
            this.NameInput = document.querySelector('[list="fonts"]');
            this.Wrong = document.querySelector('.wrong-cards');
            this.bodyElement = document.querySelector('body');
            this.DatalistFonts = document.querySelector('#fonts');
            this.PlayAgainButton = document.querySelector('#play-again');
            this.score = 0;
            this.time = 20;
            this.number;
            this.NumberUsed = [];
            this.ListFonts = [];
            this.Response = 0;
            this.Result = 0;
            this.round = 0;
            this.ArrayIndex;
            this.elementItem;


            /* Functions */
            const RandomNumber = () => {
                this.number = parseInt(Math.random(0, 20) * 10 * 2);
                if (this.NumberUsed.indexOf(this.number)) {


                } else {
                    this.NumberUsed.push(this.number);
                    return this.number;
                }
            }

            const StartGame = () => {
                for (let i = 0; i < fonts.length; i++) {
                    RandomNumber();

                    this.DatalistFonts.insertAdjacentHTML('beforeend', `<option value="${fonts[this.number].name}"></option>`);

                    this.ListFonts.push(`<li data-font-name="${fonts[this.number].name}" data-family="${fonts[this.number].family}" class='app__item'>
                <div class="app__item__info"><span class="app__item__info__name">nom</span>
                  <span class="app__item__info__info">famille - auteur</span>
                </div>
                <img class='app__item__font' src='./assets/fonts/${fonts[this.number].file}.svg' alt='Aa, abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ'>
                </li>`);
                }
            }

            const AddClass = (Class1, Class2, ArrayIndex) => {

                if (Class2 === ' ') {
                    this.AppItem.children[0].classList.add(Class1);
                } else {
                    this.AppItem.children[0].classList.add(Class1, Class2);
                }
            }

            const VerifResponse = () => {
                clearInterval(this.IntervalId);
                this.ArrayIndex = this.ListFonts.length - 1;
                if (this.NameInput.value === fonts[this.ArrayIndex].name) {
                    this.Response++;
                }
                if (this.FamillyInput.value === fonts[this.ArrayIndex].family) {

                    this.Response++;
                }
                if (this.Response === 1) {
                    this.Result = this.Result + 0.5;
                    AddClass('app__item--move', ' ', this.ArrayIndex);
                    this.Wrong.insertAdjacentHTML('beforeend', this.ListFonts[this.ArrayIndex]);
                    this.ListFonts.pop();
                }
                if (this.Response === 2) {
                    this.Result = this.Result + 1;
                    AddClass('app__item--move', 'app__item--move--success', this.ArrayIndex);
                    this.ListFonts.pop();
                }
                if (this.Response === 0) {
                    AddClass('app__item--move', ' ', this.ArrayIndex);
                    this.Wrong.insertAdjacentHTML('beforeend', this.ListFonts[this.ArrayIndex]);
                    this.ListFonts.pop();
                }

                this.scoreDisplay.innerText = `Score:${this.Result}/${fonts.length}`;
                this.time = 20;
                this.timeDisplay.innerText = `Temps restant pour cette carte:00:${this.time}`;
                this.round++;
                return this.Result;
            }

            const SetVignette = () => {
                console.log(this.ListFonts.length - 1);
                if (this.round !== 0) {
                    this.elementItem = document.querySelector('.app__item');
                    this.elementItem.remove()
                }
                this.AppItem.insertAdjacentHTML("beforeend", this.ListFonts[this.ListFonts.length - 1]);
                this.IntervalId = setInterval(() => {
                    this.time--;
                    this.timeDisplay.innerText = `Temps restant pour cette carte:00:${this.time}`;
                    if (this.time === 0) {
                        clearInterval(this.IntervalId);
                        VerifResponse();
                        SetVignette();
                    }

                }, 1000);
            }
            const ENDGAME = () => {
                this.PlayAgainButton.classList.remove('play--again--hidden.');
                StartGame();
                clearInterval(this.IntervalId);
                this.time = 20;
                this.timeDisplay.innerText = `Temps restant pour cette carte:00:${this.time}`;
                this.AppItem.insertAdjacentHTML("beforeend", this.ListFonts[this.ListFonts.length - 1]);
                this.score = 0;
                this.scoreDisplay.innerText = `Score:${this.Result}/${fonts.length}`;
            }


            StartGame();

            SetVignette();

            this.timeDisplay.innerText = `Temps restant pour cette carte:00:${this.time}`;
            this.scoreDisplay.innerText = `Score:${this.Result}/${fonts.length}`;

            this.bodyElement.addEventListener('keypress', (e) => {
                if (e.code === 'Enter') {
                    e.preventDefault();
                    if (this.round < 19) {
                        this.scoreDisplay.innerText = `Score:${this.Result}`;
                        VerifResponse();
                        SetVignette();
                    } else {
                        ENDGAME();
                    }
                }
            })
            this.submitButton.addEventListener('click', (e) => {
                e.preventDefault();

                if (this.round < 19) {
                    this.scoreDisplay.innerText = `Score:${this.Result}`;
                    VerifResponse();
                    SetVignette();
                } else {
                    ENDGAME();
                }
            })
        }
    }
    Tymper.init();
})();