import { useEffect, useRef, useState } from "react"
import Button from "./Button"

const Modal = ({ setShowModal }) => {
  let item = JSON.parse(localStorage.getItem("item"))
  const [query, setQuery] = useState(null)
  const [rest, setRest] = useState(false)
  let btn = useRef()

  useEffect(() => {
    localStorage.getItem("description") ? setQuery(localStorage.getItem("description")) && localStorage.setItem("description", null) : setQuery(null)
  }, [])

  let showRest = () => {
    setRest(true)
    btn.current.style.display = "none"
  }

  return (
    <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">
              {item.name}
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}>
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                x
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-slate-500 text-lg leading-relaxed">
              {
                String(query).length <= 800 && query !== "undefined" ?
                query :
              (
                query !== "undefined" ?
                String(query).substring(0, 800) :
                "No information is available!"
              )}
              {String(query).length >= 800 && query !== "undefined" && <button className="font-extrabold px-1 mx-1" onClick={showRest} ref={btn}> ...</button> }
              {rest ? String(query).substring(800) : null}
            </p>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <Button text="Close" click={() => setShowModal(false)} />
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
 
export default Modal;