basic.forever(function () {
    if (input.acceleration(Dimension.X) >= -50 && input.acceleration(Dimension.X) <= 50) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    }
    if (input.acceleration(Dimension.X) > 50 && input.acceleration(Dimension.X) <= 400) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # # #
            . . . # .
            . . . . #
            `)
    }
    if (input.acceleration(Dimension.X) > 400 && input.acceleration(Dimension.X) <= 1023) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (input.acceleration(Dimension.X) < -50 && input.acceleration(Dimension.X) >= -400) {
        basic.showLeds(`
            # . . . .
            . # . . .
            # # # . .
            . # . . .
            # . . . .
            `)
    }
    if (input.acceleration(Dimension.X) < -400 && input.acceleration(Dimension.X) >= -1023) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
