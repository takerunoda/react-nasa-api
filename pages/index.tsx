import axios from 'axios'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import CreatedFor from '../Components/CreatedFor'
import DataSource from '../Components/DataSource'

interface FucntionProsps { 
  query: string
}


const Home: NextPage = () => {
      
      const [searchItems, setSearchItems] = useState<any[] | null>(null)
      const nasaUrl = process.env.NEXT_PUBLIC_NASA_URL
      const handleSearch = async ({query}: FucntionProsps) =>{
          const url = nasaUrl && `${nasaUrl}${escape(query)}`
          const response = 
          await axios({
              method: 'GET',
              url: url,
          })
          const items = await response.data.collection.items
          const sliced = items.slice(0, 3)
          sliced && setSearchItems(sliced)   
      }

  return (
    <div className="py-12">
      <main>
        <h1 className="text-2xl sm:text-3xl font-bold text-center my-5">NASA API APP ๐โจ</h1>
        <div>
          <div className="my-5">
            <h2 className="text-blue-900 text-lg sm:text-xl font-bold text-center my-1"><p>ใฏใชใใฏใใใจใ</p>
            <p>NASA APIใใๅๅพใใใใผใฟใ่กจ็คบใใใพใใ</p></h2>
          </div>
          <ul className="text-center">
            <li>
              <button className ="mt-3 font-bold bg-pink-500 hover:bg-pink-400 text-white w-auto  py-4 px-12 rounded focus:outline-none cursor-pointer text-sm xs:text-base;" onClick={() => handleSearch({query: "hubble galaxy"})}>
                ใใใใซๅฎๅฎๆ้ ้ก
              </button>
            </li>
            <li>
              <button className ="mt-3 font-bold bg-indigo-500 hover:bg-indigo-400 text-white w-auto  py-4 px-12 rounded focus:outline-none cursor-pointer text-sm xs:text-base;" onClick={() => handleSearch({query: "hubble nebula"})}>
                ๆ้ฒ
              </button>
            </li>
            <li>
              <button className ="mt-3 font-bold bg-green-500 hover:bg-green-400 text-white w-auto  py-4 px-12 rounded focus:outline-none cursor-pointer text-sm xs:text-base;" onClick={() => handleSearch({query: "falcon 9 launch"})}>
                ในใใผในX
              </button>
            </li>
          </ul>
        </div>
        <div className="mt-16 text-center">
          <ul className="block md:flex md:justify-center md:flex-wrap">
            {searchItems && searchItems.map((item, index) => {
            return (<li key={index} className="mr-0 md:mr-5 mb-5 text-center">
              <p className="w-60 mx-auto text-blue-500 font-bold text-lg sm:text-xl mb-3">{item.data[0].title}</p>
              <div>
                <Image src={item.links[0].href} alt={item.data[0].title} width="300" height="200"/>
              </div>
              </li>)
            })}
          </ul>
        </div>
        {searchItems && <DataSource />}
      </main>
      <CreatedFor />
    </div>
  )
}

export default Home
