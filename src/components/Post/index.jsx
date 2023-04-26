import './styles.css';

import { PostCard } from "../PostCard";

export const Post = ({posts}) => (

    <div className="posts" >
        {posts.map( post => (
            <PostCard key={post.id}
            cover={post.cover}
            title={post.title}
            body={post.body}
            />
        ))}
    </div>
);