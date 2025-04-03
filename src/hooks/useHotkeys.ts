
import { useEffect } from 'react';

type KeyHandler = (event: KeyboardEvent) => void;

/**
 * A hook for handling keyboard shortcuts
 */
export function useHotkeys(key: string, callback: () => void, modifier?: 'ctrl' | 'meta' | 'alt' | 'shift') {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      // Check if the pressed key matches
      if (event.key.toLowerCase() !== key.toLowerCase()) {
        return;
      }
      
      // Check modifiers if specified
      if (modifier === 'ctrl' && !event.ctrlKey) return;
      if (modifier === 'meta' && !event.metaKey) return;
      if (modifier === 'alt' && !event.altKey) return;
      if (modifier === 'shift' && !event.shiftKey) return;
      
      // Prevent default browser behavior
      event.preventDefault();
      
      // Execute the callback
      callback();
    };
    
    // Add event listener
    window.addEventListener('keydown', handler);
    
    // Cleanup
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [key, callback, modifier]);
}
