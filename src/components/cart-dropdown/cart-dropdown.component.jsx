import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import './cart-dropdown.styles.jsx';
import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const navigate = useNavigate();
	const onMouseLeaveHandler = () => dispatch(setIsCartOpen(false));
	const goToCheckoutHandler = () => {
		navigate('/checkout');
	};

	return (
		<CartDropdownContainer onMouseLeave={onMouseLeaveHandler}>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => (
						<CartItem
							key={item.id}
							cartItem={item}
						/>
					))
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
