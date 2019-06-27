var texto = 'Este es un mensaje de advertencia. Si estás en la ciudad, debes abandonarla cuanto antes. ¡Pero cuidado! las calles han sido invadidas por zombies que te atacarán en cuanto te vean. Debes tener cuidado con los cruces de vías, el servicio de trenes está completamente fuera de control. Buena suerte.';

var cadaLetra = '<span>' + texto.split('').join('</span><span>') + '</span>';
$(cadaLetra).hide().appendTo('.texto').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});