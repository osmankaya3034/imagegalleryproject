
import Picture from "../components/Picture";
import{data} from "../helper/data"

const Homepage = () => {
  return( <div className="section">
  <h1>Image Gallery</h1>
  <div className="card">
    {data.map(({ id, name, image }) => (
      <Picture id={id} name={name} image={image} />
    ))}
  </div>
</div>)
}

export default Homepage;