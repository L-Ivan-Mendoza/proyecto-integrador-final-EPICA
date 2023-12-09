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
    <div >
        {post.map((post, i) => (
          <PostCardPublic post={post} key={i} />
        ))}
      </div>
    </>
  )
}

export default HomePublic