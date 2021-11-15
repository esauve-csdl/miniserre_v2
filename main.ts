function Trappe_ON () {
    led.plot(2, 0)
    servos.P2.setAngle(180)
}
function Pompe_ON () {
    led.plot(1, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function Pompe_OFF () {
    led.unplot(1, 0)
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
    led.unplot(2, 0)
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
    led.unplot(0, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
}
function Lumière_ON () {
    led.plot(0, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
}
let Humidité_Air = 0
let Affiche_T = 0
let Luminosité = 0
let Affiche_L = 0
let Humidité_sol = 0
let Affiche_HS = 0
let Température = 0
let Affiche_HA = 0
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
let Seuil_HS = 800
let Seuil_HA = 30
let Seuil_L = 275
let Seuil_T = 25
basic.forever(function () {
    Affiche_HA = Math.map(Température, 20, 30, 0, 4)
    if (Affiche_HA > 3.5) {
        led.plot(0, 4)
        led.plot(1, 4)
        led.plot(2, 4)
        led.plot(3, 4)
        led.plot(4, 4)
    } else {
        if (Affiche_HA > 2.5) {
            led.plot(0, 4)
            led.plot(1, 4)
            led.plot(2, 4)
            led.plot(3, 4)
            led.unplot(4, 4)
        } else {
            if (Affiche_HA > 1.5) {
                led.plot(0, 4)
                led.plot(1, 4)
                led.plot(2, 4)
                led.unplot(3, 4)
                led.unplot(4, 4)
            } else {
                if (Affiche_HA > 0.5) {
                    led.plot(0, 4)
                    led.plot(1, 4)
                    led.unplot(2, 4)
                    led.unplot(3, 4)
                    led.unplot(4, 4)
                } else {
                    if (Affiche_HA <= 0.5) {
                        led.plot(0, 4)
                        led.unplot(1, 4)
                        led.unplot(2, 4)
                        led.unplot(3, 4)
                        led.unplot(4, 4)
                    } else {
                        led.unplot(0, 4)
                        led.unplot(1, 4)
                        led.unplot(2, 4)
                        led.unplot(3, 4)
                        led.unplot(4, 4)
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    Affiche_HS = Math.map(Humidité_sol, 800, 400, 0, 4)
    if (Affiche_HS > 3.5) {
        led.plot(0, 2)
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
        led.plot(4, 2)
    } else {
        if (Affiche_HS > 2.5) {
            led.plot(0, 2)
            led.plot(1, 2)
            led.plot(2, 2)
            led.plot(3, 2)
            led.unplot(4, 2)
        } else {
            if (Affiche_HS > 1.5) {
                led.plot(0, 2)
                led.plot(1, 2)
                led.plot(2, 2)
                led.unplot(3, 2)
                led.unplot(4, 2)
            } else {
                if (Affiche_HS > 0.5) {
                    led.plot(0, 2)
                    led.plot(1, 2)
                    led.unplot(2, 2)
                    led.unplot(3, 2)
                    led.unplot(4, 2)
                } else {
                    if (Affiche_HS <= 0.5) {
                        led.plot(0, 2)
                        led.unplot(1, 2)
                        led.unplot(2, 2)
                        led.unplot(3, 2)
                        led.unplot(4, 2)
                    } else {
                        led.unplot(0, 2)
                        led.unplot(1, 2)
                        led.unplot(2, 2)
                        led.unplot(3, 2)
                        led.unplot(4, 2)
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    Affiche_L = Math.map(Luminosité, 450, 150, 0, 4)
    if (Affiche_L > 3.5) {
        led.plot(0, 1)
        led.plot(1, 1)
        led.plot(2, 1)
        led.plot(3, 1)
        led.plot(4, 1)
    } else {
        if (Affiche_L > 2.5) {
            led.plot(0, 1)
            led.plot(1, 1)
            led.plot(2, 1)
            led.plot(3, 1)
            led.unplot(4, 1)
        } else {
            if (Affiche_L > 1.5) {
                led.plot(0, 1)
                led.plot(1, 1)
                led.plot(2, 1)
                led.unplot(3, 1)
                led.unplot(4, 1)
            } else {
                if (Affiche_L > 0.5) {
                    led.plot(0, 1)
                    led.plot(1, 1)
                    led.unplot(2, 1)
                    led.unplot(3, 1)
                    led.unplot(4, 1)
                } else {
                    if (Affiche_L <= 0.5) {
                        led.plot(0, 1)
                        led.unplot(1, 1)
                        led.unplot(2, 1)
                        led.unplot(3, 1)
                        led.unplot(4, 1)
                    } else {
                        led.unplot(0, 1)
                        led.unplot(1, 1)
                        led.unplot(2, 1)
                        led.unplot(3, 1)
                        led.unplot(4, 1)
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    Affiche_T = Math.map(Température, 20, 35, 0, 4)
    if (Affiche_T > 3.5) {
        led.plot(0, 3)
        led.plot(1, 3)
        led.plot(2, 3)
        led.plot(3, 3)
        led.plot(4, 3)
    } else {
        if (Affiche_T > 2.5) {
            led.plot(0, 3)
            led.plot(1, 3)
            led.plot(2, 3)
            led.plot(3, 3)
            led.unplot(4, 3)
        } else {
            if (Affiche_T > 1.5) {
                led.plot(0, 3)
                led.plot(1, 3)
                led.plot(2, 3)
                led.unplot(3, 3)
                led.unplot(4, 3)
            } else {
                if (Affiche_T > 0.5) {
                    led.plot(0, 3)
                    led.plot(1, 3)
                    led.unplot(2, 3)
                    led.unplot(3, 3)
                    led.unplot(4, 3)
                } else {
                    if (Affiche_T <= 0.5) {
                        led.plot(0, 3)
                        led.unplot(1, 3)
                        led.unplot(2, 3)
                        led.unplot(3, 3)
                        led.unplot(4, 3)
                    } else {
                        led.unplot(0, 3)
                        led.unplot(1, 3)
                        led.unplot(2, 3)
                        led.unplot(3, 3)
                        led.unplot(4, 3)
                    }
                }
            }
        }
    }
})
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
basic.forever(function () {
    if (Luminosité < Seuil_L) {
        Lumière_ON()
        basic.pause(5000)
        Lumière_OFF()
        basic.pause(10000)
    }
})
basic.forever(function () {
    if (Humidité_sol < Humidité_sol) {
        Pompe_ON()
        basic.pause(1000)
        Pompe_OFF()
        basic.pause(5000)
    }
})
basic.forever(function () {
    if (Affiche_HA > Seuil_HA || Température > Seuil_T) {
        Trappe_ON()
        basic.pause(1000)
        Trappe_OFF()
        basic.pause(5000)
    }
})
