import firebase from "firebase/app";
import { createFirestoreInstance } from "redux-firestore";


const getReactReduxFirebaseProps = (store) => {
    const profileSpecificProps = {
        userProfile: 'users',
        useFirestoreForProfile: true,
        enableRedirectHandling: false,
        resetBeforeLogin: false
    };

    const rrfProps = {
        firebase,
        config: profileSpecificProps,
        dispatch: store.dispatch,
        createFirestoreInstance,
    };

    return rrfProps;
}

export default getReactReduxFirebaseProps;

