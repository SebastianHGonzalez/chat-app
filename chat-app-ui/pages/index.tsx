import { initializeApollo } from '../lib/apollo'

export default function Index() {

  return (
    <div>
      Home
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
