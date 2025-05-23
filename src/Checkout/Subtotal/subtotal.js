import "./subtotal.css";
import { NumericFormat } from "react-number-format";
import { useStateValue } from "../../stateProvider";
import { getCartTotal } from "../../reducer";

function Subtotal() {
    const [{ cart }] = useStateValue();
    return (
        <div className="subtotal">
            <NumericFormat
                value={getCartTotal(cart)}
                displayType="text"
                thousandSeparator
                prefix="$"
                decimalScale={2}
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart.length} items): <strong>{value}</strong>
                        </p>
                        <small className="gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
            />
            <button>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;