'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import * as fpixel from '@/lib/fpixel';

export default function FacebookPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Avoid double-tracking the initial PageView that is already sent by the inline script tag in layout
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    fpixel.pageview();
  }, [pathname, searchParams]);

  return null;
}
