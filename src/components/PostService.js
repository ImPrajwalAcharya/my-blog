// PostService.js
import { db } from './firebase';
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

class PostService {
    // Create Post
    static async createPost(post) {
        try {
            // Using the modular approach
            const postsCollectionRef = collection(db, 'posts');
            const docRef = await addDoc(postsCollectionRef, {
                title: post.title,
                excerpt: post.excerpt,
                image: post.image,
                date: post.date,
                author: post.author,
                minutes: post.minutes,
                views: post.views,
                contentFileName: post.contentFileNAme
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    // Get All Posts
    static async getPosts() {
        try {
            const snapshot = await getDocs(collection(db, 'posts'));
            const posts = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            return posts;
        } catch (error) {
            console.error("Error getting documents: ", error);
            return [];
        }
    }

    // Get Post by ID
    static async getPostById(id) {
        try {
            const docRef = doc(db, 'posts', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return { id: docSnap.id, ...docSnap.data() };
            } else {
                console.log("No such document!");
                return null;
            }
        } catch (error) {
            console.error("Error getting document: ", error);
            return null;
        }
    }

    // Update Post
    static async updatePost(id, updatedPost) {
        try {
            const docRef = doc(db, 'posts', id);
            await updateDoc(docRef, {
                title: updatedPost.title,
                excerpt: updatedPost.excerpt,
                image: updatedPost.image,
                date: updatedPost.date,
                author: updatedPost.author,
                minutes: updatedPost.minutes,
                views: updatedPost.views,
                contentFileName: updatedPost.contentFileName
            });
            console.log("Document updated successfully!");
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    }

    // Delete Post
    static async deletePost(id) {
        try {
            const docRef = doc(db, 'posts', id);
            await deleteDoc(docRef);
            console.log("Document successfully deleted!");
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    }
}

export default PostService;
