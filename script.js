let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')
let btn5 = document.querySelector('#btn5')
let game = document.querySelector('.game')
let nav = document.querySelector('nav')
let button = document.querySelector('.button')

let pointCanavar = document.querySelector('#canavarpoint')
let pointUser = document.querySelector('#userpoint')
let netice = document.querySelector('.netice1')
let netice1 = document.querySelector('.netice2')

let k = 100
let f = 100
let say = 2
let say1 = 2


let span1 = document.querySelector('#span1')
let span2 = document.querySelector('#span2')
let canavarscore = document.querySelector('#canavarscore')
let userscore = document.querySelector('#userscore')
let promp = prompt('Adinizi daxil edin')
let h1 = document.querySelector("#userh1")

h1.innerHTML = promp
let score = 0
let score1 = 0


btn1.addEventListener('click', yenile)
let scorediv = document.querySelector('.score')
function yenile() {
    game.style.display = 'block'
    k = 100
    f = 100
    say = 2
    span1.style.width = `${k}px`
    span2.style.width = `${f}px`
    pointUser.innerHTML = f
    pointCanavar.innerHTML = k
    btn3.removeAttribute('disabled');
    btn4.removeAttribute('disabled');


}

btn3.addEventListener('click', siddet)
function siddet() {
    say++
    let random3 = Math.floor(Math.random() * 30)

    let random1 = Math.floor(Math.random() * 25)

    k -= random3
    if (k < 0) {
        pointCanavar.innerHTML = 0
        score++
        userscore.innerHTML = score

        span2.style.width = '0px'
        nav.style.display = 'none'
        game.style.display = 'none'
        button.style.display = 'none'
        netice1.classList.add('active')
        scorediv.style.display = 'none'

    }

    else {
        pointCanavar.innerHTML = k
        span1.style.width = `${k}px`

    }
    f -= random1

    if (f < 0) {
        pointUser.innerHTML = 0

        span2.style.width = '0px'
        nav.style.display = 'none'
        game.style.display = 'none'
        button.style.display = 'none'
        netice.classList.add('active')
        score1++
        canavarscore.innerHTML = score1
        scorediv.style.display = 'none'
    }

    else {
        pointUser.innerHTML = f

        span2.style.width = `${f}px`
    }



    if (say == 4) {
        btn3.setAttribute('disabled', 'disabled')
    }

}
btn4.addEventListener('click', health);

function health() {
    let random1 = Math.floor(Math.random() * 75)


    say1++

    k += random1


    if (k > 100) {
        k = 100
        pointCanavar.innerHTML = 100
        span1.style.width = `100px`

    }
    else {
        pointCanavar.innerHTML = k
        span1.style.width = `${k}px`

    }
    let random2 = Math.floor(Math.random() * 45)
    f += random2
    if (f > 100) {
        f = 100
        pointUser.innerHTML = 100

        span2.style.width = `100px`
    }
    else {
        pointUser.innerHTML = f

        span2.style.width = `${f}px`
    }
    if (say1 == 4) {
        btn4.setAttribute('disabled', 'disabled')
    }

}
btn2.addEventListener('click', hucum)
function hucum() {

    let random1 = Math.floor(Math.random() * 15)

    if (k - random1 > 0) {


        k -= random1




        pointCanavar.innerHTML = k


        span1.style.width = `${k}px`



    }
    else {
        k = 0
        span1.style.width = `${k}px`
        score++
        userscore.innerHTML = score

        pointCanavar.innerHTML = k
        nav.style.display = 'none'
        game.style.display = 'none'
        button.style.display = 'none'
        netice1.classList.add('active')
        scorediv.style.display = 'none'

    }

    let random2 = Math.floor(Math.random() * 15)

    if (f - random2 > 0) {
        f -= random2
        console.log(random2);
        pointUser.innerHTML = f


        span2.style.width = `${f}px`




    }
    else {

        f = 0

        span2.style.width = `${f}px`
        pointUser.innerHTML = f

        score1++
        canavarscore.innerHTML = score1
        nav.style.display = 'none'
        game.style.display = 'none'
        button.style.display = 'none'
        netice.classList.add('active')
        scorediv.style.display = 'none'


    }

}

function again() {
    nav.style.display = 'flex'
    game.style.display = 'none'
    button.style.display = 'block'
    netice1.classList.remove('active')
    netice.classList.remove('active')
    scorediv.style.display = 'flex'


}
btn5.addEventListener('click', cixis);
function cixis() {
    score1++
    canavarscore.innerHTML = score1
    nav.style.display = 'none'
    game.style.display = 'none'
    button.style.display = 'none'
    netice.classList.add('active')
    scorediv.style.display = 'none'
}



