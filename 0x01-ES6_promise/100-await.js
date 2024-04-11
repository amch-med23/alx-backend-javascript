import uploadPhoto from "./utils.js"
import createUser from "./utils.js"

async function asyncUploadUser(){
    let photo;
    let user;

    try {
	photo = await uploadPhoto();
	user = await createUser();
	return {'photo': photo, 'user': user}
    }
    catch {
	photo = null;
	user = null;
	return {'photo': photo, 'user': user}
    }
}
