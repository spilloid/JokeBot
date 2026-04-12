# JokeBot

A lightweight Flask API that serves random jokes, containerized with Docker.

## Features

- `GET /` — returns a random joke as JSON
- `GET /health` — health check endpoint
- Runs in Docker with gunicorn and a non-root user
- CI via GitHub Actions (tests on every push/PR)
- CD via self-hosted runner (auto-deploys to Docker Compose)

## Quick Start

### With Docker Compose

```bash
docker compose up -d
```

Then visit [http://localhost:5000](http://localhost:5000).

### Locally

```bash
pip install -r requirements-dev.txt
python app.py
```

### Run Tests

```bash
pytest tests/ -v
```

## API

| Endpoint  | Method | Response                  |
|-----------|--------|---------------------------|
| `/`       | GET    | `{"joke": "..."}` |
| `/health` | GET    | `{"status": "ok"}`        |

**Example:**

```bash
curl http://localhost:5000/
# {"joke": "Why do programmers prefer dark mode? Because light attracts bugs."}
```

## Configuration

| Variable      | Default | Description               |
|---------------|---------|---------------------------|
| `FLASK_DEBUG` | `false` | Enable Flask debug mode   |
| `PORT`        | `5000`  | Port to listen on         |

## License

[MIT](LICENSE)
