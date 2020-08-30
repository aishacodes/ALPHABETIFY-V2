let words = { a: 'Apple', b: 'Baseball', c: 'Clock', d: 'Donkey', e: 'Elephant', f: 'Father', g: 'Grandmother', h: 'Hungry', i: 'Internet', j: 'Justice', k: 'Kangaroo', l: 'London', m: 'Monkey', n: 'Norway', o: 'Overtime', p: 'Pilow', q: 'Question', r: 'Rabbit', s: 'Superman', t: 'Telephone', u: 'Underwear', v: 'Vaccinate', w: 'World-wide-web', x: 'Xylophone', y: 'Yogurt', z: 'Zebra' }


const wordsEl = document.querySelector('.words')
const letterEls = Array.from(document.querySelectorAll('span[data-key]'))

function playsound(e) {
    let key;
    if (e.type === 'keydown') {
        key = e.key.toLowerCase();
    } else if (e.type === 'click') {
        key = e.target.dataset.key
    }

    if (!key) return

    const letter = document.querySelector(`span[data-key=${key}]`)
    const audio = document.querySelector(`audio[data-key=${key}]`)
    if (!audio) return
    letter.classList.add('active')
    removeActiveClass(key)
    audio.currentTime = 0
    audio.play()

    const word = words[key]
    console.log(word)
    if (!word) return

    wordsEl.innerHTML = ''

    word.split('').forEach(l => {
        wordsEl.innerHTML += `<span>${l}</span>`
    })
}

function removeActiveClass(key, timeout = 1000) {
    setTimeout(() => {
        document.querySelector(`span[data-key=${key}]`).classList.remove('active')
    }, timeout)
}

letterEls.forEach(letter => {
    letter.addEventListener('click', playsound)
    letter.addEventListener('transitionend', (e) => {
        console.log(e)
    })
})

window.addEventListener('keydown', playsound)