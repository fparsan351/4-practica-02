basic.forever(function () {
    basic.showString("" + (0 + input.lightLevel()))
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
})
