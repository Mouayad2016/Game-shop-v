import { postData, getData } from "../../helper/axios";
import { getCookieValue } from "../../../helper/cookies";

const ItemButtons = (props) => {
  const addToCart = async () => {
    const userId = getCookieValue("user_id");
    const user_cart = getCookieValue("cart_id");

    if (userId) {
      const cart_id = await postData({
        url: `/cart/${userId}/${props.prod_id}/postProduct`,
        data: {},
      });
    } else if (user_cart) {
      const postDataToCartByCartId = await postData({
        url: `/cart/${user_cart}/${props.prod_id}/postProduct/cartId`,
        data: {},
      });
      document.cookie = `cart_id=${postDataToCartByCartId.data.cart_id}; path=/;`;
    } else {
      const cart_id = await postData({
        url: `/cart/${props.prod_id}/postProduct`,
        data: {},
      });
      document.cookie = `cart_id=${cart_id.data.cart_id}; path=/;`;
    }
  };
  const addToFavorite = () => {};

  return (
    <>
      <div class="item-buttons">
        <button class="add-to-favorite">
          <i class="fas fa-heart"></i>
        </button>
        <button class="add-to-cart" onClick={addToCart}>
          <i class="fas fa-shopping-cart"></i>
        </button>
      </div>
    </>
  );
};

export default ItemButtons;
