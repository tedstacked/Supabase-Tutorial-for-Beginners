import { useParams } from "react-router-dom"

const Update = () => {
  const {id} = useParams()
  return (
    <div className="page update">
      <h2>Update</h2>
    </div>
  )
}

export default Update