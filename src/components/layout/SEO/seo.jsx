import React from 'react'
import Head from 'next/head'

const SEO = ({ seo }) => {
  const {
    title,
    metaDesc,
    metaRobotsNoindex,
    metaRobotsNofollow,
    canonical,
    schema,
    opengraphUrl,
    opengraphType,
    opengraphImage,
    opengraphAuthor,
    opengraphSiteName,
    opengraphDescription,
    opengraphModifiedTime
  } = seo

  const parsedSchemaUrl = schema?.raw && schema.raw.replace(/wp.xn--byrguiden-72a.no/g, 'wp.xn--byrguiden-72a.no')
  const parsedSchemaLanguage = parsedSchemaUrl?.replace(/("inLanguage":"en-US")/g, '"inLanguage":"nb-NO"')
  const parsedCanonical =
    canonical && canonical?.includes('https://wp.xn--byrguiden-72a.no/') ? canonical?.replace('wp.', '') : canonical
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={metaDesc} />
      <meta
        name='robots'
        content={`${metaRobotsNoindex}, ${metaRobotsNofollow}, max-snippet:-1, max-image-preview:large, max-video-preview:-1`}
      />

      {parsedSchemaLanguage && (
        <script
          type='application/ld+json'
          className='yoast-schema-graph'
          key='yoastSchema'
          dangerouslySetInnerHTML={{ __html: parsedSchemaLanguage }}
        />
      )}

      <link rel='canonical' href={parsedCanonical} />

      {!opengraphType ? null : <meta name='og:type' content={opengraphType} />}
      {!opengraphUrl ? null : <meta name='og:url' content={parsedCanonical} />}
      {!opengraphImage ? null : <meta name='og:image' content={opengraphImage.sourceUrl} />}
      {!opengraphAuthor ? null : <meta name='og:author' content={opengraphAuthor} />}
      {!opengraphSiteName ? null : <meta name='og:site_name' content={opengraphSiteName} />}
      {!opengraphDescription ? null : <meta name='og:description' content={opengraphDescription} />}
      {!opengraphModifiedTime ? null : <meta name='article:modified_time' content={opengraphModifiedTime} />}
    </Head>
  )
}

export default SEO
