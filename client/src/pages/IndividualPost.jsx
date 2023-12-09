import { useParams } from 'react-router-dom'
import NavBarProfile from '../components/NavBarProfile'
import PostDetail from '../components/PostDetail'
import { usePost } from '../context/PostProvider'
import { useEffect, useState } from 'react'


const IndividualPost = () => {
  const [data, setData] = useState(null)

  // sin este estado de carga no llega a renderizar a la primera
  const [loading, setLoading] = useState(true)
    
  const {id} = useParams()
    const { getPostById, post } = usePost();

    console.log(id)
    
    useEffect(() => {
      async function fetchData() {
        setLoading(true)
        const postData = await getPostById(id)
        setData(postData)
        setLoading(false)
    }
    fetchData()
  }, [id, getPostById])

  if (loading) {
    return <p>Cargando...</p>
  }

  return (
    <>

      <NavBarProfile/>
      <PostDetail post={data}/>
    
    </>
  )
}

export default IndividualPost