import { postData, getData } from "../../helper/axios";
import { getCookieValue } from "../../../helper/cookies";

const ItemButtons = (props) => {
  const addToCart = async () => {
    const userId = getCookieValue("user_id");

    const cart_id = await postData({
      url: userId
        ? `/cart/${userId}/${props.prod_id}/postProduct`
        : `/cart/${props.prod_id}/postProduct`,
      data: {},
    });
    console.log(cart_id);
  };

  const addToFavorite = () => {};

  return (
    <div class="item-buttons">
      <button class="add-to-favorite">
        <i class="fas fa-heart"></i>
      </button>
      <button class="add-to-cart">
        <i class="fas fa-shopping-cart" onClick={addToCart}></i>
      </button>
    </div>
  );
};

export default ItemButtons;
