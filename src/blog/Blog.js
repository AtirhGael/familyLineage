import React from "react";
import { posts } from "../constant/data/blogPost";
import { Grid} from '@mui/material';

const BlogPost = () => {
    return (
        <Grid container maxWidth={'80%'} margin={'auto'} py={10}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post, index) => (
                <div key={index} className="border rounded-md p-4 shadow-md">
                    <div className="flex items-center mb-4">
                    <img src={post.image} alt={post.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                        <p className="font-semibold">{post.name}</p>
                        <p className="text-gray-500">{post.date}</p>
                    </div>
                    </div>
                    <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-700">{post.content}</p>
                </div>
                ))}
            </div>
        </Grid>
    );
  };
  
  export default BlogPost;