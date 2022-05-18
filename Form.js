class Form {
  constructor() {
    // CRIE OS ELEMENTOS DA CLASSE
    this.titleImg = createImg("./assets/title.png", "titulo do jogo");
    this.input = createInput("").attribute(
      "placeholder",
      "Digite seu Nome aqui"
    );
    this.playButton = createButton("Play");
    this.greeting = createElement("h2");
  }

  setElementPosition() {
    // DEFINA A POSIÇÃO DOS ELEMENTOS
    this.input.position(width / 2 - 110, height / 2 - 10);
    this.playButton.position(width / 2 - 110, height / 2 + 20);
    this.titleImg.position(10, 100);
    this.greeting.position(width / 2 - 140, height / 2 - 50);
    this.titleImg.class("gameTitle");
  }

  hide() {
    // USE A FUNÇÃO PARA DESAPARECER OS ELEMENTOS
    this.input.hide();
    this.playButton.hide();
    this.greeting.hide();
  }

  handleMousePressed() {
    // CRIE A FUNÇÃO DE PRESSIONAMENTO DE TECLA
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `Olá, ${this.input.value()} </br> espere o outro jogador.`;
      this.greeting.html(message);

      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.updateCount(playerCount);
      player.addPlayer();
      player.getDistance();
    });
  }

  display() {
    // CHAME A FUNÇÃO DE POSIÇÃO DOS ELEMENTOS
    this.setElementPosition();
    this.handleMousePressed();

    // CHAME A FUNÇÃO DE PRESSIONAMENTO DE TECLA
  }
}
