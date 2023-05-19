import { connect } from 'react-redux';
import EmptyCart from "../../Component/Cart/EmptyCart";
import Footer from "../../Component/common/Footer";
import Logo from "../../Component/common/Logo";
import Menu from "../../Component/common/Menu";
import { menuItemsData } from "../../Component/common/Menu/Data/Data";
import MenuItem from "../../Component/common/Menu/MenuItem";
import { createStructuredSelector } from "reselect";
import { selectCartItems,selectCartItemsCount,selectCartTotal } from "../../Redux/cart/cart.selector";
import "./style.css";
import ButtonAddRemoveItem from '../../Component/common/ButtonCartCountRemove';
import { NavLink } from 'react-router-dom';
const Cart = ({cartCount, cartList, cartTotal}) => {
  return (
    <>
      <div className="cart-header">
        <Logo />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className="orders">
          <h1 className="orders-heading">Your Orders</h1>
          <div className="orders-menu">
            <Menu list={cartList} />
          </div>
          <h3 className="orders-total">Your total is <span>${cartTotal}</span></h3>
          <div className='order-now'>
            <NavLink className="link" to="/payment">
                <button className='button' >Order now</button>
            </NavLink>
          
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
