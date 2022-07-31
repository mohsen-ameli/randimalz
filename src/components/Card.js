import { Link } from "react-router-dom"

const Card = ({ title, content, img, className }) => {
    return (
      <>
        {content && 
        <Link to="" className={className + " flex flex-col items-center bg-white rounded-lg mx-5 my-5 border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" }>          
          {img.includes("mp4") ? 
          <video className="object-cover w-full h-100 rounded-t-lg md:h-auto md:w-48 rounded" controls="" autoPlay="" name="media">
            <source src={img} type="video/mp4" />
          </video>
          : <img src={img} alt="" className="object-cover w-full h-100 rounded-t-lg md:h-auto md:w-48 rounded" />
          }
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-capitalize">{title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
          </div>
        </Link>
        }
      </>
    )
}

export default Card