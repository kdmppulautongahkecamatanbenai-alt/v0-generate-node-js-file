import { useTypingAnimation } from '../hooks/useTypingAnimation';

export function TypingText({ 
  texts = ['Desiccated Coconut', 'Premium Quality', 'Export Ready', 'HACCP Certified'],
  typeSpeed = 100,
  deleteSpeed = 60,
  pauseTime = 2500,
  loop = true,
  className = ''
}) {
  const displayText = useTypingAnimation(texts, {
    typeSpeed,
    deleteSpeed,
    pauseTime,
    loop
  });

  return (
    <span className={className}>
      {displayText}
      <span className="typing-cursor">|</span>
    </span>
  );
}

export default TypingText;
