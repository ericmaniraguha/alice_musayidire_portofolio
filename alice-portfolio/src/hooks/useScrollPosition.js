import { useState, useEffect, useCallback } from 'react';

/**
 * Track scroll position and determine the currently active section.
 * @param {string[]} sectionIds - Array of section element IDs
 * @param {number} offset - Pixel offset from top to trigger active state
 */
export function useScrollPosition(sectionIds = [], offset = 120) {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrollY(y);
    setIsScrolled(y > 50);

    // Determine which section is currently in view
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    }
  }, [sectionIds, offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { scrollY, activeSection, isScrolled };
}
