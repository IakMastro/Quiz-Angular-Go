package lib

import (
	"gopkg.in/zabawaba99/firego.v1"
)

func ConnectToFirebase() *firego.Firebase {
	fb := firego.New("https://quiz-f197d-default-rtdb.europe-west1.firebasedatabase.app/", nil)
	return fb
}