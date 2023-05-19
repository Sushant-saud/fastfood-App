import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../../Redux/cart/cart.selector";
import { NavLink } from "react-router-dom";
import "./style.css";

const ButtonCartCount = ({ cartCount }) => {
  return (
    <div className="btnCartCount">
      <NavLink to="/cart" className="link">
        <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
        <i className="fas fa-shopping-cart"></i>
      </NavLink>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(ButtonCartCount);
