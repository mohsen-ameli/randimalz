import { useState } from "react"

const Carousel = ({ urls }) => {
  let max = urls.length - 1
  const [slideNum, setSlideNum] = useState(0)

  let next = () => slideNum === max ? setSlideNum(0) : setSlideNum(slideNum + 1)
  let prev = () => slideNum === 0 ? setSlideNum(max) : setSlideNum(slideNum - 1)
  
  return (
    <div className="flex flex-row items-center">

      {urls.map((url, key) => (
        slideNum === key && <img src={url} alt="" className="object-cover w-full h-full rounded-l-lg md:h-auto md:w-80 fade" key={key} />
      ))}

      <i onClick={prev} className="fa-solid fa-angle-left text-2xl absolute text-white left-2 hover:bg-slate-800 hover:rounded-md p-2 cursor-pointer ease-in duration-100"></i>
      <i onClick={next} className="fa-solid fa-angle-right text-2xl absolute text-white left-64 hover:bg-slate-800 hover:rounded-md p-2 cursor-pointer ease-in duration-100"></i>
    </div>
  );
}
 
export default Carousel;