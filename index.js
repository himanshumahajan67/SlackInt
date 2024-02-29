
const express = require('express')
const app = express()
const port = 3000;

const { App } = require('@slack/bolt');
const { FileInstallationStore } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const slack = new App({
    token: "xoxb-6530487497153-6592203035427-nren3yxwrgzzWSPaY7Vbk3Yn",
    signingSecret: "75af0bf4b2e9b2057ecf87f605fc7a92",
    // clientSecret: "09a2e14f4687871533c66a0725ec155c",
    socketMode: true, // add this
    appToken: "xapp-1-A06J3054W72-6591657890598-2b630a98e7bbf5ec9ef779f0f6dbeb9c1e5e100e6923d32f7e52853719d635d4", // add this
    // clientId: 6530487497153.6615005166240,
    // scopes: ['channels:history', 'chat:write', 'commands'],
    // stateSecret: 'my-state-secret',
    installationStore: new FileInstallationStore(),
    // port: process.env.PORT || 3000  
});

slack.event('app_home_opened', async ({ event, context }) => {
    try {
      // Call the method to update the app's home with a message
      await app.client.views.publish({
        token: context.botToken,
        user_id: event.user,
        view: {
          type: 'home',
          blocks: [
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: 'Welcome to your app home! from node',
              },
            },
          ],
        },
      });
    } catch (error) {
      console.error('Error updating app home:', error);
    }
  });
  
(async () => {
    // Start your app
    await slack.start(process.env.PORT || 3000);
  
    console.log('⚡️ Bolt app is running!');
    console.log('is it working?');
})();

// For parsing application/json
app.use(express.json());
 
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/slack', (req, res) => {
    console.log('mast hai bhjai');
    console.log(req.body);
    res.send(req.body.challenge)
});

app.get('/slack', (req, res) => {
    console.log('mast hai behen');
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})