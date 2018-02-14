![NODE + MQTT](https://preview.ibb.co/diijQn/node_mqtt.png)

# mqtt-skeleton

Easy way to get start using MQTT (nodejs). The main idea of the repository is to give a scafolding of everything you might need while using MQTT and nodejs.

The project has the following dependencies so far:

* [dotenv](https://www.npmjs.com/package/dotenv)
* [mqtt](https://www.npmjs.com/package/mqtt)

Development dependencies:

* [nodemon](https://www.npmjs.com/package/nodemon)

## Setting up

1. Clone this repository

``
git clone https://github.com/marabesi/mqtt-skeleton/ && cd mqtt-skeleton
``

2. Install the dependencies with [NPM](http://npmjs.com)

``
npm install
``

3. Configure the environment variables

Make sure to have a MQTT protocol up and running (can be a private server, or cloud like [cloudmqtt.com](https://www.cloudmqtt.com/)). With that in mind you should have at least the following credentials: host, user, password and port.

The next step is create a `.env` file in the root of your cloned folder, and replace the values shown below with the given by your MQTT provider.

```env
MQTT_SERVER=localhost
MQTT_USER=myuser
MQTT_PASSWORD=mypassword
MQTT_PORT=myport
MQTT_TOPIC=/mytopic
```

4. Decide which environment you would like to run, development (with nodemon) or directly with node.
The following starts the application using nodejs comman, behind the scenes npm is running `node ./index.js`.

```
npm run start
```

The second option is to use nodemon, which avois killing the script and starting it again everytime you
change something in the code.

```
npm run nodemon
```
