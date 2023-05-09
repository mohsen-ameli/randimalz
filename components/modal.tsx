import { Animal } from "@/types/Animal.type"
import { useEffect, useRef } from "react"

export default function Modal({
  animal,
  toggleModal,
}: {
  animal: Animal
  toggleModal: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)

  function handleClose() {
    ref.current?.close()
    toggleModal()
  }

  function handleClickOutside(e: MouseEvent) {
    if (!ref.current) return
    const dialogDimensions = ref.current.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      ref.current.close()
    }
  }

  useEffect(() => {
    if (!ref.current) return
    const modal = ref.current

    modal.showModal()
    modal.addEventListener("click", handleClickOutside)

    return () => modal.removeEventListener("click", handleClickOutside)
  }, [])

  return (
    <dialog
      className="z-20 bg-slate-800 text-white max-w-[50%] max-h-[75%] rounded-xl backdrop:bg-[#00000065]"
      ref={ref}
    >
      <h3 className="text-lg font-bold">{animal.Animal}</h3>
      <p className="py-4">{animal.description}</p>
      <button className="btn btn-primary mt-2" onClick={handleClose}>
        close
      </button>
    </dialog>
  )
}
