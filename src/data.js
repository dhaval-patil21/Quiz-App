const data = [
  {
    id: 1,
    question: "In which yugas,Lord Krishna was born?",
    answers: [
      {
        text: "Satyuga",
        correct: false,
      },
      {
        text: "Tretayuga",
        correct: false,
      },
      {
        text: "Dwaparyuga",
        correct: true,
      },
      {
        text: "Kaliyuga",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "How many kauravas were there in Mahabharat?",
    answers: [
      {
        text: "200",
        correct: false,
      },
      {
        text: "100",
        correct: true,
      },
      {
        text: "150",
        correct: false,
      },
      {
        text: "50",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question:
      "Who wrote Ramayana?",
    answers: [
      {
        text: "Rishi Ved Vyasa",
        correct: false,
      },
      {
        text: "Parshurama",
        correct: false,
      },
      {
        text: "Rishi Valmiki",
        correct: true,
      },
      {
        text: "Rishi Shukracharya",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: "How many Chapters and Shlokas are there in Shrimad Bhagwad Gita?",
    answers: [
      {
        text: "18 chapters,100 shlokas",
        correct: false,
      },
      {
        text: "12 chapters,100 shlokas",
        correct: false,
      },
      {
        text: "15 chapters,700 shlokas",
        correct: false,
      },
      {
        text: "18 chapters,700 shlokas",
        correct: true,
      },
    ],
  },
  {
    id: 5,
    question: "In Mahabharat,Who was the father of karn ?",
    answers: [
      {
        text: "Surya dev",
        correct: true,
      },
      {
        text: "Indra dev",
        correct: false,
      },
      {
        text: "Vayu dev",
        correct: false,
      },
      {
        text: "Chandra dev",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "Who was the youngest warrior in Mahabharat?",
    answers: [
      {
        text: "Karn",
        correct: false,
      },
      {
        text: "Abhimanyu",
        correct: true,
      },
      {
        text: "Arjun",
        correct: false,
      },
      {
        text: "Duryodhan",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "Who is the father of Lord Krishna?",
    answers: [
      {
        text: "Surasena",
        correct: false,
      },
      {
        text: "Ugrasena",
        correct: false,
      },
      {
        text: "Parashurama",
        correct: false,
      },
      {
        text: "Vasudeva",
        correct: true,
      },
    ],
  },
  {
    id: 8,
    question: "Who gave curse to Ashwathama in Mahabharat?",
    answers: [
      {
        text: "Ajun",
        correct: false,
      },
      {
        text: "Bhishm Pitamah",
        correct: false,
      },
      {
        text: "Lord Krishna",
        correct: true,
      },
      {
        text: "Parshurama",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "Who killed Kans?",
    answers: [
      {
        text: "Lord Krishna",
        correct: true,
      },
      {
        text: "Lord Shiva",
        correct: false,
      },
      {
        text: "Lord Ram",
        correct: false,
      },
      {
        text: "Parsurama",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "Ravana was a devotee of who among the following God?",
    answers: [
      {
        text: "Lord Vishnu",
        correct: false,
      },
      {
        text: "Lord Brahma",
        correct: false,
      },
      {
        text: "Lord Shiva",
        correct: true,
      },
      {
        text: "Lord Ram",
        correct: false,
      },
    ],
  },
];

const prizeMoney = [
  { id: 1, amount: "₹ 1,000" },
  { id: 2, amount: "₹ 5,000" },
  { id: 3, amount: "₹ 10,000" },
  { id: 4, amount: "₹ 50,0000" },
  { id: 5, amount: "₹ 1,00,000" },
  { id: 6, amount: "₹ 10,00,000" },
  { id: 7, amount: "₹ 50,00,000" },
  { id: 8, amount: "₹ 1,00,00,000" },
  { id: 9, amount: "₹ 5,00,00,000" },
  { id: 10, amount: "₹ 7,00,00,000" },
].reverse();

export { prizeMoney, data };
