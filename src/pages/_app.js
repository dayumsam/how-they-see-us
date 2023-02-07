import '@/styles/globals.css'
import 'react-tooltip/dist/react-tooltip.css'

export default function App({ Component, pageProps }) {
  return (
    <div class="container mx-auto">
      <Component {...pageProps} />
    </div>
  )
}
