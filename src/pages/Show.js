import { useState } from 'react';
import {useParams, useNavigate} from "react-router-dom"

function Show(props) {
    
    const { id } = useParams()
    const navigate = useNavigate()
    console.log(id)
    const bookmarks = props.bookmarks
    console.log(bookmarks)
    const bookmark = bookmarks.find(bookmark => bookmark._id === id)
    console.log(bookmark)

    const [editForm, setEditForm] = useState(bookmark)  //bookmark is the state

    const handleChange = (event) => {
        setEditForm({ ...setEditForm, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateBookmark(editForm, bookmark._id);
        navigate(`/`);
    }

    const removeBookmark = (event) => {
        event.preventDefault();
        props.deleteBookmark(bookmark._id);
        navigate('/');
    }


        return (
            <div>
            <h1>{bookmark.title}</h1>
            <button className="remove" id="delete" onClick={removeBookmark}>Remove Bookmark</button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title" 
                    value={editForm.title}
                    onChange={handleChange} />
                <input
                    type="text"
                    name="url"
                    value={editForm.url}
                    onChange={handleChange} />
                <input className="remove" type="submit" value="Submit" />
            </form>
            </div>

        )
    }

export default Show;

