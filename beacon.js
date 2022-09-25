let radioGroup = randint(0, 10)
radio.setGroup(radioGroup)
basic.showNumber(radioGroup)

basic.forever(function () {
    radio.sendNumber(1)
    led.toggle(4, 4)
    basic.pause(200)
})
