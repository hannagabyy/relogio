const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function tempo(){
    let data = new Date();
    let hh = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    if (hh < 10) hh= '0'+hh
    if (min < 10) min= '0'+min
    if (seg < 10) seg= '0'+seg

    horas.innerText = hh
    minutos.innerText = min
    segundos.innerText = seg

})
