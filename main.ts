// Teacher counting function
radio.onReceivedNumber(function (receivedNumber) {
    if (teachermode == 1) {
        if (receivedNumber == 1) {
            disp1 += 1
        }
        if (receivedNumber == 2) {
            disp2 += 1
        }
        if (receivedNumber == 3) {
            disp3 += 1
        }
        if (receivedNumber == 4) {
            disp4 += 1
        }
        if (receivedNumber == 5) {
            disp5 += 1
        }
    }
})
// failsafe group setting
input.onButtonPressed(Button.AB, function () {
    if (studentmode != 1) {
        teachermode = 1
    }
})
// failsafe group setting
input.onGesture(Gesture.Shake, function () {
    if (teachermode != 1) {
        studentmode = 1
    }
})
let already_send = 0
let teachermode = 0
let studentmode = 0
radio.setTransmitPower(7)
radio.setGroup(4)
let disp1 = 0
let disp2 = 0
let disp3 = 0
let disp4 = 0
let disp5 = 0
let goodness = 0
studentmode = 0
teachermode = 0
// Counting, teacher view
basic.forever(function () {
    if (studentmode == 1) {
        if (already_send == 0) {
            if (input.buttonIsPressed(Button.A)) {
                goodness += 1
                basic.showNumber(goodness)
            }
            if (goodness == 5) {
                goodness = 0
            }
            if (input.buttonIsPressed(Button.B)) {
                radio.sendNumber(goodness)
                already_send = 1
            }
        } else {
            basic.showString("already sent")
        }
    }
    if (teachermode == 1) {
        if (input.buttonIsPressed(Button.B)) {
            basic.showString("(1):" + disp1 + "(2):" + disp2 + "(3):" + disp3 + "(4):" + disp4 + "(5):" + disp5)
        }
    }
})
