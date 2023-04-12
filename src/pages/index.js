import Head from 'next/head'

export default function index() {

  return (
    <div className='py-5 px-16 flex items-center h-full'>
      <Head>
        <title>Coming Soon!</title>
      </Head>
      
      <div className='max-w-2xl py-5'>
        <span className='block text-4xl font-bold font-heading pb-8'>Allow us to tell you about a fantastic project called &quot;How They See Us.&quot; </span>
          <article className='pb-8 text-lg leading-8'>
          It is a tapestry of stories woven by students from various backgrounds who share their experiences and break down stereotypes.     It is a gathering of souls that connect in a realm beyond appearances, where labels and judgements fade. They reveal their truths to the world through essays, videos, art, and expressions. Misconceptions unravel and understanding blossoms in this tapestry, nurturing empathy and compassion. 
          </article>

          <article className='pb-8 text-lg leading-8'>
            It is a journey of seeing through each other's eyes, walking in each other's shoes, and reverently embracing our differences. They create a ripple effect, inspiring others to be open-minded and inclusive. Let us join them, because we are all a part of it. We invite you to celebrate our diversity and stand against stereotypes with love and understanding, for we all are connected by it.
          </article>

          <form className="w-full max-w-sm">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" required placeholder="Email" aria-label="Sign up"/>
            <input type="checkbox" className='invisible'/>
            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm text-white px-4 py-3 rounded" type="submit">
              Get Updates
            </button>
          </div>
        </form>
      </div>
    </div>
   
  )
}
