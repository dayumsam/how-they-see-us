import '@/styles/globals.css'
import 'tippy.js/dist/tippy.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="container mx-auto">
      <Component {...pageProps} />
    </div>
  )
}
