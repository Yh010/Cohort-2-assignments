import React, { useState, useCallback ,useRef, useEffect} from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
   const renderCount = useRef(0);

  const handleReRender = useCallback(() => {
    renderCount.current += 1;
    forceRender(Math.random());
  }, []);

  const [, forceRender] = useState(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      <p>This component has rendered {renderCount.current} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
};