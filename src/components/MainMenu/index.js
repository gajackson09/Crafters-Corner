import Product from "../Product";

export default function MainMenu({menuName, menuItems}){
    let menuItemsElements = menuItems.map((item, index) => <Product {...item} key={index}></Product>);
      return (
      <div>
        <h2>{menuName}</h2>
        {menuItemsElements}
      </div>
      );
    
    }
    