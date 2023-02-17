from flask import Flask
import random

app = Flask(__name__)

jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do we tell actors to “break a leg?” Because every play has a cast.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don’t scientists trust atoms? Because they make up everything.",
    "What do you get when you cross a snowman and a shark? Frostbite.",
    "Why don’t oysters give to charity? They’re shellfish.",
    "Why don’t scientists trust atoms? Because they make up everything.",
    "I used to play piano by ear, but now I use my hands.",
    "What do you call a parade of rabbits hopping backwards? A receding hare-line.",
    "Why can’t you hear a psychiatrist using the bathroom? Because the P is silent.",
]

@app.route('/')
def index():
    return random.choice(jokes)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
