package main

import (
	"time"
)

type User struct {
	ID           uint      `gorm:"primaryKey" json:"id"`
	Username     string    `gorm:"unique" json:"username"`
	PasswordHash string    `gorm:"column:password_hash" json:"-"`
	CreatedAt    time.Time `json:"created_at"`
}

type ApiResponse struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
	User    *User  `json:"user,omitempty"`
}
