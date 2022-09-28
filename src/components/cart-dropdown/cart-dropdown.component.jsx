import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
	const { setIsCartOpen } = useContext(CartContext);
	const onMouseLeaveHandler = () => {
		setIsCartOpen(false);
	};

	return (
		<div
			className='cart-dropdown-container'
			onMouseLeave={onMouseLeaveHandler}
		>
			<div className='cart-items' />
			<Button>GO TO CHECKOUT</Button>
		</div>
	);
};

export default CartDropdown;
