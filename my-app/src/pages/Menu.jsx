import './Menu.css';

function MenuPage() {
  const menuItems = [
    { name: 'Grilled Salmon', price: '$25' },
    { name: 'Truffle Pasta', price: '$20' },
    { name: 'Lamb Chops', price: '$30' },
    { name: 'Caesar Salad', price: '$12' },
    { name: 'Golden Cheesecake', price: '$10' }
  ];

  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Menu</h1>
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <span className="item-name">{item.name}</span>
            <span className="item-price">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuPage;

// Repeat similar structure for About.jsx, Reservations.jsx, Events.jsx