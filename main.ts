input.onButtonPressed(Button.A, function () {
    huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
    huskylens.request()
    if (huskylens.isLearned(1)) {
        basic.showIcon(IconNames.Heart)
        edubitMotors.setServoPosition(ServoChannel.S1, 90)
        if (input.temperature() >= 25) {
            edubitMotors.runMotor(MotorChannel.M2, MotorDirection.Forward, 30)
            basic.pause(1000)
            edubitMotors.runMotor(MotorChannel.M2, MotorDirection.Backward, -5)
            basic.pause(100)
            edubitMotors.brakeMotor(MotorChannel.M2)
        } else {
            edubitMotors.runMotor(MotorChannel.M2, MotorDirection.Forward, 30)
            basic.pause(1000)
            edubitMotors.brakeMotor(MotorChannel.M2)
        }
    } else {
        basic.showIcon(IconNames.No)
        music.playMelody("- - - - - - - - ", 120)
    }
})
