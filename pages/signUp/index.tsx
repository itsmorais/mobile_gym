// Example in pages/index.js
import { signIn, signOut, useSession } from 'next-auth/react';
import Router from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      Router.push("/")
    }
  }, [session])
  return (
    <div>
      {!session ? (
        <>
          <p>Not signed in</p>
          <button onClick={() => signIn('google')}>Sign in with Google</button>
        </>
      ) : (
        <>
          <p>Signed in as {session.user.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
}
