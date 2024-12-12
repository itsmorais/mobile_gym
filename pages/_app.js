import '../styles/globals.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SessionProvider } from 'next-auth/react'
export default function App({ Component, pageProps:{session,...pageProps} }) {
  return (
  <SessionProvider session={session}>
  <Component {...pageProps} />
  <ToastContainer/>
  </SessionProvider>
  )
}
