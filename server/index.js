const express = require('express');
const cors = require('cors');
const webpush = require('web-push');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const vapidKeys = {
    "publicKey": "BD8NMN1O2C0b8HJtB4HTG0TMykxzkkg25yExB1AufHO2ELuSAz5oL9VcRuGCUPIpZW8jKnEV7ZW4ECGkGDZIhh0",
    "privateKey": "vx1Z2PgJh5Xxa_PgcVPytMA9uBbO575ecDPjU0XtVQM"
}

webpush.setVapidDetails(
    'mailto:jatsala@example.mx',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const subscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/dpLqczsorKs:APA91bGQ6XnBFRAhhTPirlDjn-avLgFClS7RIds2E6yGX73JZ4D-4O6P4y2FNzkE7SFZsT3ObKFOrIcZmACWTL_KEOEEbSdDgkg0a0gpduhn2fxyYg1E70ncxa7WeORtv_Lj9rsfvQEC',
    expirationTime: null,
    keys: {
        p256dh: 'BI90ziCrys-6a0FXLCo4tyznnD5q1BS1RLtBboun565Ab-jwqO78ugkJDbZo8z_FipFWeRCdbeUtyq3oBNRPY3o',
        auth: 'dysCaXKsmfgMP3uan8N2bw',
    },
};

app.get('/', async (req, res) => {
    const payload = JSON.stringify(
        {
            title: "Server notificación",
            message: "Esta es una notificación que nos llega desde el servidor"
        }
    );
    await webpush.sendNotification(subscription, payload);
    await res.send("Todo ok, funcionando perfectamente");
})

app.post('/custom-notification', (req, res) => {
    console.log(req.body);
    const { title, message } = req.body;
    const payload = JSON.stringify({ title, message });

    // send notification
    webpush.sendNotification(subscription, payload);
    res.send("Todo OK, custom notification enviada");

})

app.post('/subscription', (req, res) => {
    const { pushSubscription } = req.body;
    console.log(pushSubscription);
    res.sendStatus(200);
})

const port = 8000;

app.listen(port, () => console.log(`Server listening on port ${port}`))