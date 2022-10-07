import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const Authentication = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		// const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<SignInForm />
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
			<SignUpForm />
		</div>
	);
};

export default Authentication;
