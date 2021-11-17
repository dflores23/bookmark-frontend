import { Link, useNavigate } from "react-router-dom"
import Form from "../components/Form"


function Index(props) {
    const navigate = useNavigate()
    

    const removeBookmark = (e) => {
        props.deleteBookmark(e.target.id)
        navigate("/")
    }

    

    const loaded = () => (
        props.bookmarks.map((bookmark) => {
            const { _id, title, url } = bookmark
            return (
                <div key={_id} className="bookmark">
                    <a href={url}> <p>{title}</p></a>
                    <Link to={`/${_id}`}> <button className="update-btn">Update Bookmark</button></Link>
                    <button className="delete" id={_id} onClick={(e)=>removeBookmark(e)}>x</button>

                </div>
            )
        }
        ))
    
    const loading = () => {
        return <h1>Loading...</h1>;
    }   


    return (
        <>
            <Form {...props}/>
            {props.bookmarks ? loaded() : loading()}
            
            
        </>

    )
    
}


export default Index