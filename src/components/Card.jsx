import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import ButtonOutline from "./ButtonOutline"
import Carousel from "./Carousel"

const Card = ({ title, content, img, click, className }) => {
  let location = useLocation()
  const [urls, setUrls] = useState(null)

  let fetchWikiSearch = async (title) => {
    let title_ = title?.toLowerCase().replaceAll(" ", "_")
    let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${title_}&format=json&origin=*`

    let res = await fetch(url, {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    })
    if (res.status === 200) {
      let data = await res.json()
      return data.query.search[0].title
    }
  }

  let fetchWikiImage = async (title) => {
    let imgUrls = []
    let url = `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&generator=images&gimlimit=1000&prop=imageinfo&iiprop=url&format=json&origin=*`
    let res = await fetch(url, {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    })
    if (res.status === 200) {
      let data = await res.json()
      Object.values(data.query.pages).map(item => {
        let imgUrl = item.imageinfo[0].url
        if (imgUrl.includes(".jpg")) {
          imgUrls.push(imgUrl)
        }
        return null
      })
    }
    return imgUrls
  }

  let handleImgHover = async () => {
    let search = await fetchWikiSearch(title)
    let imgUrls = await fetchWikiImage(search)
    setUrls(imgUrls)
  }

  useEffect(() => {
    location.pathname === "/animal" && handleImgHover()
  })

  return (
    <>
    {content && 
    <div className={className + " select-none flex cursor-default flex-col items-center bg-white rounded-lg mx-5 my-5 border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" }>          
      <button className="hover:scale-125 hover:ease-in-out duration-150">
        {/* Video Player */}
        {img.includes("mp4") && 
        <video className="object-cover w-full max-h-full rounded-l-lg" controls="" autoPlay="" name="media">
          <source src={img} type="video/mp4" />
        </video>
        }

        {/* Carousel */}
        {urls && <Carousel urls={urls} />}

        {/* One Pic */}
        {location.pathname !== "/animal" && <img src={img} alt="" className="object-cover w-full max-h-full rounded-l-lg" />}
      </button>

      <div className="flex flex-col justify-between p-4 leading-normal">
        {/* Content */}
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-capitalize">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
        
        {/* More Info */}
        {click && <ButtonOutline text="More Info" click={click} />}
      </div>
    </div>
    }
    </>
  )
}

export default Card