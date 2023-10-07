input.onButtonPressed(Button.AB, function () {
    randomMode = 1
    basic.showIcon(IconNames.Surprised)
    pickRandomRadioGroup()
})
input.onButtonPressed(Button.B, function () {
    randomMode = 0
    basic.showIcon(IconNames.Happy)
})
function pickRandomRadioGroup () {
    radioGroup = randint(0, 10)
    radio.setGroup(radioGroup)
    basic.showNumber(radioGroup)
}
let radioGroup = 0
let randomMode = 0
randomMode = 0
pickRandomRadioGroup()
loops.everyInterval(60000, function () {
    if (randomMode == 1) {
        pickRandomRadioGroup()
    }
})
basic.forever(function () {
    radio.sendNumber(1)
    led.toggle(4, 4)
    basic.pause(200)
})
