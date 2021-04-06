input.onButtonPressed(Button.A, function () {
    Steps += 5
    basic.showString("" + (Steps))
})
input.onButtonPressed(Button.B, function () {
    while (Steps > -2) {
        Steps += -1
        basic.showString("" + (Steps))
        basic.pause(60000)
    }
})
let Steps = 0
Steps = 0
basic.forever(function () {
    if (Steps == -1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 999)
    }
})
