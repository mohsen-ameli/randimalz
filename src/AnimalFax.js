import { useEffect, useState } from "react"
import Card from "./components/Card"
import Button from "./components/Button"
import Modal from "./components/Modal"

const AnimalFax = () => {
  const [randomFact, setRandomFact] = useState([{}])
  const [showModal, setShowModal] = useState(false)

  const fetchStuff = async () => {
    let data = null

    let res = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
    if (res.status === 200) {
      data = await res.json()
    } else {
      console.log("error")
    }

    setRandomFact(old => [...old, data])
  }

  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      fetchStuff()
    }
  }, [])

  let fetchWiki = async (t) => {
    let title = t.toLowerCase().replaceAll(" ", "_")
    let res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=&explaintext=&titles=${title}&format=json&origin=*`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (res.status === 200) {
      let data = await res.json()
      let description = Object.values(data.query.pages)[0].extract
      localStorage.setItem("description", description)
    }
  }

  let handleModal = async (item) => {
    await fetchWiki(item.name)
    localStorage.setItem("item", JSON.stringify(item))
    setShowModal(true)
  }

  return (
    <div className="cat-fax flex flex-col items-center">
      {/* each card */}
        <div className="container px-4 flex flex-wrap justify-center">
          {randomFact.map((item, key) => (
            <Card title={item.name} content={item.animal_type} img={item.image_link} click={() => handleModal(item)} key={key} />
          ))}
        </div>

      {/* modal */}
      {showModal && <Modal setShowModal={setShowModal} />}
      
      {/* load more */}
      <Button text="Load More" click={fetchStuff} className="my-5" />
    </div>
  );
}
 
export default AnimalFax;