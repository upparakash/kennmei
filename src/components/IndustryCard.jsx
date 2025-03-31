import "./IndustryCard.css"

const IndustryCard = (props) => {
    const {industryDetails} = props
    const {id, image, title} = industryDetails
  return (
     <li className='industry-card'>
      <img src={image} alt="industry-image" className='industry-image'/>
      <p className="industry-title">{title}</p>
     </li>
  )
}

export default IndustryCard