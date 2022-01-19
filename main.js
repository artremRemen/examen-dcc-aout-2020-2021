// Nom    : Remendaer
// Prénom : Arthur
// Groupe : 2285

(function() {
    const Tymper = {
        init() {
            console.log(fonts);
            this.FontsList = document.querySelectorAll('option');
            this.AppItem = document.querySelector('.app');
            this.scoreDisplay = document.querySelector("information__score");
            this.timeDisplay = document.querySelector("information__time");
            this.score = 0;
            this.time = 20;

            this.AppItem.innerHTML = `<li data-font-name="${fonts[1].name}" data-family="${fonts[1].familly}" class='app__item'>
            <div class="app__item__info"><span class="app__item__info__name">nom</span>
              <span class="app__item__info__info">famille - auteur</span>
            </div>
            <img class='app__item__font' src='./assets/fonts/${fonts[1].file}.svg' alt='Aa, abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ'>
          </li>`;

        }
    }
    Tymper.init();
})();



{
    /* <li data-font-name="nom" data-family="famille" class='app__item'>
      <div class="app__item__info"><span class="app__item__info__name">nom</span>
        <span class="app__item__info__info">famille - auteur</span>
      </div>
      <img class='app__item__font' src='./assets/fonts/nom.svg' alt='Aa, abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ'>
    </li> */
}