let radioGroup = 0
let continueScan = false
continueScan = true

radio.onReceivedNumber(function (receivedNumber) {
    continueScan = false
    basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
    basic.pause(500)
    basic.showNumber(radioGroup)
})
basic.forever(function () {
    for (let index = 0; index <= 10; index++) {
        if (!(continueScan)) {
            break;
        }
        radioGroup = index
        radio.setGroup(radioGroup)
        basic.showNumber(radioGroup)
        basic.pause(5000)
    }
})
