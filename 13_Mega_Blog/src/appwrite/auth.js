import conf from '../conf/conf.js';
import { Client, Account, ID } from 'appwrite';

class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.error('AuthService :: createAccount :: error', error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            console.log('AuthService :: login :: attempting login', { email, password });
            const session = await this.account.createEmailSession(email, password);
            console.log('AuthService :: login :: session created', session);
            return session;
        } catch (error) {
            console.error('AuthService :: login :: error', error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            console.log('AuthService :: getCurrentUser :: user', user);
            return user;
        } catch (error) {
            console.error('AuthService :: getCurrentUser :: error', error);
        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error('AuthService :: logout :: error', error);
        }
    }
}

const authService = new AuthService();

export default authService;
