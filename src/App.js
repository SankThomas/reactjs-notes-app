import { useState, useEffect } from "react"
import Form from "./components/Form"
import Notes from "./components/Notes"

function App() {
  const [notes, setNotes] = useState("")
  const [items, setItems] = useState([])

  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <div className="p-5 lg:max-w-4xl lg:mx-auto">
          <h1 className="text-4xl font-bold text-center lg:text-6xl text-gray-700 mb-10">
            Notes App
          </h1>

          <Form
            notes={notes}
            setNotes={setNotes}
            items={items}
            setItems={setItems}
          />

          <Notes items={items} />
        </div>
      </section>
    </>
  )
}

export default App
