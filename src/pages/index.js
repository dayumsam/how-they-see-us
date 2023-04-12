import Head from 'next/head'
import { useState } from 'react'

import { db } from '@/firebase/config'
import { collection, addDoc } from 'firebase/firestore';

export default function index() {

  const [email,setEmail] = useState()
  const [honeyPot,setHoneyPot] = useState(false)

  const [isLoading,setIsLoading] = useState(false)
  const [submitted,setSubmitted] = useState(false)

  const onChange = (e) => {
    setEmail(e.target.value)
  }

  const checkHandler = () => {
    setHoneyPot(!honeyPot)
  }

  async function formSubmit(e){

    e.preventDefault();

    if(!honeyPot && !submitted){

      setIsLoading(true)

      await addDoc(collection(db, "newsletter"), 
      { 
          email: email || null,
      }).then(() => {setIsLoading(false); setSubmitted(true);}).catch((err) => {setIsLoading(false); alert("Something went wrong, try again"); setSubmitted(false);})
    }
  }

  return (
    <div className='py-5 px-8 md:px-16 flex items-center h-full'>
      <Head>  
        <title>Coming Soon!</title>
      </Head>
      
      <div className='max-w-2xl py-5'>
        <span className='block text-2xl md:text-4xl font-bold font-heading pb-8'>Allow us to tell you about a fantastic project called &quot;How They See Us.&quot; </span>
          <article className='pb-8 text-lg leading-8'>
          It is a tapestry of stories woven by students from various backgrounds who share their experiences and break down stereotypes.     It is a gathering of souls that connect in a realm beyond appearances, where labels and judgements fade. They reveal their truths to the world through essays, videos, art, and expressions. Misconceptions unravel and understanding blossoms in this tapestry, nurturing empathy and compassion. 
          </article>

          <article className='pb-8 text-lg leading-8'>
            It is a journey of seeing through each other&apos;s eyes, walking in each other&apos;s shoes, and reverently embracing our differences. They create a ripple effect, inspiring others to be open-minded and inclusive. Let us join them, because we are all a part of it. We invite you to celebrate our diversity and stand against stereotypes with love and understanding, for we all are connected by it.
          </article>

          <form className="w-full max-w-sm" onSubmit={formSubmit}>
          <div className="flex items-center border-b border-teal-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" required placeholder="Email" aria-label="Sign up" onChange={onChange}/>
            <input type="checkbox" className='invisible' checked={honeyPot} onChange={checkHandler}/>
            <button className="flex flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm text-white px-4 py-3 rounded" type="submit">
              {isLoading ? 
              <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>

              Sigining you up
              </>:
              <>
                {!submitted? "Get Updates" : "Signed Up"}
              </>}
              
            </button>

          </div>
        </form>
      </div>
    </div>
   
  )
}
