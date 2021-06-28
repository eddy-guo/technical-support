import dayjs from "dayjs";
import axios from "axios";

const WEBHOOK_URL =
  "https://uniprint416.webhook.office.com/webhookb2/d0c07398-dcf1-4931-9670-8a77754a24c8@48315da9-d424-49b1-9de1-ff2a6125a9dc/IncomingWebhook/378afa82fb9c423d94ffb3cf1cdb40de/8eddf709-0926-4f76-8601-5ad1813dbde6";

export default async (req, res) => {
  const { name, email, description, URLPath } = req.body;

  if (!name || !email || !description) {
    res.status(502);
  }

  const teamsMessage = {
    "@type": "MessageCard",
    "@context": "https://schema.org/extensions",
    summary: description,
    themeColor: "10BFB5",
    title: "New Support Ticket",
    sections: [
      {
        activityTitle: name,
        activitySubtitle: dayjs().format("MMMM D, YYYY (HH:mm)"),
        text: `URL Accessed: ${URLPath} \n\n Ticket Description: ${description} \n\n [Reply via Email](mailto:${email})`,
        markdown: true,
      },
    ],
    potentialAction: [{
      "@type": "HttpPOST",
      name: "Forward Ticket via Email",
      isPrimary: true,
      "target": `https://technical-support.vercel.app/api/forward`,
      // EDIT TARGET WHEN IMPLEMENTED INTO WEB APP
      body: JSON.stringify({ name, email, description, URLPath })
    }]
  };

  const response = await axios.post(WEBHOOK_URL, teamsMessage);

  if (response.status === 200) {
    res.status(200).end();
  } else {
    res.status(502).end();
  }
};
