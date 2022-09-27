import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase.utils';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<div>Sign In Page</div>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
		</div>
	);
};

export default SignIn;
