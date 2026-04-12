import os
import random
import logging
from flask import Flask, jsonify

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")

app = Flask(__name__)

JOKES = [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do we tell actors to 'break a leg?' Because every play has a cast.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "What do you get when you cross a snowman and a shark? Frostbite.",
    "Why don't oysters give to charity? Because they're shellfish.",
    "I used to play piano by ear, but now I use my hands.",
    "What do you call a parade of rabbits hopping backwards? A receding hare-line.",
    "Why can't you hear a psychiatrist using the bathroom? Because the P is silent.",
]


@app.route("/")
def index():
    return jsonify({"joke": random.choice(JOKES)})


@app.route("/health")
def health():
    return jsonify({"status": "ok"})


if __name__ == "__main__":
    debug = os.getenv("FLASK_DEBUG", "false").lower() == "true"
    port = int(os.getenv("PORT", 5000))
    app.run(debug=debug, host="0.0.0.0", port=port)
