import React from 'react'
import { useRef } from 'react'
import CartCountButton from '../../Component/common/CartCountButton'
import Footer from '../../Component/common/Footer'
import Menu from '../../Component/common/Menu'
import { menuItemsData } from '../../Component/common/Menu/Data/Data'
import Banner from '../../Component/Home/Banner'
function Home() {
  const menuRef = useRef();
  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      {console.warn("Please Signup")}
        <Banner  handleScrollMenu={handleScrollMenu}/>
        <Menu  list={menuItemsData} ref={menuRef}/>
        <CartCountButton/>
        <Footer/>
    </div>
  )
}

export default Home