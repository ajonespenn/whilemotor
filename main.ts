basic.showIcon(IconNames.Sad)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
    pins.digitalWritePin(DigitalPin.P16, 0)
})
