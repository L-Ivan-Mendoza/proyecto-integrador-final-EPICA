import { useEffect } from "react"
import NavBarPublic from "../components/NavBarPublic"
import {usePost} from "../context/PostProvider"
import PostCardPublic from "../components/PostCardPublic"
import {EmojiSmileUpsideDown} from "react-bootstrap-icons"

function HomePublic() {

  const { getAllPost, post } = usePost();

  useEffect( () => {
    getAllPost()
  }, [])

  if (post.length === 0)
    return (
      <>
        <NavBarPublic/>
        <h1 className='d-flex col align-items-center justify-content-center'
        style={{height: "100vh"}}>
        ¡Ups! No hay posteos. <EmojiSmileUpsideDown/>
        </h1>
      </>
    );

  return (
    <>
    <NavBarPublic/>
    <h1 className="text-center pt-3">Posteos</h1>
    <div className="container">
      <div className="row">
          {post.map((post, i) => (
        <div className='col-md-6' key={i}>  
            <PostCardPublic post={post} />
        </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default HomePublic