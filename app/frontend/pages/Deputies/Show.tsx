import { useParams } from "react-router"

export default function DeputiesShow() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>Show {id}</div>
  )
}

