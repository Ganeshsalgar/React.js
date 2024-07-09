import conf from "../conf/conf";
import { Client, ID , Databases , Storage , Query } from "appwrite";


export class Service {
    client = new Client();
    databases;
    bukets;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bukets = new Storage(this.client)
    }
    
    async createPost({title, slug, content, featuredImage, status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error ",error)
        }
    }

    async updatePost(slug,{title, content, featuredImage, status} ){
        try {
            await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost:: error", error );
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return ture
        } catch (error) {
            console.log("Appwrite service :: deletePost:: error", error )
            return false
        }

    }
    async getPost(slug){
        try {
            await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return ture
        } catch (error) {
            console.log("Appwrite service :: getPost:: error", error )
            return false
        }
    }



    // file Upload Services

    async uploadFile(file){
        try {
            await this.bukets.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error )
            return false
        }

    }

    async deleteFile(fileId){
        try {
            await this.bukets.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost:: error", error )
            return false
        }
    }

    getFilePreview(fileId){
        return this.bukets.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const serive = new Service();

export default serive


