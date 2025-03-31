import conf from '../conf/conf';
import {Client, ID, Databases, Storage, Query} from "appwrite"

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.Client
            .setEndpoint(conf.aapwriteUrl)
            .setProject(conf.aapwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost ({title, slug, content, featuredImg, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.aapwriteDatabaseId,
                conf.aapwriteCollectionId,
                slug,
                {
                    title,
                    slug, 
                    content,
                    featuredImg,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite sevice :: getCurrentUser :: error", error);
            
        }
    }

    async updatePost( slug,{title, content, featuredImg, status}){
        try {
            return await this.databases.updateDocument(
                conf.aapwriteDatabaseId,
                conf.aapwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status 
                }
            );
        } catch (error) {
            console.log("Appwrite sevice :: getCurrentUser :: error", error);
            
        }
    }

    async deletePost(slug){

        try {
            await this.databases.deleteDocument(
                conf.aapwriteDatabaseId,
                conf.aapwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite sevice :: getCurrentUser :: error", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.aapwriteDatabaseId,
                conf.aapwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite sevice :: getCurrentUser :: error", error)
            return false;
        }
    }    

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
             return await this.databases.listDocuments(
                conf.aapwriteDatabaseId,
                conf.aapwriteCollectionId,
                // [
                //     Query.equal("status", "active")  
                // ] or as var is declared above
                queries
             )
        } catch (error) {
            console.log("Appwrite sevice :: getCurrentUser :: error", error);
            return false;
        }
    }

    // FILE UPLOAD & DELETE SERVICES

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.aapwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite sevice :: getCurrentUser :: error", error);
            return false;
        }
    }

    async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(
                conf.aapwriteBucketId,
                fileID
            )
            return true 
        } catch (error) {
            console.log("Appwrite sevice :: getCurrentUser :: error", error)
        }
    }

    getFilePreview(fileID){
        return this.bucket.getFilePreview(
            conf.aapwriteBucketId,
            fileID
        )
    }
}


const Service = new Service(); 
export default Service