import { useState } from "react"
import { Link } from "react-router-dom"
import Form from "../components/Form"


function Index(props) {
    const loaded = () => (
        props.bookmarks.map((bookmark) => {
            const { _id, title, url } = bookmark
            return (
                <div key={_id} className="bookmark">
                    <a href={url}> <p>{title}</p></a>
                    <Link to={`/${_id}`}> <button className="update-btn">Update Bookmark</button></Link>

                </div>
            )
        }
        ))
    
    const loading = () => {
        return <h1>Loading...</h1>;
    }   


    return (
        <>
            <Form />
            {props.bookmarks ? loaded() : loading()}
            
            
        </>

    )
    
}


export default Index