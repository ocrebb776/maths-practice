const q = [document.getElementById('part1'), document.getElementById('part2'), document.getElementById('part3')]
    // num 1 , operator , num 2 , ans , correct ,wrong, total
let stuff = [0, 0, 0, 0, 0, 0, 0]
const operators = ['+', '-', 'X', '/']
const num = document.getElementById('in')
const maxnum = prompt("enter difficulty \n 1-100") * 12
const key = [document.getElementById('0'),
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5'),
    document.getElementById('6'),
    document.getElementById('7'),
    document.getElementById('8'),
    document.getElementById('9'),
    document.getElementById('.'),
    document.getElementById('-'),
    document.getElementById('<-'),
    document.getElementById('_/'),
    document.getElementById('redo'),
]
const op = prompt('operations\n 1 - addition \n 2 - addition + subtraction \n 3 - addition + subrtaction + multiplaction \n 4 - all four operations \n division is to 2dp')

function setq(diff) {

    stuff[0] = Math.floor(Math.random() * diff);
    stuff[1] = Math.floor(Math.random() * op);
    stuff[2] = Math.floor(Math.random() * diff);
    q[0].innerHTML = stuff[0]
    q[1].innerHTML = operators[stuff[1]]
    q[2].innerHTML = stuff[2]
    if (stuff[1] == 0) {
        stuff[3] = stuff[0] + stuff[2]
    } else if (stuff[1] == 1) {
        stuff[3] = stuff[0] - stuff[2]
    } else if (stuff[1] == 2) {
        stuff[3] = stuff[0] * stuff[2]
    } else {
        stuff[3] = Math.round((stuff[0] / stuff[2]) * 100) / 100
    }
    console.log(stuff[3])
}
let titles = [document.getElementById('correct'), document.getElementById('wrong'), document.getElementById('total'), document.getElementById('accuracy')]

setq(maxnum)

function b() {
    num.style.border = '1px solid black'
    num.style.borderRadius = '0px'
}
key[13].onclick = function() {
    if (num.value == stuff[3]) {
        num.value = ''
        setq(maxnum)
        stuff[4] += 1
        stuff[6] += 1
        num.style.border = '5px solid green'
        num.style.borderRadius = '10px'
        window.setTimeout(b, 400);
    } else {

        stuff[5] += 1
        stuff[6] += 1
        num.style.border = '5px solid red'
        num.style.borderRadius = '10px'
        window.setTimeout(b, 400);
    }
    titles[0].innerHTML = stuff[4]
    titles[1].innerHTML = stuff[5]
    titles[2].innerHTML = stuff[6]
    titles[3].innerHTML = Math.floor(100 * (stuff[4] / stuff[6])) / 100
}
key[0].onclick = function() {
    num.value = Number(String(num.value) + '0')
}
key[1].onclick = function() {
    num.value = Number(String(num.value) + '1')
}
key[2].onclick = function() {
    num.value = Number(String(num.value) + '2')
}
key[3].onclick = function() {
    num.value = Number(String(num.value) + '3')
}
key[4].onclick = function() {
    num.value = Number(String(num.value) + '4')
}
key[5].onclick = function() {
    num.value = Number(String(num.value) + '5')
}
key[6].onclick = function() {
    num.value = Number(String(num.value) + '6')
}
key[7].onclick = function() {
    num.value = Number(String(num.value) + '7')
}
key[8].onclick = function() {
    num.value = Number(String(num.value) + '8')
}
key[9].onclick = function() {
    num.value = Number(String(num.value) + '9')
}
key[11].onclick = function() {
    if (num.value == '') {
        num.value = '-'
    } else {
        num.value = String(Number(num.value) * -1)
    }
}
key[12].onclick = function() {
    num.value = String(num.value).substring(0, String(num.value).length - 1)
}
key[14].onclick = function() {
    stuff[5] += 1
    stuff[6] += 1

    num.value = ''
    setq(maxnum)
}
key[10].onclick = function() {
    if (num.value == '') {
        num.value == '0.'
    }
    num.value = String(num.value) + '.'
}