require('dotenv').config();

const express = require('express');
const path = require('path');

const host     = process.env.MQTT_SERVER;
const user     = process.env.MQTT_USER;
const password = process.env.MQTT_PASSWORD;
const port     = process.env.MQTT_PORT;
const topic    = process.env.MQTT_TOPIC;

const PORT = process.env.PORT || 5000;

const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://' + user + ':' + password + '@' + host + ':' + port);

express()
  .use(express.static(path.join(__dirname, 'hivemq-mqtt-web-client')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

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
