import {useEffect, useState} from "react"
import { Route, Routes } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

function Main(props) {
    const [bookmarks, setBookmarks] = useState(null);

    const URL = "https://ringo-bookmark.herokuapp.com/bookmark/";

    const getBookmarks = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setBookmarks(data)
    }

    const createBookmark = async (bookmark) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookmark),
        })
    }

    const deleteBookmark = async (id) => {
        await fetch(URL + id, {
            method: "delete"
        })
    }

    const updateBookmark = async (bookmark, id) => {
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookmark)
        })

    }

    useEffect(() => getBookmarks(), [])
    return (
        <main>
            <Routes>
                <Route path="/" element={<Index bookmarks={bookmarks} createBookmarks={createBookmark} deleteBookmark={deleteBookmark}/>}/>
                <Route path="/:id"
                    element={
                        <Show
                            bookmarks={bookmarks}
                            updateBookmark={updateBookmark}
                            deleteBookmark={deleteBookmark}
                     />}
                        />
            </Routes>
        </main>
    )

}


export default Main