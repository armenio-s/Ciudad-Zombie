var Jugador = {
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 50,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 25,

  mover(x,y){
    if(x > 0){
      this.sprite = "imagenes/auto_rojo_derecha.png";
      this.ancho = 30;
      this.alto = 15;
    } else if(x < 0) {
      this.sprite = "imagenes/auto_rojo_izquierda.png";
      this.ancho = 30;
      this.alto = 15;
    } else if(y > 0){
      this.sprite = "imagenes/auto_rojo_abajo.png";
      this.ancho = 15;
      this.alto = 30;
    } else if(y < 0){
      this.sprite = "imagenes/auto_rojo_arriba.png";
      this.ancho = 15;
      this.alto = 30;
    }
  this.x += x;
  this.y += y;
  },

  perderVida(cantidadVidas){
    this.vidas = this.vidas - cantidadVidas;
  }
}

