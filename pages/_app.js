import '../styles/globals.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Geist, } from 'next/font/google'


const geistSans = Geist({
  subsets: ["latin"], // Adjust for your language
  weight: "700", // Use specific font weights if needed
  variable: "--font-geist", // Custom CSS variable for Tailwind
});


import { SessionProvider } from 'next-auth/react'
export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <main className={geistSans.variable}>
          <Component {...pageProps} />
      </main>
      <ToastContainer />
    </SessionProvider>
  )
}
