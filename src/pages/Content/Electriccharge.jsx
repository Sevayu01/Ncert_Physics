import Heading from "../../components/BodyComponents/Heading.jsx";
import Paragraph from '../../components/BodyComponents/Paragraph.jsx';
import ElectricCharge from "../../data/ElectricCharge.json";
import Image from "../../components/BodyComponents/Image.jsx";
const Electriccharge = () => {
  const data = ElectricCharge.data;
  return (
    <div className='w-full flex flex-col gap-5 p-10'>
     {data.map((e)=>{
        switch (e.name) {
          case 'heading':
            return <Heading key={e.idx} heading={e.body}></Heading>;
          case 'Paragraph':
            return <Paragraph key={e.idx} text={e.body}></Paragraph>;
          case 'description':
            return <span key={e.idx} className="w-full text-center">{e.body}</span>;
          case 'image':
            return <Image key={e.idx} info={e}></Image>;
          default:
            return null; 
        }
     })}
    </div>
  )
}

export default Electriccharge
