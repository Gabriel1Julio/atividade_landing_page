AOS.init();

const dataDoEnvento = new Date("Mar 27, 2024 19:00:00");
const timeStampDoEvento = dataDoEnvento.getTime();

const contaTempo = setInterval(function() {
    const Agora = new Date();
    const timeStampAtual = Agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const DiaEmMS = 1000 * 60 * 60 * 24;
    const HoraEmMs = 1000 * 60 * 60;
    const MinutoEmMs = 1000 * 60;

    const dias = Math.floor(distanciaAteOEvento / (DiaEmMS));
    const horas = Math.floor((distanciaAteOEvento % (DiaEmMS)) / (HoraEmMs))
    const minutos = Math.floor(distanciaAteOEvento % (HoraEmMs) / (MinutoEmMs))
    const segundos = Math.floor(distanciaAteOEvento % MinutoEmMs / 1000)

    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}min ${segundos}seg`

    if (distanciaAteOEvento < 0) {
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = `Evento Expirado`
    }
}, 1000)