import { MoreVert, Share, ThumbUp } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { AppContext } from "../../State";

const Post = ({ post }) => {
  const [user, setUser] = useState({});
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { state } = useContext(AppContext);

  const likeHandler = () => {
    try {
      axios.put("/posts//like/" + post._id, { userId: state.user._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <Box sx={{ m: 2 }}>
      <Card>
        <CardHeader
          avatar={
            <Avatar src={user.profilePicture} aria-label="recipe"></Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={user.username}
        />
        <CardMedia
          component="img"
          image={PF + post.img}
          alt=""
          width="100%"
          height="auto"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.desc}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={likeHandler}>
            <Checkbox
              icon={<ThumbUp />}
              checkedIcon={<ThumbUp sx={{ color: "blue" }} />}
            />
          </IconButton>
          <Typography
            variant="caption"
            display="block"
            color="text.secondary"
            paddingTop="6px"
            marginLeft="-12px"
          >
            {like} people like it
          </Typography>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Post;
