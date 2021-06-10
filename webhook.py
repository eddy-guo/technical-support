import requests
import json

webhook_url = 'https://webhook.site/f55820b3-6822-44fa-8a2d-c6702b5ccc64'

data = {
    'name': 'Eddy Guo',
    'email': 'eddyyanruguo@gmail.com'
}

req = requests.post(webhook_url, data=json.dumps(data), headers={'Content-type': 'application/json'})