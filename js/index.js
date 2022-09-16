const q = [document.getElementById('part1'), document.getElementById('part2'), document.getElementById('part3')]
    // num 1 , operator , num 2 , ans , correct ,wrong, total
let stuff = [0, 0, 0, 0, 0, 0, 0]
const operators = ['+', '-']
const num = document.getElementById('in')
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


function setq() {

    stuff[0] = Math.floor(Math.random() * 100);
    stuff[1] = Math.floor(Math.random() * 2);
    stuff[2] = Math.floor(Math.random() * 100);
    q[0].innerHTML = stuff[0]
    q[1].innerHTML = operators[stuff[1]]
    q[2].innerHTML = stuff[2]
    if (stuff[1] == 0) {
        stuff[3] = stuff[0] + stuff[2]
    } else {
        stuff[3] = stuff[0] - stuff[2]
    }
    console.log(stuff[3])
}
let titles = [document.getElementById('correct'), document.getElementById('wrong'), document.getElementById('total'), document.getElementById('accuracy')]

setq()
key[13].onclick = function() {
    if (num.value == stuff[3]) {
        num.value = ''
        setq()
        stuff[4] += 1
        stuff[6] += 1
    } else {

        stuff[5] += 1
        stuff[6] += 1
    }
    titles[0].innerHTML = stuff[4]
    titles[1].innerHTML = stuff[5]
    titles[2].innerHTML = stuff[6]
    titles[3].innerHTML = Math.floor(100 * (stuff[4] / stuff[6])) / 100
}
key[0].onclick = function() {
    num.value = Number(String(num.value) + 0)
}
key[1].onclick = function() {
    num.value = Number(String(num.value) + 1)
}
key[2].onclick = function() {
    num.value = Number(String(num.value) + 2)
}
key[3].onclick = function() {
    num.value = Number(String(num.value) + 3)
}
key[4].onclick = function() {
    num.value = Number(String(num.value) + 4)
}
key[5].onclick = function() {
    num.value = Number(String(num.value) + 5)
}
key[6].onclick = function() {
    num.value = Number(String(num.value) + 6)
}
key[7].onclick = function() {
    num.value = Number(String(num.value) + 7)
}
key[8].onclick = function() {
    num.value = Number(String(num.value) + 8)
}
key[9].onclick = function() {
    num.value = Number(String(num.value) + 9)
}
key[11].onclick = function() {
    num.value *= -1
    if (num.value == '') {
        num.value = '-'
    }
}
key[12].onclick = function() {
    num.value = Number(String(num.value).substring(0, String(num.value).length - 1))
}
key[14].onclick = function() {
    num.value = ''
    setq()
}