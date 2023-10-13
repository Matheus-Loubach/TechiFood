let heroi = 'Matheus';
let level = '';

const LevelHeroi = (xp) => {
    switch (true) {
        case xp <= 1000:
            level = "Ferro";
            break;
        case xp >= 1001 && xp <= 2000:
            level = "Bronze";
            break;
        case xp >= 2001 && xp <= 5000:
            level = "Prata";
            break;
        case xp >= 6001 && xp <= 7000:
            level = "Ouro";
            break;
        case xp >= 7001 && xp <= 8000:
            level = "Platina";
            break;
        case xp >= 8001 && xp <= 9000:
            level = "Ascendente";
            break;
        case xp >= 9001 && xp <= 10000:
            level = "Imortal";
            break;
        case xp >= 10001:
            level = "Radiante";
            break;
        default:
            level = "Nível não determinado";
    }

    console.log("O Herói de nome " + heroi + " está no nível de " + level);
}

LevelHeroi(5000);
