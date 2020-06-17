let numero_aleatorio = 0
let nivel = 0
let jugadas_microbit: number[] = []
let numero_jugadas_hechas = 0
let indice = 0
let jugadas_usuario: number[] = []
input.onPinPressed(TouchPin.P0, function () {
    evaluar_jugada_de_usuario(0)
})
function crear_secuencia () {
    numero_aleatorio = randint(0, 2)
    nivel = nivel + 1
    basic.showString("N")
    basic.showNumber(nivel)
    jugadas_microbit.push(numero_aleatorio)
    for (let value of jugadas_microbit) {
        if (value == 0) {
            basic.clearScreen()
            basic.pause(200)
            basic.showIcon(IconNames.Giraffe)
            basic.pause(200)
            basic.clearScreen()
        }
        if (value == 1) {
            basic.clearScreen()
            basic.pause(200)
            basic.showIcon(IconNames.Ghost)
            basic.pause(200)
            basic.clearScreen()
        }
        if (value == 2) {
            basic.clearScreen()
            basic.pause(200)
            basic.showIcon(IconNames.House)
            basic.pause(200)
            basic.clearScreen()
        }
    }
    numero_jugadas_hechas = 0
    indice = 0
    jugadas_usuario = []
}
input.onButtonPressed(Button.A, function () {
    reiniciar_juego()
})
function reiniciar_juego () {
    indice = 0
    nivel = 0
    numero_jugadas_hechas = 0
    jugadas_microbit = []
    jugadas_usuario = []
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    crear_secuencia()
}
input.onPinPressed(TouchPin.P2, function () {
    evaluar_jugada_de_usuario(2)
})
input.onPinPressed(TouchPin.P1, function () {
    evaluar_jugada_de_usuario(1)
})
function evaluar_jugada_de_usuario (núm: number) {
    jugadas_usuario.push(núm)
    if (jugadas_usuario[indice] == jugadas_microbit[indice]) {
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        numero_jugadas_hechas += 1
        indice = indice + 1
        if (numero_jugadas_hechas == nivel) {
            crear_secuencia()
        }
    } else {
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        basic.showString("Game Over")
        control.reset()
    }
}
