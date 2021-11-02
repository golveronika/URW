import prisonGif from './../../img/prison-stand.gif';
import dialogs from './../dictionary/dialogs-level1.json';

const data = {
    nickname: "Veronika",
    tags: [],
    tasks: [],
    // tags: [{
    //     id: 1,
    //     name: "develop",
    //     color: "#00ffbf"
    // }],
    // tasks: [
    //     [{
    //             name: "Сделать welcome page",
    //             complete: true,
    //             createDate: '01.10.2021 22:00',
    //             finishDate: null,
    //             tagID: 1

    //         },
    //         {
    //             name: "Сделать эту игру",
    //             complete: false,
    //             createDate: '01.10.2021 22:00',
    //             finishDate: null,
    //             tagID: 1
    //         }
    //     ]
    // ],
    startGame: "2021-11-01T23:25:00",
}




const Game = {
    step: 0,
    init: function() {
        const { nickname, startGame } = data;
        this.initHeader(nickname, startGame);
        this.initScene1();
    },
    initHeader: function(nickname, startGame) {
        const header = document.createElement("header");
        document.body.appendChild(header);
        const info = document.createElement("div");
        info.className = 'player-info';
        header.appendChild(info);

        const dateStart = new Date(startGame);
        calcSpendingTime(nickname, dateStart, info);

        setInterval(() => {
            calcSpendingTime(nickname, dateStart, info);
        }, 60000);

        const nav = document.createElement("nav");
        header.appendChild(nav);
        nav.innerHTML = "<button>Статистика</button><button>Выйти</button>";

        // Это мучительно больно!!! Надо переделать все в реакте!

    },
    initScene1: function(params) {
        const container = document.createElement("div");
        container.className = 'container';
        document.body.appendChild(container);

        const scene = document.createElement("div");
        scene.className = 'level-1 scene-1';
        container.appendChild(scene);

        const prison = document.createElement("img");
        prison.src = prisonGif;
        scene.appendChild(prison);

        // Уже просто лень, хочется увидеть что получится. Аж собака воет. Бедный пес.
        // Просто хардкод - никакой логики
        // НЕ СМОТРИ ЭТО

        dialogHero(scene, 0);
        setTimeout(() => {
            dialogAuthor(scene, 0)
        }, 1000);


    }
}

function calcSpendingTime(nickname, dateStart, info) {
    const now = new Date();
    const diff = now - dateStart;

    const spending = {
        m: Math.floor(diff / 60000 % 60),
        h: Math.floor(diff / 3600000 % 24),
        d: Math.floor(diff / 86400000)
    };

    const days = (spending.d > 0) ? ([11, 12, 13, 14, 15, 16, 17, 18, 19].includes(spending.d)) ?
        `${spending.d} дней ` :
        ([1].includes(spending.d % 10)) ? `${spending.d} день ` :
        ([2, 3, 4].includes(spending.d % 10)) ? `${spending.d} дня ` :
        `${spending.d} дней ` :
        '';

    const hours = (spending.h > 0) ? ([11, 12, 13, 14, 15, 16, 17, 18, 19].includes(spending.h)) ?
        `${spending.h} часов ` :
        ([1].includes(spending.h % 10)) ? `${spending.h} час ` :
        ([2, 3, 4].includes(spending.h % 10)) ? `${spending.h} часа ` :
        `${spending.h} часов ` :
        '';

    const min = (spending.m > 0) ? ([11, 12, 13, 14, 15, 16, 17, 18, 19].includes(spending.m)) ?
        `${spending.m} минут ` :
        ([1].includes(spending.m % 10)) ? `${spending.m} минута ` :
        ([2, 3, 4].includes(spending.m % 10)) ? `${spending.m} минуты ` :
        `${spending.m} минут ` :
        '';


    const gameTime = days + hours + min;

    info.innerHTML = `<span>${nickname}</span> играет уже <span>${gameTime}</span>`;
}

function dialogAuthor(scene, step) {
    let dialog = scene.querySelector('.dialog-author');

    if (dialog) dialog.remove();
    if (step > 15) return;


    dialog = document.createElement("div");
    dialog.className = "dialog-author";
    dialog.innerHTML = `<span>${dialogs.ru.scene1.author[step]}</span>`;
    scene.appendChild(dialog)

    dialog.addEventListener('click', () => {
        Game.step += 1;
        dialogAuthor(scene, Game.step)
        dialogHero(scene, Game.step)
    })
}


function dialogHero(scene, step) {
    console.log("step", step)
    let dialog = scene.querySelector('.dialog-man');
    const dialogIndex = [0, 1].includes(step) ? 0 : [4].includes(step) ? 1 : [7].includes(step) ? 2 : [14, 15].includes(step) ? 3 : null;

    console.log(dialogIndex)

    if (dialogIndex !== null) {
        if (dialog) dialog.remove();
        dialog = document.createElement("div");
        dialog.className = "dialog-man left";
        dialog.innerHTML = `<span class="angry">${dialogs.ru.scene1.hero[dialogIndex]}</span>`;
        scene.appendChild(dialog)
    } else if (dialog) dialog.remove();

}



export default Game;

{
    /* 
    <div class="container">
    <div class="level-1 scene-1">
        <img src="./../img/prison-stand.gif" alt="">
        <div class="dialog-man left">
            <span class="angry">ПОМОГИИТЕE!</span>
        </div>
        <div class="dialog-author">
            <span>О! Ты здесь!</span>
        </div>
    </div>
    </div> */
}