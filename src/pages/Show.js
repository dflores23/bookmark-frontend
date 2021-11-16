import { useState } from 'react';

function Show() {
    const id = props.match.params.id;
    const bookmarks = props.bookmarks
    const bookmark = bookmarks.find(bookmark => bookmark.id === id)
}
const [editForm, setEditForm] = useState(bookmark)  //bookmark is the state

const handleChange = (event) => {
    setEditForm({ ...setEditForm, [event.target.name]: event.target.value });
}

const handleSubmit = (event) => {
    event.preventDefault();
    props.editBookmark(bookmark.id, editForm);
    props.history.push(`/bookmarks/${bookmark.id}`);
}

const removeBookmark = (event) => {
    event.preventDefault();
    props.removeBookmark(bookmark.id);
    props.history.push('/');


    return (
        <div>
            <h1>{bookmark.name}</h1>
            <h1>{bookmark.url}</h1>
            <button id="delete" onClick={removeBookmark}>Remove Bookmark</button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={editForm.name}
                    onChange={handleChange} />
                <input
                    type="text"
                    name="url"
                    value={editForm.url}
                    onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>

    )
}

export default Show;

