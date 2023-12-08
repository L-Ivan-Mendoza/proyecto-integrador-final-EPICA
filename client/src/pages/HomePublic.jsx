import { useEffect } from "react"
import NavBarPublic from "../components/NavBarPublic"
import {usePost} from "../context/PostProvider"
import PostCardPublic from "../components/PostCardPublic"

function HomePublic() {

  const { getAllPost, post } = usePost();

  useEffect( () => {
    getAllPost()
  }, [])

  if (post.length === 0)
    return (
      <>
        <NavBarPublic/>
        <h1>No existen posteos.</h1>
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