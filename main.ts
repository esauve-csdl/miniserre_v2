function Trappe_ON () {
    servos.P2.setAngle(180)
}
function Pompe_ON () {
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function Pompe_OFF () {
    pins.digitalWritePin(DigitalPin.P16, 1)
}
input.onButtonPressed(Button.A, function () {
    if (État_lumière == 0) {
        État_lumière = 1
        Lumière_ON()
    } else {
        État_lumière = 0
        Lumière_OFF()
    }
    basic.pause(2000)
})
input.onButtonPressed(Button.AB, function () {
    if (Etat_Trappe == 0) {
        Etat_Trappe = 1
        Trappe_ON()
    } else {
        Etat_Trappe = 0
        Trappe_OFF()
    }
    basic.pause(2000)
})
function Trappe_OFF () {
    servos.P2.setAngle(0)
}
input.onButtonPressed(Button.B, function () {
    if (Etat_pompe == 0) {
        Etat_pompe = 1
        Pompe_ON()
    } else {
        Etat_pompe = 0
        Pompe_OFF()
    }
    basic.pause(2000)
})
function Lumière_OFF () {
    pins.digitalWritePin(DigitalPin.P14, 1)
}
function Lumière_ON () {
    pins.digitalWritePin(DigitalPin.P14, 0)
}
let Humidité_sol = 0
let Luminosité = 0
let Humidité_Air = 0
let Température = 0
let État_lumière = 0
let Etat_pompe = 0
let Etat_Trappe = 0
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P14, 1)
pins.digitalWritePin(DigitalPin.P16, 1)
serial.redirectToUSB()
Etat_Trappe = 0
Etat_pompe = 0
État_lumière = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P15,
    true,
    false,
    true
    )
    Température = dht11_dht22.readData(dataType.temperature)
    Humidité_Air = dht11_dht22.readData(dataType.humidity)
    Luminosité = pins.analogReadPin(AnalogPin.P0)
    Humidité_sol = pins.analogReadPin(AnalogPin.P1)
    serial.writeLine("" + Température + " oC ," + Humidité_Air + " , " + Humidité_sol + " , " + Luminosité)
})
