import pymsteams

myTeamsMessage = pymsteams.connectorcard("https://uniprint416.webhook.office.com/webhookb2/d0c07398-dcf1-4931-9670-8a77754a24c8@48315da9-d424-49b1-9de1-ff2a6125a9dc/IncomingWebhook/8f69ed0b8e5d457e827078796ea6d414/8eddf709-0926-4f76-8601-5ad1813dbde6")  # noqa: E501
myTeamsMessage.text("Eddy Guo Test")
myTeamsMessage.send()
