import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 't5uq1o7x',
  dataset: 'production',
  useCdn: true
})

export default client
