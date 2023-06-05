'use client';

import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

const EverRealSignInButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl: string = searchParams.get('callbackUrl') || '';

  return (
    <button
      className='w-full text-gray-900 border-gray-900'
      type='button'
      onClick={() => signIn('everreal', { callbackUrl })}
    >
      Continue with EverReal
    </button>
  );
};

export default EverRealSignInButton;
