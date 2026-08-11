# 🎮 Play2Learn

Play2Learn is an interactive educational gaming web application built with **React**. The project combines learning with simple, engaging games that help users practice mathematics, vocabulary, and problem-solving skills.

The application currently includes **Math Facts** and **Anagram Hunt**, with additional educational games planned for future development.

---

## 🎥 Demo

The application provides a simple game-selection screen where users can choose an educational game and start playing.

### Games Included

- 🔢 **Math Facts** — Practice addition, subtraction, multiplication, and division.
- 🧩 **Anagram Hunt** — Find as many anagrams as possible before time runs out.
- 🧠 **Memory Game** — Coming soon.

---

## ✨ Features

### 🔢 Math Facts

- Choose between:
  - Addition
  - Subtraction
  - Multiplication
  - Division
- Select the maximum number used in questions
- Randomly generated math problems
- 60-second countdown timer
- Live score tracking
- Number keypad and keyboard support
- Correct and incorrect answer sound effects
- Play again using the same settings
- Return to settings to change difficulty

### 🧩 Anagram Hunt

- Select a word length
- Random anagram groups
- Random starting word from each group
- 60-second countdown timer
- Live score tracking
- Displays the number of remaining anagrams
- Prevents duplicate answers
- Prevents the displayed word from being submitted as an answer
- Correct and incorrect answer feedback
- Sound effects
- Automatically loads another word group after all anagrams are found
- Game-over screen with final score

---

## 🛠️ Technologies Used

- **React**
- **JavaScript**
- **React Router**
- **Vite**
- **Bootstrap**
- **HTML5**
- **CSS3**
- **Web Audio API**

---

## 📦 Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project:

```bash
cd play2learn
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

---

## 🚀 Usage

Start the application and select a game from the Play2Learn home screen.

### Math Facts

1. Select a mathematical operation.
2. Choose the maximum number.
3. Click **Play!**
4. Solve as many equations as possible within 60 seconds.
5. View your final score when the timer reaches zero.

### Anagram Hunt

1. Select a word length.
2. Click **Play!**
3. A random word will be displayed.
4. Enter valid anagrams of that word.
5. Each correct answer increases your score.
6. Find all possible anagrams or continue until the 60-second timer expires.

---

## 📁 Project Structure

```text
src/
├── assets/
│   ├── sounds/
│   └── images/
│
├── components/
│   ├── MathFacts/
│   │   ├── Math-main.jsx
│   │   ├── MathGame.jsx
│   │   ├── Equation.jsx
│   │   ├── Keyboard.jsx
│   │   ├── Score.jsx
│   │   └── Timer.jsx
│   │
│   ├── Anagram/
│   │   ├── Anagram-main.jsx
│   │   ├── AnagramGame.jsx
│   │   ├── AnagramWordSetup.jsx
│   │   ├── AngInput.jsx
│   │   ├── AngScore.jsx
│   │   └── AngTimer.jsx
│   │
│   ├── GameCard.jsx
│   └── Main.jsx
│
├── containers/
│   └── App.jsx
│
├── data/
├── helpers/
└── main.jsx
```

---

## 🧩 React Concepts Demonstrated

This project demonstrates several important React concepts:

- Functional components
- React Hooks
  - `useState`
  - `useEffect`
- Props
- State management
- Controlled form inputs
- Conditional rendering
- Event handling
- Component composition
- React Router navigation
- Dynamic rendering with `.map()`
- Array methods such as `.filter()`, `.map()`, and `.includes()`
- Timers and cleanup with `useEffect`
- Audio feedback
- Reusable components

---

## 🤔 Why This Project?

Learning React becomes more effective when concepts are applied to a real application rather than isolated examples.

Play2Learn focuses on:

- Building reusable React components
- Managing state between components
- Creating interactive user experiences
- Working with timers and user input
- Implementing game logic
- Using React Router for multiple game screens
- Providing immediate visual and audio feedback
- Building educational games that make learning more engaging

---

## 🔮 Future Improvements

Future versions of Play2Learn may include:

- 🧠 Memory Game
- Additional educational games
- Difficulty levels
- High-score tracking
- Player profiles
- Improved accessibility
- Additional sound effects and animations
- Expanded mobile support
- More game customization options

---

## 🤝 Contributing

Contributions are welcome!

Feel free to open an issue or submit a pull request for:

- New educational games
- UI/UX improvements
- Accessibility improvements
- Performance improvements
- Bug fixes
- New game features

---

## 📄 License

MIT License
