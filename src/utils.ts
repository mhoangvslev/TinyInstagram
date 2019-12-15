/**
 * =======================
 * Types
 * =======================
 */
export type ToolOperation = "create" | "update";

/**
 * =======================
 * Interfaces
 * =======================
 */

export interface UserResultItem {
    username: string;
    name: string;
    avatarURL: string;
    id: string;
}

export interface UserResult {
    items: UserResultItem[];
}

export interface PostResultItem {
    caption: string;
    date: Date;
    imageUrl: string;
    postId: string;
    postedBy: string;
    likedBy: string[];
    likes: string;
}

export interface PostResult {
    items: PostResultItem[];
}

export const endpointURL = "https://tinyinstagram.appspot.com/"
export const testEndpointURL = "http://localhost:8080/"

export function getEndpoint(setting?: "dev" | "prod"){
    const s = setting ? setting : "prod";
    return s == "dev" ? testEndpointURL : endpointURL;
}