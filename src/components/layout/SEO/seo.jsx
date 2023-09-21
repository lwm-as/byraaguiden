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
  const obj = JSON.parse(parsedSchemaLanguage)
  const slugsToReplace = Object.values(obj)[1]
  function updateUrls(obj) {
    // Loop through all keys in the object
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          // If the value is another object, recursively call the function
          updateUrls(obj[key])
        } else if (typeof obj[key] === 'string') {
          // If the value is a string, replace '/category/' with '/article/'
          obj[key] = obj[key].replace('/category/', '/artikler/')
        }
      }
    }
  }
  updateUrls(obj)
  const newSchema = JSON.stringify(obj)

  const parsedCanonical =
    canonical && canonical?.includes('https://wp.xn--byrguiden-72a.no/') ? canonical?.replace('wp.', '') : canonical
  const parsedCanonical2 =
    canonical && canonical?.includes('/category/') ? canonical?.replace('/category/', '/artikler/') : canonical
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={metaDesc} />
      <meta
        name='robots'
        content={`${metaRobotsNoindex}, ${metaRobotsNofollow}, max-snippet:-1, max-image-preview:large, max-video-preview:-1`}
      />

      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
      <link
        href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
        rel='stylesheet'
      />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      <link
        href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&display=swap'
        rel='stylesheet'
      />

      {parsedSchemaLanguage && (
        <script
          type='application/ld+json'
          className='yoast-schema-graph'
          key='yoastSchema'
          dangerouslySetInnerHTML={{ __html: newSchema }}
        />
      )}

      <link rel='canonical' href={parsedCanonical2} />

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
