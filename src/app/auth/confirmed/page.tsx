'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function EmailConfirmedPage() {
  const [status, setStatus] = useState<'success' | 'error' | 'loading'>('loading');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Check if this is a successful auth callback (has access_token in hash)
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.includes('access_token')) {
        setStatus('success');
      } else if (hash.includes('error=')) {
        setStatus('error');
        // Parse error message
        const params = new URLSearchParams(hash.substring(1));
        const errorDesc = params.get('error_description');
        setErrorMessage(errorDesc?.replace(/\+/g, ' ') || 'Verification failed');
      } else {
        // Direct visit - show success anyway (they might have refreshed)
        setStatus('success');
      }
    }
  }, []);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#FDF8F0] to-white flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-[#D4A853] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF8F0] to-white flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        {/* Status Icon */}
        <div className={`w-20 h-20 ${status === 'success' ? 'bg-green-100' : 'bg-red-100'} rounded-full flex items-center justify-center mx-auto mb-6`}>
          {status === 'success' ? (
            <svg 
              className="w-10 h-10 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          ) : (
            <svg 
              className="w-10 h-10 text-red-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          )}
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Image 
            src="/apollos-logo.png" 
            alt="Apollos Bible" 
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-[#2D2D2D]">Apollos Bible</span>
        </div>

        {/* Message */}
        <h1 className="text-2xl font-bold text-[#2D2D2D] mb-2">
          {status === 'success' ? 'Email Verified! ✓' : 'Verification Failed'}
        </h1>
        <p className="text-gray-600 mb-8">
          {status === 'success' 
            ? 'Your account has been confirmed successfully. You can now sign in to the app.'
            : errorMessage || 'The verification link is invalid or has expired. Please try signing up again.'}
        </p>

        {/* Instructions */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-6">
          <h2 className="font-semibold text-[#2D2D2D] mb-3">Next Steps:</h2>
          <ol className="text-left text-gray-600 space-y-2">
            <li className="flex items-start gap-2">
              <span className="bg-[#D4A853] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
              <span>Open the <strong>Apollos Bible</strong> app on your phone</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-[#D4A853] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
              <span>Tap <strong>Sign In</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-[#D4A853] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
              <span>Enter your email and password</span>
            </li>
          </ol>
        </div>

        {/* App Store Buttons */}
        <p className="text-sm text-gray-500 mb-4">Don&apos;t have the app yet?</p>
        <div className="flex justify-center gap-3">
          <a 
            href="#" 
            className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span className="text-sm">App Store</span>
          </a>
          <a 
            href="#" 
            className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <span className="text-sm">Google Play</span>
          </a>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-8">
          Having trouble? Contact us at support@apolloslifebible.com
        </p>
      </div>
    </div>
  );
}
