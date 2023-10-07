basic.forever(function () {
    basic.showString("Hapukapsas")
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
