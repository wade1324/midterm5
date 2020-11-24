let c = 0
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(c)
    c = randint(0, 10)
    if (c >= 6 && c <= 9) {
        basic.showString("tie")
    }
    if (c <= 5) {
        basic.showString("lose")
    }
    if (c == 10) {
        basic.showString("win")
    }
})
basic.forever(function () {
	
})
