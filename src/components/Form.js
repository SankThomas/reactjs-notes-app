import { v4 as uuidv4 } from "uuid"

export default function Form({ notes, setNotes, items, setItems }) {
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!notes) {
      alert("Please add a new note before trying to submit")
    } else {
      const newItems = {
        id: uuidv4(),
        title: notes,
      }
      setItems([newItems, ...items])
      setNotes("")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <textarea
          name="textarea"
          id="textarea"
          cols="30"
          rows="5"
          className="textarea p-5 rounded shadow"
          placeholder="Enter new note"
          required
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-blue-400 py-2 px-10 rounded shadow text-white hover:bg-blue-500 transition-all duration-150 mt-5"
        >
          Add Note
        </button>
      </form>
    </>
  )
}
