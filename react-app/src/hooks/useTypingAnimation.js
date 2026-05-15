import { useState, useEffect, useCallback } from 'react';

export function useTypingAnimation(texts, options = {}) {
  const {
    typeSpeed = 100,
    deleteSpeed = 60,
    pauseTime = 2500,
    loop = true
  } = options;

  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const type = useCallback(() => {
    const currentText = texts[textIndex];

    if (isDeleting) {
      setDisplayText(currentText.substring(0, charIndex - 1));
      setCharIndex(prev => prev - 1);
    } else {
      setDisplayText(currentText.substring(0, charIndex + 1));
      setCharIndex(prev => prev + 1);
    }
  }, [textIndex, charIndex, isDeleting, texts]);

  useEffect(() => {
    if (isComplete) return;

    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting && charIndex === currentText.length) {
      if (loop || textIndex < texts.length - 1) {
        timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      } else {
        setIsComplete(true);
      }
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex(prev => (prev + 1) % texts.length);
      timeout = setTimeout(() => {}, 500);
    } else {
      const speed = isDeleting ? deleteSpeed : typeSpeed;
      timeout = setTimeout(type, speed);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typeSpeed, deleteSpeed, pauseTime, loop, type, isComplete]);

  return displayText;
}

export default useTypingAnimation;
