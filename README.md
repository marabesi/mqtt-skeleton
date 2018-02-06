# mqtt-skeleton

Easy way to get start using MQTT (nodejs). The main idea of the repository is to give a scafolding of everything you might need while using MQTT and nodejs.

The project has the following dependencies so far:

* [dotenv](https://www.npmjs.com/package/dotenv)
* [mqtt](https://www.npmjs.com/package/mqtt)

## Setting up

1. Clone this repository

``
git clone https://github.com/marabesi/mqtt-skeleton/ && cd mqtt-skeleton
``

2. Install the dependencies with [NPM](http://npmjs.com)

``
npm install
``

## Configure the environment variables

Make sure to have a MQTT protocol up and running (can be a private server, or cloud like [mqttcloud.com](https://www.cloudmqtt.com/)). With that in mind you should have at least the following credentials: host, user, password and port.

The next step is create a `.env` file in the root of your cloned folder, and replace the values shown below with the given by your MQTT provider.

```env
MQTT_SERVER=localhost
MQTT_USER=myuser
MQTT_PASSWORD=mypassword
MQTT_PORT=myport
MQTT_TOPIC=/mytopic
```
