const button = document.getElementById('button');
const toasts = document.getElementById('toasts');
const messages = [
    'Learn Batch Scripting',
    'Learn Python',
    'Learn JavaScript',
    'Learn Java',
    'Learn R and Tensorflow',
    'Learn MS365',
    'Learn Assembley',
    'Learn Kotlin',
    'Learn Django',
    'Learn React ',
    'Learn TypeScript'
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessage()
    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 8000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}