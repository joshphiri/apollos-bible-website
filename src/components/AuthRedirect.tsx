'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Check if this is an auth callback (has access_token or error in hash)
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.includes('access_token') || hash.includes('error=')) {
        // Redirect to confirmation page with the hash
        router.push('/auth/confirmed' + hash);
      }
    }
  }, [router]);

  return null;
}
