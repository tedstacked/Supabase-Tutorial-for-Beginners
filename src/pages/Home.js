import supabase from "../config/supabaseClient"
import { useEffect, useState } from "react"

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase
        .from('smoothies')
        .select()

        if (error) {
          setFetchError('Could not fetch the smoothies')
          setSmoothies(null)
          console.log(error)
        }
        if (data) {
          setSmoothies(data)
          setFetchError(null)
        }
    }

    fetchSmoothies()
  }, [])

  return (
    <div className="page home">
      <h2>Home</h2>
      {fetchError && (<p>{fetchError}</p>)}
      {smoothies && (
        <div className="smoothies"> 
          {smoothies.map(smoothie => (
            <p>{smoothie.title}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home