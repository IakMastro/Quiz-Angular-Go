import {UserData} from "../interfaces/UserData";
import {Quiz}     from "../interfaces/Quiz";

export const USER_DATA: UserData = {
  id: "dsa",
  totalScore: 25,
  maxPoints: 30
}

export const QUIZ: Quiz = {
  questions: [
    {
      question: "Which song is more catchy?",
      answers: ["Billie Jean", "Thriller", "Smooth Criminal", "Beat It"]
    },
    {
      question: "Who is the most prolific songwriter?",
      answers: ["David Bowie", "John Lennon", "Neal Morse", "Peter Gabriel"]
    },
    {
      question: "What is the name of the best drummer?",
      answers: ["Ringo Starr", "Lars Ulrich", "Phil Collins", "Mike Portnoy"]
    },
    {
      question: "What is the most sold album of all time?",
      answers: ["Dark Side of the Moon", "Back in Black", "Thriller", "Abbey Road"]
    },
    {
      question: "What is the best rock band in the world?",
      answers: ["Metallica", "Transatlantic", "AC/DC", "The Rolling Stones"]
    }
  ],
  correctAnswersIndex: [0, 0, 3, 2, 1]
}

