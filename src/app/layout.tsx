import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Roboto } from 'next/font/google'
import { Footer, Header } from '@/components'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Zoranildo Santos',
  description: 'Site pessoal do engenheiro de software Zoranildo Santos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* <title>Zoranildo Santos</title>
        <meta name='title' content='Zoranildo Santos'/>
        <meta name='description' content='Site pessoal do engenheiro de software Zoranildo Santos' /> */}
        <Script
          id='gtm'
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.GA_TRACKING_ID}');
            `
          }}
        />
      </head>
      <body className={`${roboto.className} min-h-screen px-10 md:px-24`}>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${process.env.GA_TRACKING_ID}`}
          height="0"
          width="0"
          style={{display: 'none', visibility: 'hidden'}}>
        </iframe>
      </noscript>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
