import User from "../schema/user.js";

export const createUserRepository = async ({username, email, password}) => {
    try {
        const user = await User.create({username, email, password});
        return user;
    }catch (error) {
        throw error;
    }
}

export const FindUserByEmailRepository = async (email) => {
    try {
        console.log(email);
        const user = await User.findOne({email});
        return user;
    }catch (error) {
        throw error;
    }
}
