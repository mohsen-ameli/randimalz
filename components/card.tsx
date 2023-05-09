import Image from "next/image"
import { Fact } from "@/types/Fact.type"

export default function Card({ fact }: { fact: Fact }) {
  return (
    <div className="card lg:card-side glass bg-base-100 shadow-xl">
      <figure className="group relative flex duration-150 hover:scale-125 hover:ease-in-out">
        {fact.image.includes("mp4") ? (
          <video
            className="object-cover w-full max-h-full rounded-l-lg"
            controls={false}
            autoPlay={true}
          >
            <source src={fact.image} type="video/mp4" />
          </video>
        ) : (
          <Image
            width={500}
            height={500}
            className="h-[200px] min-w-full w-[300px] object-cover"
            alt=""
            src={fact.image}
            loading="lazy"
          />
        )}
      </figure>
      <div className="card-body text-lg">
        <h1>{fact.fact}</h1>
      </div>
    </div>
  )
}
