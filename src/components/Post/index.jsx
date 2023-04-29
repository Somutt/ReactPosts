import React from 'react';
import P from 'prop-types';
import { PostCard } from '../PostCard';

import './styles.css';

export const Post = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} cover={post.cover} title={post.title} body={post.body} />
    ))}
  </div>
);

Post.propTypes = {
  posts: P.arrayOf(
    P.shape({
      cover: P.string.isRequired,
      title: P.string.isRequired,
      body: P.string.isRequired,
    })
  ),
};
