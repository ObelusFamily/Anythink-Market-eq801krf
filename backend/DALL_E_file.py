import os

import openai

PROMPT = "an image for items that are created without one"

openai.api_key = os.getenv("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")

response = openai.Image.create(
    prompt=PROMPT,
    n=1,
    size="256x256",
)

img_url = response["data"][0]["url"]