import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="container mx-auto h-full">
      <Component {...pageProps} />
    </div>
  )
}
