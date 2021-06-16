import axios from "axios";

const WEBHOOK_URL =
  "https://uniprint416.webhook.office.com/webhookb2/d0c07398-dcf1-4931-9670-8a77754a24c8@48315da9-d424-49b1-9de1-ff2a6125a9dc/IncomingWebhook/8f69ed0b8e5d457e827078796ea6d414/8eddf709-0926-4f76-8601-5ad1813dbde6";

export default async (req, res) => {
  const { name, email, description } = req.body;

  if (!name || !email || !description) {
    res.status(502);
  }

  const teamsMessage = {
    "@type": "MessageCard",
    "@context": "https://schema.org/extensions",
    summary: description,
    themeColor: "",
    title: "New Support Ticket",
    sections: [
      {
        activityTitle: name,
        text: description,
      },
    ],
    potentialAction: [
      {
        "@type": "OpenUri",
        name: "Respond via Email",
        targets: [
          {
            os: "default",
            uri: `mailto:${email}`,
          },
        ],
      },
    ],
  };

  const response = await axios.post(WEBHOOK_URL, teamsMessage);

  if (response.status === 200) {
    res.status(200).end();
  } else {
    res.status(502).end();
  }
};