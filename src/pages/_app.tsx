import Nav from '@/components/Nav';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

import { Poppins, Barlow, DM_Sans, Space_Grotesk, Open_Sans, Bebas_Neue } from 'next/font/google'
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

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

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
  pageProps: any
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  // Use the layout defined at the page level, if available
  const getLayout = Component?.getLayout ?? ((page) => page)
  
  return (
    <main className={`pt-[120px] ${poppins.variable} ${barlow.variable} ${dm.variable} ${space.variable} ${open.variable} ${bebas.variable} font-sans relative`}>
      <Nav />
      <main className="">
        {getLayout(<Component {...pageProps} />)}
      </main>
    </main>
  );
}
