import React from 'react'

import { BundledLanguage } from 'shiki'

type Props={
    code:string,
    lang:BundledLanguage
}

import { codeToTokens } from 'shiki'


export default async function CodeProgram({code, lang}:Props) {
    const { tokens } = await codeToTokens(code, {
        lang: lang,
        theme: 'min-dark'
      })


  return (
    <div>
        <div>code:</div>
        <div>{code}</div>
        
        <div>
        {tokens.map((line, i) => (
              <div key={i}>
                {line.map((token, j) => (
                  <span key={j} style={{ color: token.color }}>
                    {token.content}
                  </span>
                ))}
              </div>
            ))}
        </div>
    </div>
  )
}
