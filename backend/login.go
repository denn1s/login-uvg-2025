package main

import (
	"encoding/json"
	"net/http"
)

type LoginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func HandleLogin(w http.ResponseWriter, r *http.Request) {
	var req LoginRequest

	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		respondWithError(w, "Invalid Request", http.StatusBadRequest)
	}

	if req.Username == "" || req.Password == "" {
		respondWithError(w, "Username and password are invalid", http.StatusBadRequest)
	}

	var user User
	result := db.Raw(
		"SELECT id, username, created_at FROM users WHERE username = ? AND password_hash = MD5(?)",
		req.Username, req.Password,
	).Scan(&user)

	if result.Error != nil || result.RowsAffected == 0 {
		respondWithError(w, "Username or Password incorrect", http.StatusUnauthorized)
		return
	}

	respondWithJSON(w, ApiResponse{
		Success: true,
		Message: "Login successful",
		User:    &user,
	})
}
