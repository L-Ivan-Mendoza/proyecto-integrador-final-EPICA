export interface User {
    id?: string
    username: string
    email: string
    password: string
    avatarURL: string
}

export interface Post {
    id?: string
    titulo: string
    description: string
    autor: string
    comments: string
    imgURL: string
    createdAt: string
}

export interface Comment {
    id?: string
    description: string
    autor: string
    createdAt: string
}