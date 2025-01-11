import { FindUserByEmailRepository, createUserRepository } from "../repository/userRepository.js";
import { generateToken} from "../utils/jwtUtils.js";
import bcrypt from "bcryptjs"

export const registerUser = async  ( {username, email, password}) => {
    // try to find blocked words in the tweet body and if any exists dont create
    // the tweet and return an error
    const existingUser = await FindUserByEmailRepository(email);
    if (existingUser) {
        throw {
            message: 'Email already in use',
            status: 400
        };
    }

    // create the user
    const user = await createUserRepository({username, email, password});
    return user;
}

export const loginUser = async  ( {email, password}) => {
    //find the user by email in the database
    const user = await FindUserByEmailRepository(email);

    //if user does not exist throw an error
    if(!user) {
        throw {
            message: 'Invalid email or password',
            status: 401
        };
    }
    const isPassword = await bcrypt.compare(password, user.password);
    //if password does not match throw an error
    if(!isPassword) {
        throw {
            message: 'Invalid email or password',
            status: 400
        };
    }
    const token = generateToken(user);
    return {
        token: token,
        user : { id: user.id, email: user.email, username: user.username}
    };
    
}