package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type RegisterRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func HandleRegister(w http.ResponseWriter, r *http.Request) {
	var req RegisterRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		respondWithError(w, "Invalid request", http.StatusBadRequest)
		return
	}

	if req.Username == "" || req.Password == "" {
		respondWithError(w, "Username and password are required", http.StatusBadRequest)
		return
	}

	result := db.Exec(
		"INSERT INTO users (username, password_hash) VALUES (?, MD5(?))",
		req.Username, req.Password,
	)

	if result.Error != nil {
		log.Println("Error creating user:", result.Error)
		respondWithError(w, "Error creating user. Username or email may already exist.", http.StatusInternalServerError)
		return
	}

	respondWithJSON(w, ApiResponse{
		Success: true,
		Message: "Registration successful",
	})
}
