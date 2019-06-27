var Juego = {
  anchoCanvas: 961,
  altoCanvas: 577,
  jugador: Jugador,
  vidasInicial: Jugador.vidas,
  audio: 'audio/musica-juego.mp3',
  ganador: false,
  obstaculosCarretera: [
    // Obstáculos visibles
    new Obstaculo('imagenes/valla_horizontal.png', 70, 430, 30, 30, 2),
    new Obstaculo('imagenes/bache.png', 90, 180, 30, 30, 1),
    new Obstaculo('imagenes/bache.png', 180, 300, 30, 30, 1),
    new Obstaculo('imagenes/bache.png', 180, 470, 30, 30, 1),
    new Obstaculo('imagenes/valla_vertical.png', 370, 380, 30, 30, 2),
    new Obstaculo('imagenes/valla_vertical.png', 370, 410, 30, 30, 2),
    new Obstaculo('imagenes/bache.png', 530, 300, 30, 30, 1),
    new Obstaculo('imagenes/bache.png', 530, 300, 30, 30, 1),
    new Obstaculo('imagenes/auto_rojo_izquierda.png', 530, 450, 30, 15, 3),
    new Obstaculo('imagenes/auto_verde_abajo.png', 540, 410, 15, 30, 3),
    new Obstaculo('imagenes/valla_horizontal.png', 760, 200, 30, 30, 2),
    new Obstaculo('imagenes/valla_horizontal.png', 790, 200, 30, 30, 2),
    new Obstaculo('imagenes/bache.png', 790, 300, 30, 30, 1),
    new Obstaculo('imagenes/bache.png', 840, 70, 30, 30, 1),
    new Obstaculo('imagenes/bache.png', 860, 400, 30, 30, 1),
    new Obstaculo('imagenes/auto_verde_abajo.png', 760, 410, 15, 30, 3),
    new Obstaculo('imagenes/auto_rojo_arriba.png', 770, 450, 15, 30, 3),
    new Obstaculo('imagenes/valla_horizontal.png', 775, 420, 30, 30, 2),
    new Obstaculo('imagenes/valla_vertical.png', 500, 440, 30, 30, 2),
    new Obstaculo('imagenes/valla_vertical.png', 500, 470, 30, 30, 2),
  ],

  bordes: [
    // // Bordes
    new Obstaculo('', 0, 5, 961, 18, 0),
    new Obstaculo('', 0, 559, 961, 18, 0),
    new Obstaculo('', 0, 5, 18, 572, 0),
    new Obstaculo('', 943, 5, 18, 572, 0),
    // Veredas
    new Obstaculo('', 18, 23, 51, 536, 1),
    new Obstaculo('', 69, 507, 690, 52, 1),
    new Obstaculo('', 587, 147, 173, 360, 1),
    new Obstaculo('', 346, 147, 241, 52, 1),
    new Obstaculo('', 196, 267, 263, 112, 1),
    new Obstaculo('', 196, 23, 83, 244, 1),
    new Obstaculo('', 279, 23, 664, 56, 1),
    new Obstaculo('', 887, 79, 56, 480, 1)
  ],

  enemigos: [
    new ZombieCaminante("imagenes/zombie1.png",300,100,10,10,0.3,{desdeX: 280, hastaX: 635, desdeY: 20, hastaY: 300},0),
    new ZombieCaminante("imagenes/zombie2.png",600,200,10,10,0.4,{desdeX: 280, hastaX: 635, desdeY: 20, hastaY: 300},0),
    new ZombieCaminante("imagenes/zombie3.png",280,200,10,10,0.6,{desdeX: 280, hastaX: 635, desdeY: 20, hastaY: 300},0),
    new ZombieCaminante("imagenes/zombie4.png",350,200,10,10,0.8,{desdeX: 280, hastaX: 635, desdeY: 20, hastaY: 300},0),
    new ZombieCaminante("imagenes/zombie1.png",635,100,10,10,0.4,{desdeX: 20, hastaX: 635, desdeY: 20, hastaY: 300},0),
    new ZombieCaminante("imagenes/zombie2.png",300,500,10,10,0.9,{desdeX: 20, hastaX: 635, desdeY: 20, hastaY: 300},0),
    new ZombieCaminante("imagenes/zombie3.png",200,400,10,10,0.3,{desdeX: 20, hastaX: 635, desdeY: 20, hastaY: 300},0),
    new ZombieCaminante("imagenes/zombie4.png",400,300,10,10,0.2,{desdeX: 20, hastaX: 635, desdeY: 20, hastaY: 300},0),
    new ZombieCaminante("imagenes/zombie2.png",20,400,10,10,0.7,{desdeX: 20, hastaX: 635, desdeY: 350, hastaY: 557},0),
    new ZombieCaminante("imagenes/zombie3.png",635,500,10,10,0.9,{desdeX: 20, hastaX: 635, desdeY: 350, hastaY: 557},0),
    new ZombieCaminante("imagenes/zombie3.png",400,400,10,10,0.9,{desdeX: 20, hastaX: 635, desdeY: 20, hastaY: 300},0),
    new ZombieCaminante("imagenes/zombie4.png",500,290,10,10,0.7,{desdeX: 20, hastaX: 635, desdeY: 20, hastaY: 300},0),
    new ZombieCaminante("imagenes/zombie2.png",850,400,10,10,1,{desdeX: 700, hastaX: 940, desdeY: 20, hastaY: 300},0),
    new ZombieCaminante("imagenes/zombie2.png",850,400,10,10,0.7,{desdeX: 700, hastaX: 940, desdeY: 20, hastaY: 557},0),
    new ZombieConductor("imagenes/tren_vertical.png",644,0,30,90,6,{desdeX: 614, hastaX: 674, desdeY: 0, hastaY: 577},"v"),
    new ZombieConductor("imagenes/tren_vertical.png",674,0,30,90,3,{desdeX: 648, hastaX: 708, desdeY: 0, hastaY: 577},"v"),
    new ZombieConductor("imagenes/tren_horizontal.png",400,322,90,30,6,{desdeX: 0, hastaX: 961, desdeY: 292, hastaY: 352},"h"),
  ]
}

Juego.iniciarRecursos = function() {
  Resources.load([
    'imagenes/mapa.png',
    'imagenes/mensaje_gameover.png',
    'imagenes/Splash.png',
    'imagenes/bache.png',
    'imagenes/tren_horizontal.png',
    'imagenes/tren_vertical.png',
    'imagenes/valla_horizontal.png',
    'imagenes/valla_vertical.png',
    'imagenes/zombie1.png',
    'imagenes/zombie2.png',
    'imagenes/zombie3.png',
    'imagenes/zombie4.png',
    'imagenes/auto_rojo_abajo.png',
    'imagenes/auto_rojo_arriba.png',
    'imagenes/auto_rojo_derecha.png',
    'imagenes/auto_rojo_izquierda.png',
    'imagenes/auto_verde_abajo.png',
    'imagenes/auto_verde_derecha.png'
  ]);
  Resources.onReady(this.comenzar.bind(Juego));
};

// Bordes de las veredas a los obstaculos de la carretera
Juego.obstaculos = function() {
  return this.obstaculosCarretera.concat(this.bordes);
};

Juego.comenzar = function() {
  // Inicializar el canvas del juego
  Dibujante.inicializarCanvas(this.anchoCanvas, this.altoCanvas);
  this.buclePrincipal();
};

Juego.buclePrincipal = function() {

  // Con update se actualiza la logica del juego, tanto ataques como movimientos
  this.update();
  // Funcion que dibuja por cada fotograma a los objetos en pantalla.
  this.dibujar();
    Dibujante.dibujarEntidad(Jugador);
  // Esto es una forma de llamar a la funcion Juego.buclePrincipal() repetidas veces
  window.requestAnimationFrame(this.buclePrincipal.bind(this));
};

Juego.update = function() {
  this.calcularAtaques();
  this.moverEnemigos();
}

Juego.capturarMovimiento = function(tecla) {
  var movX = 0;
  var movY = 0;
  var velocidad = this.jugador.velocidad;

  if (tecla == 'izq') {
    movX = -velocidad;
  }
  if (tecla == 'arriba') {
    movY = -velocidad;
  }
  if (tecla == 'der') {
    movX = velocidad;
  }
  if (tecla == 'abajo') {
    movY = velocidad;
  }
  if (this.chequearColisiones(movX + this.jugador.x, movY + this.jugador.y)) {
    Jugador.mover(movX,movY);     
  }
};

Juego.dibujar = function() {
  // Borrar el fotograma actual
  Dibujante.borrarAreaDeJuego();
  //Se pinta la imagen de fondo segun el estado del juego
  this.dibujarFondo();

  Dibujante.dibujarEntidad(Jugador);

  // Se recorren los obstaculos de la carretera pintandolos
  this.obstaculosCarretera.forEach(function(obstaculo) {
    Dibujante.dibujarEntidad(obstaculo);
  });

  // Se recorren los enemigos pintandolos
  this.enemigos.forEach(function(enemigo) {
    Dibujante.dibujarEntidad(enemigo);
  });

  // El dibujante dibuja las vidas del jugador
  var tamanio = this.anchoCanvas / this.vidasInicial;
  Dibujante.dibujarRectangulo('white', 0, 0, this.anchoCanvas, 8);
  for (var i = 0; i < this.jugador.vidas; i++) {
    var x = tamanio * i
    Dibujante.dibujarRectangulo('red', x, 0, tamanio, 8);
  }

  Dibujante.dibujarRectangulo('MediumTurquoise', 760, 520, 125, 20);
};



// Recorre los enemigos haciendo que se muevan. 
Juego.moverEnemigos = function() {
  this.enemigos.forEach(function(enemigo){
    enemigo.mover();
  })
};

// Recorre los enemigos para ver cual esta colisionando con el jugador
Juego.calcularAtaques = function() {
  this.enemigos.forEach(function(enemigo) {
    if (this.intersecan(enemigo, this.jugador, this.jugador.x, this.jugador.y)) {
      enemigo.comenzarAtaque(this.jugador);
    } else {
      enemigo.dejarDeAtacar();
    }
  }, this);
};



// Se chequea si el jugador se puede mover a la posicion destino.
Juego.chequearColisiones = function(x, y) {
  var puedeMoverse = true
  this.obstaculos().forEach(function(obstaculo) {
    if (this.intersecan(obstaculo, this.jugador, x, y)) {

      obstaculo.chocar(this.jugador);

      puedeMoverse = false
    }
  }, this)
  return puedeMoverse
};

// Este metodo chequea si los elementos 1 y 2 si cruzan en x e y
Juego.intersecan = function(elemento1, elemento2, x, y) {
  var izquierda1 = elemento1.x
  var derecha1 = izquierda1 + elemento1.ancho
  var techo1 = elemento1.y
  var piso1 = techo1 + elemento1.alto
  var izquierda2 = x
  var derecha2 = izquierda2 + elemento2.ancho
  var techo2 = y
  var piso2 = y + elemento2.alto

  return ((piso1 >= techo2) && (techo1 <= piso2) &&
    (derecha1 >= izquierda2) && (izquierda1 <= derecha2))
}

Juego.dibujarFondo = function() {
  // Muestra el mensaje de game over de fondo
  if (this.terminoJuego()) {
    Dibujante.dibujarImagen('imagenes/mensaje_gameover.png', 0, 5, this.anchoCanvas, this.altoCanvas).style.zIndex = '1';
  }

  // Muestra el mensaje de ganoJuego de fondo
  else if (this.ganoJuego()) {
    Dibujante.dibujarImagen('imagenes/Splash.png', 0, 5, this.anchoCanvas, this.altoCanvas).style.zIndex = '1';
  } else {
    Dibujante.dibujarImagen('imagenes/mapa.png', 0, 5, this.anchoCanvas, this.altoCanvas);
  }
};

Juego.terminoJuego = function() {
  return this.jugador.vidas <= 0;
};

Juego.ganoJuego = function() {
  return (this.jugador.y + this.jugador.alto) > 530;
};

Juego.reproducirSegun = function() {
  if (this.terminoJuego()) {
    Juego.audio = 'audio/gameover.mp3';
  }
}

Juego.iniciarRecursos();

// Activa las lecturas del teclado al presionar teclas.
document.addEventListener('keydown', function(e) {
  var allowedKeys = {
    37: 'izq',
    38: 'arriba',
    39: 'der',
    40: 'abajo'
  };

  Juego.capturarMovimiento(allowedKeys[e.keyCode]);
});


