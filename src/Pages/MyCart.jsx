import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incQnty, decQnty, cartDataRemove } from "../CartSlice";
import { useNavigate } from "react-router-dom";

const MyCart = () => {
  const CartData = useSelector((state) => state.mycart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  let TotalAmount = 0;
  const ans = CartData.map((key, index) => {
    TotalAmount += key.price * key.qnty;

    return (
      <tr key={key.id}>
        <td>{index + 1}</td>
        <td>
          <img src={key.images} width="80" height="80" alt={key.name} />
        </td>
        <td className="cart-name">{key.name}</td>
        <td>{key.brand}</td>
        <td>{key.category}</td>
        <td>₹{key.price}</td>
        <td>
          <button
            className="qty-btn"
            onClick={() => dispatch(decQnty({ id: key.id }))}
          >
            −
          </button>
          <span className="qnty">{key.qnty}</span>
          <button
            className="qty-btn"
            onClick={() => dispatch(incQnty({ id: key.id }))}
          >
            +
          </button>
        </td>
        <td>₹{key.price * key.qnty}</td>
        <td>
          <button
            className="delete-btn"
            onClick={() => dispatch(cartDataRemove({ id: key.id }))}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="cart-container">
      <h1>🛒 My Cart</h1>
      <h3 className="total">Total Amount : ₹{TotalAmount}</h3>

      <table className="cart-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th style={{ width: "200px" }}>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>

      {CartData.length > 0 ? (
        <button className="checkout-btn" onClick={() => navigate("/checkout")}>
          Proceed to Checkout
        </button>
      ) : (
        <h3 style={{ textAlign: "center", marginTop: "50px" }}>
          Your Cart is Empty!!!
        </h3>
      )}
    </div>
  );
};

export default MyCart;