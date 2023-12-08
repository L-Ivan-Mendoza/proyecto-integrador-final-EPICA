import NavBarProfile from '../components/NavBarProfile'
import PostCardPrivate from '../components/PostCardPrivate';
import { usePost } from '../context/PostProvider'
import { useEffect } from 'react';

function HomeProfile() {

  const { getAllPost, post } = usePost();

  useEffect( () => {
    getAllPost()
  }, [])

  if (post.length === 0)
    return (
      <>
        <NavBarProfile/>
        <h1>No existen posteos.</h1>
      </>
    );

  return (
    <>
    <NavBarProfile/>
    <h1 className="text-center pt-3">Posteos</h1>
    <div >
        {post.map((post, i) => (
          <PostCardPrivate post={post} key={i} />
        ))}
      </div>
    </>
  )
}

export default HomeProfile