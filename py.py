from flask import Flask, request
import serial
import serial.tools.list_ports

from flask_cors import CORS

import platform

def esta_en_windows():
    return platform.system().lower() == 'windows'

app = Flask(__name__)
CORS(app)  # <--- Añadir soporte para CORS aquí.

# variable global
value = None
port_name = None
baud_rate = None

@app.route("/com_value", methods=["POST"])
def post_com_value():
    global value
    global port_name
    global baud_rate

    try:
        port_name = request.form.get("port_name")
        baud_rate = request.form.get("baud_rate")
        ser = serial.Serial(port_name, int(baud_rate))
        value = ser.readline().decode('utf-8').strip()  # Decodificar a string
        ser.close()
        return {'value': value}, 200
    except serial.SerialException:
        return {'error': 'Could not open port'}, 400

@app.route("/com_ports", methods=["GET"])
def get_com_ports():
    ports = [port.name for port in serial.tools.list_ports.comports()]
    if not esta_en_windows():
        for n in range(len(ports)):
            ports[n] = "/dev/"+ports[n]
    return {'ports': ports}, 200


@app.route("/com_value", methods=["GET"])
def get_com_value():
    global value, port_name, baud_rate
    if(port_name!=None and baud_rate!=None):
        ser = serial.Serial(port_name, int(baud_rate))
        value = ser.readline().decode('utf-8').strip()  # Decodificar a string
        ser.close()
    return {'value': 'none' if value is None else value}, 200


if __name__ == "__main__":
    app.run(host="0.0.0.0",debug=False)