import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

const ItemName = styled.h3`
  font-size: 1.5rem;
`;

const ItemPrice = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Menu = () => {
  const menuItems = [
    { name: 'Sushi Platter', price: '$25' },
    { name: 'Ramen Bowl', price: '$15' },
    { name: 'Tempura Udon', price: '$18' },
    { name: 'Green Tea Ice Cream', price: '$5' },
  ];

  return (
    <MenuContainer>
      <h1>Our Menu</h1>
      {menuItems.map(item => (
        <MenuItem key={item.name}>
          <ItemName>{item.name}</ItemName>
          <ItemPrice>{item.price}</ItemPrice>
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default Menu;
