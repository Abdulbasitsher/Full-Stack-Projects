const Conf = {
    appwriteURL:  String(import.meta.process.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.process.env.VITE_APPWRITE_PROJECT_ID),
    appwriteBucketId: String(import.meta.process.env.VITE_APPWRITE_BUCKET_ID),
    appwriteCollectionId: String(import.meta.process.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteDBId: String(import.meta.process.env.VITE_APPWRITE_DATABASE_ID),
}

export default Conf;