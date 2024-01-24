import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  // array of all animals in the quiz
  private allAnimalsArray: string[] = [
    'dog',
    'cat',
    'duck',
    'chimp',
    'gorilla',
    'cow',
    'horse',
    'donkey',
    'pig',
    'bee',
    'eagle',
    'pigeon',
    'seagull',
    'wolf',
    'fox',
    'lion',
    'leopard',
    'tiger',
    'cheetah',
    'giraffe',
    'elephant',
    'zebra',
    'crocodile',
    'serpent',
    'bear',
    'dolphin',
    'shark',
    'crab',
    'frog',
    'sheep',
    'chicken',
    'racoon',
    'squirrel',
    'hedgehog',
    'stork',
    'rabbit',
    'parrot',
    'puffin',
    'toucan',
    'penguin',
    'seal',
    'walrus',
    'lizard',
    'skunk',
    'owl',
    'ant',
    'goat',
    'sparrow',
    'spider',
    'panda',
    'orangutan',
    'ostrich',
    'rhino',
    'hippopotamus',
    'beaver',
    'crow',
    'koala',
    'kangaroo',
    'moose',
    'deer',
    'buffalo',
    'bat',
    'ladybug',
    'grasshopper',
    'butterfly',
    'boar',
    'turtle',
    'anteater',
    'antelope',
    'snail',
    'seahorse',
    'meerkat',
    'camel',
    'flamingo',
    'chameleon',
    'pelican',
    'peacock',
    'goose',
    'swan',
    'hyena',
    'octopus',
    'jellyfish',
    'starfish',
    'worm',
  ];

  constructor() {}
  // generate array of questions (array length = questionsNum)
  generateQuestionsArray(questionsNum: number): any[] {
    const questionsArray: any[] = [];
    let currentId = 1;

    while (questionsArray.length < questionsNum) {
      const randomCorrectAnswerIndex = Math.floor(
        Math.random() * this.allAnimalsArray.length
      );
      // get random answer
      const correctAnswer = this.allAnimalsArray[randomCorrectAnswerIndex];

      // check if correctAnswer is already used in questionsArray
      if (!questionsArray.some((q) => q.correctAnswer === correctAnswer)) {
        const wrongAnswers = this.generateWrongAnswers(
          this.allAnimalsArray,
          correctAnswer
        );
        // create 4 possible answers and shuffle them
        const allAnswers = this.shuffleArray([...wrongAnswers, correctAnswer]);

        const questionObject = {
          id: currentId.toString(),
          wrongAnswers,
          correctAnswer,
          allAnswers,
        };
        // question array made of question objects
        questionsArray.push(questionObject);
        currentId++;
      }
    }
    return questionsArray;
  }

  // creating 3 wrong answers in array
  private generateWrongAnswers(
    totalAnimalArray: string[],
    correctAnswer: string
  ): string[] {
    const wrongAnswers: string[] = [];

    while (wrongAnswers.length < 3) {
      const randomWrongAnswerIndex = Math.floor(
        Math.random() * totalAnimalArray.length
      );
      const wrongAnswer = totalAnimalArray[randomWrongAnswerIndex];

      // check if wrongAnswer is different from correctAnswer and not already in wrongAnswers
      if (
        wrongAnswer !== correctAnswer &&
        !wrongAnswers.includes(wrongAnswer)
      ) {
        wrongAnswers.push(wrongAnswer);
      }
    }
    return wrongAnswers;
  }

  private shuffleArray(array: any[]): any[] {
    // shuffling elements in array
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
