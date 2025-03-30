import conf from '../conf/conf';
import {Client, Account, ID, Client} from "appwrite";

export class AuthService { // OPTIMIZED WAY
    Client = new Client()
    account; // i van ask directly to account weather i'm login or not

    constructor() {
        this.Client
            .setEndpoint(conf.aapwriteUrl)
            .setProject(conf.aapwriteProjectId);
        this.account = new account(this.Client);
    }

    async createAccount({email, password, name}){
        try {
            const userAcc = await this.account.create(ID.unique(), email, password, name);
            if (userAcc) {
                // call another method
                return this.login({email, password});
            } else {
                return userAcc;
            }
        } catch (error) {
            throw error;
        }
    }

    async login ({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }
    
    async getCurrentUser(){
        try {
            return await this.account.get(); 
        } catch (error) {
            console.log("Appwrite sevice :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logOut(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite sevice :: getCurrentUser :: error", error);
            
        }
    }

}

const authService = new AuthService();

export default authService