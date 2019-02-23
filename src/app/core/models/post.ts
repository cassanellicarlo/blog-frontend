import { Author } from './author';
import { Comment } from './comment';

export class Post {
    title: string;
    image: string;
    content: string;
    author: Author;
    comments?: Comment[];
}