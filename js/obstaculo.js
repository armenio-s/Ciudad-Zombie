var Obstaculo = function (sprite, x, y, ancho, alto, potencia) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.potencia = potencia;

  this.chocar = function (jugador) {
    jugador.perderVida(this.potencia);
    this.potencia = 0;
  };
}
