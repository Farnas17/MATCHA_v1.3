# MATCHA

Local development:

Backend:

```bash
cd backend
python3 -m pip install -r requirements.txt
python3 manage.py migrate
python3 manage.py runserver 8001
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

The frontend expects the API at `http://127.0.0.1:8001/api` by default.

Database:

- Default local setup uses SQLite with `backend/db.sqlite3`.
- To use PostgreSQL instead, set `DB_ENGINE=postgres` and provide the `POSTGRES_*` variables from `backend/.env.example`.
