import pymsteams

myTeamsMessage = pymsteams.connectorcard("https://uniprint416.webhook.office.com/webhookb2/d0c07398-dcf1-4931-9670-8a77754a24c8@48315da9-d424-49b1-9de1-ff2a6125a9dc/IncomingWebhook/d30726068d404d58844eb6996d3cfafc/8eddf709-0926-4f76-8601-5ad1813dbde6")  # noqa: E501
myTeamsMessage.text("Name: Test Email: abcd@gmail.com Descrip: Test")
myTeamsMessage.send()

# Test: https://uniprint416.webhook.office.com/webhookb2/d0c07398-dcf1-4931-9670-8a77754a24c8@48315da9-d424-49b1-9de1-ff2a6125a9dc/IncomingWebhook/8f69ed0b8e5d457e827078796ea6d414/8eddf709-0926-4f76-8601-5ad1813dbde6
# Test 2: https://uniprint416.webhook.office.com/webhookb2/d0c07398-dcf1-4931-9670-8a77754a24c8@48315da9-d424-49b1-9de1-ff2a6125a9dc/IncomingWebhook/d30726068d404d58844eb6996d3cfafc/8eddf709-0926-4f76-8601-5ad1813dbde6

# https://stackoverflow.com/questions/59371631/send-automated-messages-to-microsoft-teams-using-python
