import Link from "next/link"

export default function page() {
  return (
    <div className="text-center w-full gap-y-6 flex flex-col">
      <p>
        Thanks to the{" "}
        <Link
          className="text-cyan-500 hover:text-cyan-800 ease-in-out duration-75"
          href="https://www.mediawiki.org/wiki/API:Main_page"
        >
          Wikipedia API
        </Link>
      </p>
      <p>
        Thanks to{" "}
        <Link
          className="text-cyan-500 hover:text-cyan-800 ease-in-out duration-75"
          href="https://meowfacts.herokuapp.com/"
        >
          cat facts
        </Link>
      </p>
      <p>
        Thanks to{" "}
        <Link
          className="text-cyan-500 hover:text-cyan-800 ease-in-out duration-75"
          href="https://api.thecatapi.com/v1/images/search"
        >
          cat images
        </Link>
      </p>
      <p>
        Thanks to{" "}
        <Link
          className="text-cyan-500 hover:text-cyan-800 ease-in-out duration-75"
          href="https://dogapi.dog/api/v2/facts?limit=1"
        >
          dog facts
        </Link>
      </p>
      <p>
        Thanks to{" "}
        <Link
          className="text-cyan-500 hover:text-cyan-800 ease-in-out duration-75"
          href="https://random.dog/woof.json"
        >
          dog images
        </Link>
      </p>
    </div>
  )
}
