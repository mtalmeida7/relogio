const zonaHorariaSelect = document.getElementById('zona-horaria-select');

function atualizarRelogio() {
    const zonaHoraria = zonaHorariaSelect.value;
    const data = new Date(new Date().toLocaleString("en-US", { timeZone: zonaHoraria }));
    const horas = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');
    const segundos = data.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('horas').innerText = horas;
    document.getElementById('minutos').innerText = minutos;
    document.getElementById('segundos').innerText = segundos;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);

zonaHorariaSelect.addEventListener('change', atualizarRelogio);