import pytest
from app import app, JOKES


@pytest.fixture
def client():
    app.config["TESTING"] = True
    with app.test_client() as client:
        yield client


def test_index_returns_joke(client):
    response = client.get("/")
    assert response.status_code == 200
    data = response.get_json()
    assert "joke" in data
    assert isinstance(data["joke"], str)
    assert data["joke"] in JOKES


def test_health_check(client):
    response = client.get("/health")
    assert response.status_code == 200
    data = response.get_json()
    assert data == {"status": "ok"}
