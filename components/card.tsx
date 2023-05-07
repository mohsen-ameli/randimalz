import { Animal } from "@/app/Animal.type"
import Image from "next/image"
import Modal from "./modal"
import { useState } from "react"

type CardProps = {
  randAnimal: Animal
}

export default function Card({ randAnimal }: CardProps) {
  const [clicked, setClicked] = useState(false)
  const toggleModal = () => setClicked(curr => !curr)

  return (
    <>
      {clicked && <Modal animal={randAnimal} toggleModal={toggleModal} />}

      <div className="card glass bg-base-100 shadow-xl">
        <figure className="group relative flex duration-150 hover:scale-125 hover:ease-in-out">
          <Image
            width={500}
            height={500}
            priority
            className="h-[200px] w-full object-cover"
            alt={randAnimal.Animal}
            src={randAnimal.images ? randAnimal.images[0] : ""}
          />
          {randAnimal.images && randAnimal.images.length > 1 && (
            <>
              <div className="absolute left-3 hidden h-10 w-10 cursor-pointer rounded-md bg-[#1e293b88] p-1 text-2xl text-white duration-100 ease-in hover:bg-slate-800 group-hover:inline">
                <i className="fa-solid fa-angle-left absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute right-3 hidden h-10 w-10 cursor-pointer rounded-md bg-[#1e293b88] p-1 text-2xl text-white duration-100 ease-in hover:bg-slate-800 group-hover:inline">
                <i className="fa-solid fa-angle-right absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </>
          )}
        </figure>
        <div className="card-body">
          <h2 className="card-title">{randAnimal.Animal}</h2>
          <p>{randAnimal.Animal}</p>
          <div className="card-actions justify-end">
            <button
              className="btn-outline btn-success btn mt-4 md:mt-0 w-full"
              onClick={toggleModal}
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
