import { Router } from "express";

import Nexmo from "nexmo";

const nexmo = new Nexmo(
  {
    apiKey: process.env.NEXMO_API_KEY,
    apiSecret: process.env.NEXMO_API_SECRET
  },
  { debug: true }
);

const router = Router();


const accountSid = "ACe622707f4d7bb42d1a2b805153bb3ece";
const authToken = "82e9607d57123f953c488c13df40f82b";
const client = require("twilio")(accountSid, authToken);

router.post("/", (req, res) => {
  console.log('hello sms')
  client.messages
  .create({
    body: `Hi there, your friend is having a seizure`,
    from: "+12892051914",
    to: 12896839356
  })
  .then(message => console.log(message.sid));
  
});

export default router;