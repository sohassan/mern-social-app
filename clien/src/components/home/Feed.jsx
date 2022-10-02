import { Box, Stack, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../State";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { state } = useContext(AppContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/posts/timeline/${state.user._id}`);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [state.user._id]);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box
      flex={3}
      p={{ xs: 0, md: 2 }}
      bgcolor={"background.default"}
      minHeight={"100vh"}
    >
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
