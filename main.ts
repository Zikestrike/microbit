enum RadioMessage {
    message1 = 49434,
    F = 24246,
    Msg2 = 42467
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.message1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.Msg2)
})
radio.onReceivedMessage(RadioMessage.Msg2, function () {
    basic.showString("BEDTIME")
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    basic.showString("STOP")
})
radio.setGroup(1)
