import Nav from '@/components/Nav';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

import { Poppins, Barlow, DM_Sans, Space_Grotesk, Open_Sans, Bebas_Neue } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const dm = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ["300", "400", "500", "600", "700"]
})

const open = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ["300", "400", "500", "600", "700", "800"]
})

const bebas = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  weight: ["400"]
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} ${barlow.variable} ${dm.variable} ${space.variable} ${open.variable} ${bebas.variable} font-sans relative`}>
      <Nav />
      <main className="">
        <Component {...pageProps} />
      </main>
    </main>
  );
}
