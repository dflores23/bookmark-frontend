import React from "react"
import { useState } from "react"



function Form(props) {
  const [bookmarks, setBookmarks] = useState({
    title: "",
    url: "",
  }
  )


const handleChange = (event) => {
  const { title, value } = event.target
  setBookmarks({
    ...bookmarks,
    [title]: value
  })
}

const handleSubmit = (event) => {
  event.preventDefault()
  props.createBookmarks(bookmarks)
  setBookmarks({
    title: "",
    url: ""
  })
}

return (
  <section>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        title="title"
        value={bookmarks.title}
        onChange={handleChange}
      />
      <input
        type="text"
        title="url"
        value={bookmarks.url}
        onChange={handleChange}
      />
      <button>Add Bookmark</button>
    </form>
  
  </section>
)
}



export default Form


