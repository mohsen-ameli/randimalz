import { useEffect, useState } from "react"
import Card from "./components/Card"
import Button from "./components/Button"
import Modal from "./components/Modal"
import RingLoader from "react-spinners/RingLoader";
import INTIAL_NUMBER_OF_ITEMS from './itemsPerPage'

const AnimalFax = () => {
  const [randomFact, setRandomFact] = useState([{}])
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(true)

  const fetchStuff = async (i) => {
    setLoading(true)
    let data = null

    let res = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
    if (res.status === 200) {
      data = await res.json()
    } else {
      console.log("error")
    }

    setRandomFact(old => [...old, data])
    i === INTIAL_NUMBER_OF_ITEMS && setLoading(false)
  }

  useEffect(() => {
    for (let i = 1; i <= INTIAL_NUMBER_OF_ITEMS; i++) {
      fetchStuff(i)
    }
  }, [])

  let fetchWikiSearch = async (title) => {
    let title_ = title.toLowerCase().replaceAll(" ", "_")
    let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${title_}&format=json&origin=*`

    let res = await fetch(url, {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    })
    if (res.status === 200) {
      let data = await res.json()
      return data.query.search[0].title
    }
  }

  let fetchWikiContent = async (search) => {
    let url = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=&explaintext=&titles=${search}&format=json&origin=*`
    let res = await fetch(url, {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    })
    if (res.status === 200) {
      let data = await res.json()
      let description = Object.values(data.query.pages)[0].extract
      localStorage.setItem("description", description)
    }
  }

  let handleModal = async (item) => {
    setLoading(true)
    let search = await fetchWikiSearch(item.name)
    await fetchWikiContent(search)
    localStorage.setItem("item", JSON.stringify(item))
    setLoading(false)
    setShowModal(true)
  }

  return (
    <>
    {loading && <div className="spinner"><RingLoader color="rgb(29, 78, 216)" size={150} /></div>}
    <div className="cat-fax flex flex-col items-center">
      {/* each card */}
      <div className="container px-4 flex flex-wrap justify-center">
        {randomFact.map((item, key) => (
          <Card title={item.name} content={item.animal_type} img={item.image_link} click={() => handleModal(item)} key={key} />
        ))}
      </div>

      {/* modal */}
      {showModal && 
        <div style={{ width: 100 }}>
          <Modal setShowModal={setShowModal} />
        </div>
      }
      
      {/* load more */}
      <Button text="Load More" click={() => fetchStuff(INTIAL_NUMBER_OF_ITEMS)} className="my-5" />
    </div>
    </>
  );
}
 
export default AnimalFax;