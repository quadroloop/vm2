import serial
ser serial.serial('com3',baudrate = 9600, timeout=1)
while 1:
	arduinoData = ser.readline();
	print(arduinoData);
	
f = open("demofile.txt", "w")
f.write("Woops! I have deleted the content!")