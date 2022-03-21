
export default function Product({itemName, itemId, itemPrice, itemDescription}) {

    return (
      <div className="menu-item" id={`menu-item-${itemId}`}>
      <h3>{itemName}</h3>
      <span>${itemPrice}</span> 
      <p>{itemDescription}</p>
      <button>Add to Cart</button>
    </div>
        );
  }