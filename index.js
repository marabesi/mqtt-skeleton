require('dotenv').config();

const host     = process.env.MQTT_SERVER;
const user     = process.env.MQTT_USER;
const password = process.env.MQTT_PASSWORD;
const port     = process.env.MQTT_PORT;
const topic    = process.env.MQTT_TOPIC;

const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://' + user + ':' + password + '@' + host + ':' + port);

client.on('connect', function () {
    console.log('Connected');

    client.subscribe(topic);

    console.log('subscribed to ' + topic);
});

client.on('message', function (topic, message) {
    console.log('received ', message.toString());
});

client.on('close', function() {
    console.log('Disconnected');
});
