const socket = io()

socket.on('message', (message) => {
    console.log(message)
})

socket.on('sendMessage', (message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const message = e.target.elements.message.value
    socket.emit('sendMessage', message)
})
