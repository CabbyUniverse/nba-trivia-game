import { Question, QuestionData } from '@/types/game';

const GITHUB_API_URL = 'https://raw.githubusercontent.com/cabbyuniverse/touchosc-scripts-project/main/nba-trivia-game/nbaquestions.json';

export class QuestionLoader {
  static async loadQuestions(): Promise<Question[]> {
    try {
      const questions = require('@/data/questions.json').questions;
      return questions.map((q: Question) => ({
        ...q,
        options: q.options ? this.shuffleArray([...q.options]) : undefined
      }));
    } catch (error) {
      console.error('Failed to load questions:', error);
      return this.getFallbackQuestions();
    }
  }

  static getFallbackQuestions(): Question[] {
    const questions = [
      { q: "Who retired from the NBA to play MLB baseball from 1993-1995?", a: "Michael Jordan", options: ["Charles Barkley", "Greg Oden", "Brandon Roy", "Michael Jordan"], difficulty: 'medium' },
      { q: "Who has won the most NBA championships of all time?", a: "Bill Russell", options: ["Bill Russell", "Lebron James", "John Havlicek", "Kobe Bryant"], difficulty: 'hard' },
      { q: "Who won the 2023 NBA MVP award?", a: "Joel Embiid", options: ["Joel Embiid", "Nikola Jokic", "Giannis Antetokounmpo", "Luka Doncic"], difficulty: 'medium' },
      { q: "Which team has won the most NBA championships?", a: "Celtics", options: ["Lakers", "Celtics", "Warriors", "Bulls"], difficulty: 'easy' },
      { q: "Who scored 100 points in a single NBA game?", a: "Wilt Chamberlain", options: ["Wilt Chamberlain", "Kobe Bryant", "Michael Jordan", "LeBron James"], difficulty: 'hard' },
      { q: "What team did Michael Jordan play for most of his career?", a: "Chicago Bulls", options: ["Chicago Bulls", "Washington Wizards", "Los Angeles Lakers", "Miami Heat"], difficulty: 'easy' },
      { q: "Who is known as 'The King'?", a: "LeBron James", options: ["LeBron James", "Kevin Durant", "Stephen Curry", "Kawhi Leonard"], difficulty: 'easy' },
      { q: "Which team won the 2023 NBA Championship?", a: "Denver Nuggets", options: ["Denver Nuggets", "Miami Heat", "Boston Celtics", "Golden State Warriors"], difficulty: 'medium' },
      { q: "Who holds the record for most career points in NBA history?", a: "LeBron James", options: ["LeBron James", "Kareem Abdul-Jabbar", "Karl Malone", "Kobe Bryant"], difficulty: 'medium' },
      { q: "What does NBA stand for?", a: "National Basketball Association", options: ["National Basketball Association", "North American Basketball", "National Ball Association", "New Basketball Alliance"], difficulty: 'easy' },
      { q: "How many players are on the court for each team during play?", a: "5", options: ["5", "6", "7", "4"], difficulty: 'easy' },
      { q: "Which player is known as 'The Greek Freak'?", a: "Giannis Antetokounmpo", options: ["Giannis Antetokounmpo", "Luka Doncic", "Nikola Jokic", "Joel Embiid"], difficulty: 'hard' }
    ];
    return questions.map(q => ({
      ...q,
      options: q.options ? this.shuffleArray([...q.options]) : undefined
    }));
  }

  static shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  static shuffleQuestions(questions: Question[]): Question[] {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}
