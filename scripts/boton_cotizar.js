/*Botón para cotizar a través de Whatsapp*/

var codigo = document.getElementById('codigo');
var encabezado = document.getElementById('encabezado');

document.getElementById('abrir_whatsapp').addEventListener('click',function(){

    codigo = document.getElementById('codigo').textContent;
    encabezado = document.getElementById('encabezado').textContent;

    var mensaje;
    mensaje = 'Me interesa el producto, '  + encabezado + ', con código y/o nombre clave ' + codigo +'.'+'\nLo vi en www.gruporichardson.com.ni';
    var url = "https://api.whatsapp.com/send?text="+encodeURIComponent(mensaje)+"&phone= +50582021466";

    window.open(url);
});     


