'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousPathRef = useRef<string>('');

  useEffect(() => {
    const currentPath = pathname + searchParams.toString();

    // Handle hash scrolling (e.g., /#portfolio)
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.substring(1); // Remove #
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Check if we're coming back from a portfolio detail page
      const isComingFromPortfolioDetail =
        previousPathRef.current.includes('/portfolio/') && previousPathRef.current !== '/portfolio';
      const isReturningToHome = pathname === '/' && isComingFromPortfolioDetail;

      if (!isReturningToHome) {
        // Only scroll to top if this is NOT a return from portfolio detail
        // Small delay to ensure the page has rendered
        const timeoutId = setTimeout(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
          });
        }, 0);

        return () => clearTimeout(timeoutId);
      }
    }

    // Update previous path for next navigation
    previousPathRef.current = currentPath;
  }, [pathname, searchParams]);

  return null;
}
