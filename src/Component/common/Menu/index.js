import React, { forwardRef } from 'react';
import MenuItem from './MenuItem';
import './styleMenu.css';

const Menu = forwardRef(({list}, ref) => (
  <main ref={ref}>
    {
       list.map((item,index) => {
        return <MenuItem item={item} key={index}/>
       })
    }
  </main>
));

export default Menu;