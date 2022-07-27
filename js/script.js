/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let genre = document.querySelector('.promo__genre')
genre.innerHTML = 'Драма'

let imgs = document.querySelectorAll('img')

imgs.forEach((add, adds) => {
    add.style.display = 'none'
});

let bg = document.querySelector('.promo__bg')
 
bg.style.backgroundImage = "url('./img/bg.jpg')";

//Selector
let list = document.querySelector('.promo__interactive-list')

//Create
let logan = document.createElement('li')
let deletef = document.createElement('div')
let liga = document.createElement('li')
let deletes = document.createElement('div')
let land = document.createElement('li')
let deletet = document.createElement('div')
let devil = document.createElement('li')
let deletefo = document.createElement('div')
let piligrim = document.createElement('li')
let deletefi = document.createElement('div')

//innerHTML
logan.innerHTML = 'Логан'
liga.innerHTML = 'Лига справедливости'
land.innerHTML = 'Ла-ла лэнд'
devil.innerHTML = 'Одержимость'
piligrim.innerHTML = 'Скотт Пилигрим против...'

//ClassList
logan.classList.add('promo__interactive-item')
deletef.classList.add('delete')
liga.classList.add('promo__interactive-item')
deletes.classList.add('delete')
land.classList.add('promo__interactive-item')
deletet.classList.add('delete')
devil.classList.add('promo__interactive-item')
deletefo.classList.add('delete')
piligrim.classList.add('promo__interactive-item')
deletefi.classList.add('delete')

//append
list.append(logan)
list.append(deletef)
list.append(liga)
list.append(deletes)
list.append(land)
list.append(deletet)
list.append(devil)
list.append(deletefo)
list.append(piligrim)
list.append(deletefi)

//queryselector
let body = document.querySelector('body')

////////onclick
logan.onclick = () => {
    //create
    let font = document.createElement('div')
    let main = document.createElement('div')
    let img = document.createElement('div')
    let div = document.createElement('div')
    let span = document.createElement('span')
    let button = document.createElement('button')
    let trash = document.createElement('div')

    //innerHTML
    span.innerHTML = 'В недалеком будущем уставший от жизни Логан <br> заботится о больном профессоре Икс, который <br> прячется неподалеку от мексиканской границы. Но <br> Логан больше не сможет скрывать свое прошлое, когда <br> встретится с юным мутантом, которого преследуют <br> темные силы.'
    button.innerHTML = 'Смотреть'

    //classList
    font.classList.add('font')
    main.classList.add('main')
    img.classList.add('img')
    div.classList.add('div')
    span.classList.add('span')
    button.classList.add('button')
    trash.classList.add('trash')

    //append
    body.append(font)
    body.append(main)
    main.append(img)
    main.append(div)
    div.append(span)
    div.append(button)
    div.append(trash)

    trash.onclick = () => {
        main.classList.add('active')
        font.classList.add('active')
    }
}
liga.onclick = () => {
    //create
    let font = document.createElement('div')
    let main = document.createElement('div')
    let img = document.createElement('div')
    let div = document.createElement('div')
    let span = document.createElement('span')
    let button = document.createElement('button')
    let trash = document.createElement('div')

    //innerHTML
    span.innerHTML = 'Брюс Уэйн, вдохновленный самопожертвованием Супермена, вновь обретает веру в человечество. Он заручается поддержкой новой союзницы, Дианы Принс, чтобы сразиться с еще более могущественным противником. Бэтмен и Чудо-Женщина быстро набирают команду сверхлюдей для борьбы с пробудившейся угрозой. Но несмотря на уникальный состав отряда супергероев — Бэтмен, Чудо-Женщина, Аквамэн, Киборг и Флэш, — быть может, спасать планету от вторжения .'
    button.innerHTML = 'Смотреть'

    //classList
    font.classList.add('font')
    main.classList.add('main')
    img.classList.add('imgf')
    div.classList.add('div')
    span.classList.add('span')
    button.classList.add('button')
    trash.classList.add('trash')

    //append
    body.append(font)
    body.append(main)
    main.append(img)
    main.append(div)
    div.append(span)
    div.append(button)
    div.append(trash)

    trash.onclick = () => {
        main.classList.add('active')
        font.classList.add('active')
    }
}
land.onclick = () => {
    //create
    let font = document.createElement('div')
    let main = document.createElement('div')
    let img = document.createElement('div')
    let div = document.createElement('div')
    let span = document.createElement('span')
    let button = document.createElement('button')
    let trash = document.createElement('div')

    //innerHTML
    span.innerHTML = 'Это история любви старлетки, которая между прослушиваниями подает кофе состоявшимся кинозвездам, и фанатичного джазового музыканта, вынужденного подрабатывать в заштатных барах. Но пришедший к влюбленным успех начинает подтачивать их отношения.'
    button.innerHTML = 'Смотреть'

    //classList
    font.classList.add('font')
    main.classList.add('main')
    img.classList.add('imgs')
    div.classList.add('div')
    span.classList.add('span')
    button.classList.add('button')
    trash.classList.add('trash')

    //append
    body.append(font)
    body.append(main)
    main.append(img)
    main.append(div)
    div.append(span)
    div.append(button)
    div.append(trash)

    trash.onclick = () => {
        main.classList.add('active')
        font.classList.add('active')
    }
}
devil.onclick = () => {
    //create
    let font = document.createElement('div')
    let main = document.createElement('div')
    let img = document.createElement('div')
    let div = document.createElement('div')
    let span = document.createElement('span')
    let button = document.createElement('button')
    let trash = document.createElement('div')

    //innerHTML
    span.innerHTML = 'Эндрю мечтает стать великим. Казалось бы, вот-вот его мечта осуществится. Юношу замечает настоящий гений, дирижер лучшего в стране оркестра. Желание Эндрю добиться успеха быстро становится одержимостью, а безжалостный наставник продолжает подталкивать его все дальше и дальше — за пределы человеческих возможностей. Кто выйдет победителем из этой схватки?'
    button.innerHTML = 'Смотреть'

    //classList
    font.classList.add('font')
    main.classList.add('main')
    img.classList.add('imgt')
    div.classList.add('div')
    span.classList.add('span')
    button.classList.add('button')
    trash.classList.add('trash')

    //append
    body.append(font)
    body.append(main)
    main.append(img)
    main.append(div)
    div.append(span)
    div.append(button)
    div.append(trash)

    trash.onclick = () => {
        main.classList.add('active')
        font.classList.add('active')
    }
}
piligrim.onclick = () => {
    //create
    let font = document.createElement('div')
    let main = document.createElement('div')
    let img = document.createElement('div')
    let div = document.createElement('div')
    let span = document.createElement('span')
    let button = document.createElement('button')
    let trash = document.createElement('div')

    //innerHTML
    span.innerHTML = 'Скотт Пилигрим нашел девушку своей мечты. Но на его пути стоит более сложная задача: чтобы встречаться с ней, Скотту придется победить ее семерых бывших и очень злых парней.'
    button.innerHTML = 'Смотреть'

    //classList
    font.classList.add('font')
    main.classList.add('main')
    img.classList.add('imgfo')
    div.classList.add('div')
    span.classList.add('span')
    button.classList.add('button')
    trash.classList.add('trash')

    //append
    body.append(font)
    body.append(main)
    main.append(img)
    main.append(div)
    div.append(span)
    div.append(button)
    div.append(trash)

    trash.onclick = () => {
        main.classList.add('active')
        font.classList.add('active')
    }
}