let heroi = 'Matheus';
let level = '';

const LevelHeroi = (victory, defeat) => {

    let GameResult = victory - defeat;



    switch (true) {
        case GameResult <= 10:
            level = "Ferro";
            break;
        case GameResult >= 11 && GameResult <= 20:
            level = "Bronze";
            break;
        case GameResult >= 21 && GameResult <= 20:
            level = "Prata";
            break;
        case GameResult >= 51 && GameResult <= 80:
            level = "Ouro";
            break;
        case GameResult >= 81 && GameResult <= 90:
            level = "Diamante";
            break;
        case GameResult >= 91 && GameResult <= 100:
            level = "Lendário";
            break;
        case GameResult >= 101:
            level = "Imortal";
            break;
        default:
            level = "Nível não determinado";
    }

    console.log(`O Herói tem de saldo de ${GameResult} e está no nível de ${level}`);
}

LevelHeroi(100, 3);


