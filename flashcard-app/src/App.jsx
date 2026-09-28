import React, { useState, useEffect } from 'react';
import './App.css';

const myCards = [
  {
    id: 1,
    category: "Background",
    question: "About Me",
    answer: "I live in Deansboro, NY which is a tiny town with not much to do."
  },
  {
    id: 2,
    category: "Education",
    question: "High School and College",
    answer: "Graduated from Waterville Central in 2011 with a regents diploma. Graduated from MVCC in 2016 with an Associate's Degree in Graphic Design."
  },
  {
    id: 3,
    category: "Interests",
    question: "Hobbies",
    answer: "Drawing on my iPad, doing diamond paintings, and playing video games sometimes."
  },
  {
    id: 4,
    category: "Work",
    question: "Current Job",
    answer: "I currently work in retail and I love it! It's better than food service."
  },
  {
    id: 5,
    category: "Personality",
    question: "Traits",
    answer: "I would describe myself as loyal, funny, caring, and trustworthy."
  },
  {
    id: 6,
    category: "Miscellaneous",
    question: "Favorite Things",
    answer: "Seasons:Summer/Spring. Book Series:Hunger Games."
  }
  
];

export default function AboutMeFlashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = myCards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % myCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + myCards.length) % myCards.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="app-container">
      <div className="flashcard-wrapper">
        
        {/* Header & Counter */}
        <div className="card-header">
          <span className="card-title">Introduction to Dana</span>
          <span>{currentIndex + 1} / {myCards.length}</span>
        </div>

        {/* 3D Flip Card Scene */}
        <div 
          className="card-scene"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
            
            {/* Front Side */}
            <div className="card-face card-front">
              <span className="category-badge">{currentCard.category}</span>
              <p className="question-text">{currentCard.question}</p>
              <p className="hint-text">Click or press Space to reveal answer</p>
            </div>

            {/* Back Side */}
            <div className="card-face card-back">
              <span className="category-badge">Details</span>
              <p className="answer-text">{currentCard.answer}</p>
              <p className="hint-text">Click or press Space to flip back</p>
            </div>

          </div>
        </div>

        {/* Controls */}
        <div className="controls">
          <button onClick={handlePrev} className="btn btn-secondary">
            ← Previous
          </button>
          <button onClick={handleNext} className="btn btn-primary">
            Next →
          </button>
        </div>

      </div>
    </div>
  );
}