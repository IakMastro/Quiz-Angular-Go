package routes

import (
	"math/rand"
	"net/http"
	"quiz/lib"

	"github.com/gin-gonic/gin"
)

type Quiz struct {
	Questions []Question `json:"questions"`
}

type Question struct {
	Question string `json:"question"`
	Answers   []string `json:"answers"`
	Correct int16 `json:"correct"`
}

func GetQuiz(c *gin.Context) {
	fb := lib.ConnectToFirebase()

	var questions []Question
	if err := fb.Child("questions").Value(&questions); err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	rand.Shuffle(len(questions), func(i, j int) {
		questions[i], questions[j] = questions[j], questions[i]
	})


	var quiz Quiz = Quiz{
		Questions: questions[:5],
	}
	c.JSON(http.StatusOK, quiz)
}