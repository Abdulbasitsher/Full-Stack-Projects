import conf from '../conf.js';
import {Client , Account, ID} from "appwrite";

export class AuthService{
    client = new Client();
    account;
    constructor(){
         this.client
         .setEndpoint(conf.appwriteUrl)
         .setProject(conf.appwriteProjectId);
         this.acocunt = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(),email, password, name);
            if (userAccount) {
                return this.login({email, password});
                
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try{
            return await this.account.creatteEmailSession(email, password);
        } catch (error){
            throw error;
        }
    }
    async getCurrentUser(){
        try{
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite servive :: getCurrentUser :: eroor", error);
        }
        return null;
    }
    async logout(){
        try{
            await this.account.deleteSessions();
        }catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

 const authSerive = new AuthService();

 export default authSerive