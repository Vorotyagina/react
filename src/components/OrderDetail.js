/* eslint-disable no-unused-vars */
export default function OrderDetail(props) {
  // const {name} = props.name
  function generateKeys(data) {
    return `${data} + ${ new Date().getTime()}`
  }

  const plusItem = (id, e) => {
    
  }

  const minusItem = (id, e) => {
    props.decrement(id, e)
  }

  function renderCard() {
    return props.items.map( (item, index) => 
      (
      <div className="card" key={ item.id }>
        <div className="top">
          <div className="cardTitle" key={ generateKeys(item.productName) }>
            {item.productName}
          </div>
          <div className="priceContainer">
            <div className="itemPrice" 
            key={ generateKeys(item.price) }>Price: {item.price}<b> /- </b></div>
            <div className="itemQuantity" 
            key={ generateKeys(item.quantity) }>Quantity: {item.quantity}</div>
          </div>
        </div>
        <div className="buttonsContainer">
          <button type="button" 
          className="plusButton" 
          key={ generateKeys(index + 1000) } 
          onClick = { (e) => props.increment(item.id) }>+</button>
          <button type="button" 
          className="minusButton" 
          key={ generateKeys(index + 100000000) } 
          onClick = {(e) => props.decrement(item.id)}>–</button>
        </div>
      </div>
      )
    )
  }
  return (
    <div className="order-detail"> 
          <div className="cardGallery">
            { renderCard() }
          </div> 
    </div>
  )
}

  