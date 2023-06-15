import Head from 'next/head'
import React from 'react'

export default function DynamicHeader(props:{title:string, metaDescription?:string}) {
  return (
    <Head>
      <title>{props.title}</title>
      {props.metaDescription && <meta name='description' content={props.metaDescription}/>}
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
