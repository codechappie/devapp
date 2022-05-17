import Head from 'next/head'
import React from 'react'
import Layout from '../../components/layout'
import convert from 'html-to-jsx'
import { useState, useEffect } from 'react';
import dynamic from "next/dynamic";

const CodeEditor = dynamic(import('../../components/codeeditor/index'), { ssr: false })


function HomePage() {
  const [htmlContent, setHtmlContent] = useState("");
  const [convertedContent, setConvertedContent] = useState(`function add(a, b) {\n  return a + b;\n}`);

  useEffect(() => {
    var jsx_str = convert(htmlContent);
    setConvertedContent(jsx_str);
  }, [htmlContent])



  return (
    <Layout>
      <Head>
        <title>HTML a JSX</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/themes/prism-dark.min.css" />
      </Head>

      <div class="mockup-code">
        <div className='w-full flex p-3 pl-5 pr-5'>
          <CodeEditor
            id="entry"
            language="html"
            defaultValue={htmlContent}
            onChange={setHtmlContent} />
        </div>
      </div>

      <div class="mockup-code mt-4">
        <div className='w-full flex p-3 pl-5 pr-5'>
          <CodeEditor
            id="result"
            language="jsx"
            defaultValue={convertedContent}
            onChange={setConvertedContent} />
        </div>
      </div>



    </Layout>
  )
}

export default HomePage
