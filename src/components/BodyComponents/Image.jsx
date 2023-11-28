import Silkrod from "/assets/silkrod.png";
const Image = ({info}) => {
  return (
    <div className="w-full flex justify-center ">
      <img src={Silkrod} alt={info.alt} className="w-96 "></img>
    </div>
  )
}

export default Image
