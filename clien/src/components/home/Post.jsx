import { Favorite, FavoriteBorder, MoreVert, Share, ThumbUp } from "@mui/icons-material";
import {
  Avatar,
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
// import {format} from "timeago.js";
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
      console.log(res);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <Card sx={{ margin: 5, maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            // src={"/assets/person/noAvatar.jpg"}
            src={user.profilePicture}
            aria-label="recipe"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={user.username}
        // subheader={format(post.createdAt)}
      />
      <CardMedia
        component="img"
     
        image={PF + post.img}
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {/* This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like. */}
          {post.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<ThumbUp />}
            checkedIcon={<ThumbUp sx={{ color: "blue" }} />}
            onClick={likeHandler}
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
  );
};

export default Post;
