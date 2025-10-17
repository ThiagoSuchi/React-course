import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Projects = () => {
  const { color } = useTitleColorContext();

  return (
    <div>
        <h1 style={{ color: color }}>Projects</h1>
    </div>
  )
}

export default Projects