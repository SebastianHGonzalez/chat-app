import { initializeApollo } from '../lib/apollo'
import ChatList from '../components/ChatList'

export default function Index() {

  return (
    <div>
      <ChatList />
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
