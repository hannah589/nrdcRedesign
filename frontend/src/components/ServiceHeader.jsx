import './serviceStyles.css'

const ServiceHeader = (props) => {
  return (
    <>
      <div className="header-image-container">
        <div className="header-textbox">
          <h2 className="title">{props.title}</h2>
          <p>{props.headerText}</p>
        </div>
      </div>
    </>
  )
}

export default ServiceHeader
