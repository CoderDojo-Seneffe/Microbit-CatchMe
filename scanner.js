radio.onReceivedNumber(function (receivedNumber) {
    continueScan = false
    basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
    led.toggle(4, 4)
    basic.pause(500)
})

input.onButtonPressed(Button.AB, function () {
    basic.showNumber(radioGroup)
})

let radioGroup = 0
let continueScan = false
continueScan = true

basic.forever(function () {
    for (let index = 0; index <= 10; index++) {
        radioGroup = index
        radio.setGroup(radioGroup)
        basic.showNumber(radioGroup)
        if (!(continueScan)) {
            break;
        }
        basic.pause(10000)
    }
})
