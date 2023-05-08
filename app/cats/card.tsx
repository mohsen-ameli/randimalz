import Image from "next/image"
import { Fact } from "./cat.type"

export default function Card({ fact }: { fact: Fact }) {
  return (
    <div className="card lg:card-side glass bg-base-100 shadow-xl">
      <figure className="group relative flex duration-150 hover:scale-125 hover:ease-in-out">
        <Image
          width={500}
          height={500}
          className="h-[200px] min-w-full object-cover"
          alt={fact.fact[0]}
          src={fact.image}
          loading="lazy"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{fact.fact[0]}</h2>
      </div>
    </div>
  )
}
