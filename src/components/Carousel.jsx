import { useState } from "react"

const Carousel = ({ urls }) => {
  let max = urls.length - 1
  const [slideNum, setSlideNum] = useState(0)

  let next = () => slideNum === max ? setSlideNum(0) : setSlideNum(slideNum + 1)
  let prev = () => slideNum === 0 ? setSlideNum(max) : setSlideNum(slideNum - 1)
  
  return (
    <div className="flex flex-row items-center">

        {urls.map((url, key) => (
          slideNum === key && 
            <div className="flex group">
              <img src={url} alt="" className="object-cover w-full h-full rounded-l-lg md:h-auto md:w-80" key={key} />

              {urls.length > 1 && <>
                <i onClick={prev} className="p-2 fa-solid fa-angle-left text-2xl hidden group-hover:inline absolute left-5 self-center text-white hover:bg-slate-800 hover:rounded-md cursor-pointer ease-in duration-100"></i>
                <i onClick={next} className="p-2 fa-solid fa-angle-right text-2xl hidden group-hover:inline absolute right-5 self-center text-white hover:bg-slate-800 hover:rounded-md cursor-pointer ease-in duration-100"></i>
              </>}
            </div>
        ))}
    </div>
  );
}
 
export default Carousel;