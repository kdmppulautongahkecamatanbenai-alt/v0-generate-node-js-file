import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  threshold = 0.1 
}) {
  const [ref, isVisible] = useScrollAnimation({ threshold });

  const delayClass = delay > 0 ? `delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`scroll-animate ${isVisible ? 'visible' : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;
