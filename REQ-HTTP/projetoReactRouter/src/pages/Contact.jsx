import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Contact = () => {
  const { color } = useTitleColorContext();

  return (
    <div>
        <h1 style={{ color: color }}>Contact</h1>
    </div>
  )
}

export default Contact