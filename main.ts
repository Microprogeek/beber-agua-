input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(28800000)
    minutes = 0
})
let minutes = 0
minutes = 0
basic.forever(function () {
    basic.pause(60000)
    minutes += 1
    if (minutes == 120) {
        basic.showString("Beber agua")
        minutes = 0
    }
})
