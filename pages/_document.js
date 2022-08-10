import { Html, Head, Main, NextScript } from 'next/document'
import { siteMeta } from 'lib/constants'
const { siteLang } = siteMeta

function Document() {
  return (
    <Html>
      <Head lang={siteLang}/>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}

export default Document
