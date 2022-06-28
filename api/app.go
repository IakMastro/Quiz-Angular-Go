package main

import (
	"quiz/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// Apply CORS
func main() {
	router := gin.Default()
	router.Use(cors.Default())
	router.GET("/", routes.GetQuiz)
	router.Run(":8080")
}