const games = [
  {
    id: 1,
    title: "Math Facts",
    description: "Practice addition, subtraction, multiplication and division.",
    image: "/src/assets/maths.png",
    buttonText: "Play",
    path: "/math-facts",
    locked: false,
  },

  {
    id: 2,
    title: "Anagram Game",
    description: "Unscramble words before the timer runs out.",
    image: "/src/assets/anagram.png",
    buttonText: "Play",
    path: "/anagram",
    locked: false,
  },
  {
    id: 3,
    title: "Memory Game",
    description: "Match cards and improve your memory skills.",
    image: "/src/assets/memory.png",
    buttonText: "Play",
    path: "#",
    locked: true,
  },
];

export default games;
