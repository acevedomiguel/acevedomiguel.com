import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body className='bg-gradient-to-r from-indigo-500'>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}
