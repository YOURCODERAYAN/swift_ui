export const ButtonInfo =[



    {
        code :`
import { useRef, useEffect, useState } from 'react';

export default function MagneticButton({
  children = 'Button',
  className = '',
  onClick,
  disabled = false,
  variant = 'dark',
  shadowIntensity = 3,
  insetIntensity = 4,
  type = 'button',
}) {
  const buttonRef = useRef(null);
  const [shadow, setShadow] = useState('');

  // Default shadow state — must be a template literal (backticks) since it
  // spans multiple lines. Single quotes can't contain raw line breaks.
  const getDefaultShadow = () => \`
    inset 0 -2px 2px var(--dark-color),
    inset 0 2px 2px var(--white-color),
    0 18px 14px -14px var(--white-color),
    -24px 40px 48px hsla(235, 32%, 4%, .6)
   \` ;

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const X = e.clientX - rect.left;
      const Y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const offsetX = X - centerX;
      const offsetY = Y - centerY;

      const shadowX = offsetX / shadowIntensity;
      const shadowY = offsetY / (shadowIntensity * 0.6);
      const insetX = offsetX / insetIntensity;
      const insetY = offsetY / (insetIntensity * 2.75);

      // Fixed: was a broken mix of single-quotes and backticks with stray
      // escaped $ signs. This is one clean template literal.
      const newShadow = \`
        inset \${-insetX}px \${-insetY}px 2px var(--dark-color),
        inset \${insetX}px \${insetY}px 2px var(--white-color),
        \${shadowX}px \${shadowY}px 14px -14px var(--white-color),
        \${shadowX * 3}px \${shadowY * 3}px 48px hsla(235, 32%, 4%, .6)
      \`;
      setShadow(newShadow);
    };

    const handleMouseLeave = () => {
      setShadow(getDefaultShadow());
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [shadowIntensity, insetIntensity]);

  useEffect(() => {
    setShadow(getDefaultShadow());
  }, []);

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      disabled={disabled}
      // Fixed: same broken quote-mixing issue as above, now one clean
      // template literal.
      className={\`button \${variant === 'light' ? 'button--light' : 'button--dark'} \${className}\`}
      style={{ boxShadow: shadow }}
    >
      {children}
    </button>
  );
}    
        `
    }
]






export const Buttoncss = [

    {
        css:`
        
:root {
  --gradient-color: linear-gradient(180deg, hsl(235, 4%, 75%) 0%, hsl(235, 4%, 50%) 100%);
  --dark-color: hsl(235, 4%, 42%);
  --white-color: hsl(235, 16%, 95%);
  --body-color: hsl(235, 4%, 60%);
}

.button {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  background: var(--gradient-color);
  color: var(--white-color);
  padding: 1rem 2rem;
  border-radius: 4rem;
  font-weight: 400;
  border: none;
  cursor: pointer;
  box-shadow: inset 0 -2px 2px var(--dark-color),
              inset 0 2px 2px var(--white-color),
              0 18px 14px -14px var(--white-color),
              -24px 40px 48px hsla(235, 32%, 4%, .6);

  transition: box-shadow .2s linear;
}

.button--light {
  /* placeholder for the light variant — currently identical to dark,
     define an alternate palette here if you want true light/dark themes */
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
        `
    }


]





