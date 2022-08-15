let screen = document.querySelector('[data-screen]')
let pen = screen.getContext('2d')

// background
pen.fillStyle = '#128f0d'
pen.fillRect(0, 0, 600, 400)

// triangle top
pen.fillStyle = '#f9d900'
pen.beginPath()
pen.moveTo(300, 50)
pen.lineTo(50, 200)
pen.lineTo(550, 200)
pen.fill()

// triangle botton
pen.fillStyle = '#f9d900'
pen.beginPath()
pen.moveTo(300, 350)
pen.lineTo(50, 200)
pen.lineTo(550, 200)
pen.fill()

// circle 
pen.fillStyle = '#000e6c'
pen.beginPath()
pen.arc(300, 200, 100 , 0, 2 * 3.14)
pen.fill()