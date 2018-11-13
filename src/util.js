import {PermissionsAndroid} from "react-native";

export const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return Promise.resolve(true);
        }

        return Promise.resolve(false);
    }
    catch (error) {
        return Promise.reject(error);
    }
};