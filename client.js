let globalRradioGroup = 0
globalRradioGroup = 5
setRadioGroup(5)

radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.SmallSquare)
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
