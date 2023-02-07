import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700">
  <div className="container-fluid w-full flex flex-wrap items-center justify-between">
    <div className="container-fluid">
      <a className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1" href="/">
        <Image src="/logo2.png" alt="" width='64' height='64' loading="lazy" />
        <span className="text-xl font-bold pl-3">How They See Us</span>
      </a>
    </div>

    <div>
        <a href="#" className="text-lg pl-8 font-bold pl-3">About</a>
        <a href="#" className="text-lg pl-8 font-bold pl-3">Contact</a>
    </div>
  </div>
</nav>
  )
}
