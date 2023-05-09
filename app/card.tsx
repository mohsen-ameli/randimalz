import { Animal } from "@/types/Animal.type"
import Image from "next/image"
import Modal from "../components/modal"
import { useState } from "react"

type CardProps = {
  randAnimal: Animal
}

export default function Card({ randAnimal }: CardProps) {
  const [clicked, setClicked] = useState(false)
  const [index, setIndex] = useState(0)
  const [img, setImg] = useState(randAnimal.images?.[index])

  function toggleModal() {
    setClicked(curr => !curr)
  }

  function next() {
    if (!randAnimal.images) return

    const newIndex = index + 1 < randAnimal.images.length ? index + 1 : 0

    setImg(randAnimal.images[newIndex])
    setIndex(newIndex)
  }

  function prev() {
    if (!randAnimal.images) return

    const newIndex = index > 0 ? index - 1 : randAnimal.images.length - 1

    setImg(randAnimal.images[newIndex])
    setIndex(newIndex)
  }

  return (
    <>
      {clicked && <Modal animal={randAnimal} toggleModal={toggleModal} />}

      <div className="card glass bg-base-100 shadow-xl">
        <figure className="group relative flex duration-150 hover:scale-125 hover:ease-in-out">
          <Image
            width={500}
            height={500}
            className="h-[200px] min-w-full object-cover"
            alt={randAnimal.Animal}
            src={img!}
            loading="lazy"
          />
          {randAnimal.images && randAnimal.images.length > 1 && (
            <>
              <div
                onClick={prev}
                className="absolute left-3 hidden h-10 w-10 cursor-pointer rounded-md bg-[#1e293b88] p-1 text-2xl text-white duration-100 ease-in hover:bg-slate-800 group-hover:inline"
              >
                <i className="fa-solid fa-angle-left absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div
                onClick={next}
                className="absolute right-3 hidden h-10 w-10 cursor-pointer rounded-md bg-[#1e293b88] p-1 text-2xl text-white duration-100 ease-in hover:bg-slate-800 group-hover:inline"
              >
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
