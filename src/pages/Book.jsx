import { useParams } from "react-router-dom"
import BookDetail from "../components/BookDetail/BookDetail"

const Book = () => {
  const {id} = useParams()
  return (
    <>
        <BookDetail id={id}/>

    </>
  )
}

export default Book