import NavBarProfile from '../components/NavBarProfile'
import PostCardPrivate from '../components/PostCardPrivate'
import { usePost } from '../context/PostProvider'
import { useEffect } from 'react'
import {EmojiSmileUpsideDown} from "react-bootstrap-icons"

function HomeProfile() {

  const { getAllPost, post } = usePost();

  useEffect( () => {
    getAllPost()
  }, [])

  if (post.length === 0)
    return (
      <>
        <NavBarProfile/>
        <h1 className='d-flex col align-items-center justify-content-center'
        style={{height: "100vh"}}>
        ¡Ups! No hay posteos. <EmojiSmileUpsideDown/>
        </h1>
      </>
    );

  return (
    <>
    <NavBarProfile/>
    <h1 className="text-center pt-3">Posteos</h1>
    <div className="container">
      <div className="row">
        {post.map((post, i) => (
          <div className='col-md-6' key={i}>
           <PostCardPrivate post={post} />
        </div>
          ))}
      </div>
    </div>
    </>
  )
}

export default HomeProfile