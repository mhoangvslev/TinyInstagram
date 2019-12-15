/**
 * =======================
 * Types
 * =======================
 */
type ToolOperation = "create" | "update";

/**
 * =======================
 * Interfaces
 * =======================
 */

interface UserResultItem {
    username: string;
    name: string;
    avatarURL: string;
    id: string;
}

interface UserResult {
    items: UserResultItem[];
}

interface PostResultItem {
    caption: string;
    date: Date;
    imageUrl: string;
    postId: number;
    postedBy: number;
    likedBy: number[];
    likes: number;
}

interface PostResult {
    items: PostResultItem[];
}