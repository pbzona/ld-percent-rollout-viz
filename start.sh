#!/bin/sh

start_frontend_silent() {
  (cd frontend && npm run dev > /dev/null 2>&1)
}

print_frontend_details() {
  echo 'Access the frontend at http://localhost:5173'
}

start_backend() {
  (cd backend && npm start)
}

(trap 'kill 0' SIGINT; start_frontend_silent & print_frontend_details & start_backend)