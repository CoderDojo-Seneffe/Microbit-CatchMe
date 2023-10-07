radio.onReceivedNumber(function (receivedNumber) {
    led.plotBarGraph(
    Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -28, 0, 100),
    100
    )
})
input.onButtonPressed(Button.A, function () {
    setRadioGroup(globalRradioGroup - 1)
})
function setRadioGroup (radioGroup: number) {
    globalRradioGroup = radioGroup
    radio.setGroup(radioGroup)
    basic.showNumber(radioGroup)
}
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(globalRradioGroup)
})
input.onButtonPressed(Button.B, function () {
    setRadioGroup(globalRradioGroup + 1)
})
let globalRradioGroup = 0
globalRradioGroup = 1
setRadioGroup(1)
