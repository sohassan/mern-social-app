import { Box, Stack, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/timeline/6332b5dd8187036155d3bf54");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          {posts.map((p) => (
            <Post key={p._id} post={p} />
          ))}
        </>
      )}
    </Box>
  );
};

export default Feed;
