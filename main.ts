input.onButtonPressed(Button.A, function () {
    if (livello_volume == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        livello_volume = 1
    } else {
        if (livello_volume == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                `)
            livello_volume = 2
        } else {
            if (livello_volume == 2) {
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                livello_volume = 0
            } else {
                if (livello_volume == 0) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        # # # # #
                        `)
                }
            }
        }
    }
})
let livello_volume = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
