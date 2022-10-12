import { Add, Remove } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../State";

const Rightbar = ({ users }) => {
 // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { state, dispatch } = useContext(AppContext);
  const [followed, setFollowed] = useState(
    state.user.followings.includes(users?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + state.user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
       
      }
    };
    getFriends();
    
  }, [state.user]);



  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${users._id}/unfollow`, {
          userId: state.user._id,
        });
        dispatch({ type: "UNFOLLOW", payload: users._id });
      } else {
        await axios.put(`/users/${users._id}/follow`, {
          userId: state.user._id,
        });
         dispatch({ type: "FOLLOW", payload: users._id });
      }
       setFollowed(!followed);
    } catch (err) {}
  };

  const HomeRightbar = () => {
    return (
      <Box
        
        p={2}
        sx={{ display: { xs: "none", sm: "block" } }}
        bgcolor={"background.default"}
       
      >
        <Box width={300} bgcolor={"background.default"}>
          <Typography variant="h6" fontWeight={100}>
            Friends
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem>
              <ListItemAvatar>
                {friends.map((friend) => (
                  <Avatar key={friend._id} src={friend.profilePicture} />
                ))}
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
          </List>
          <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
            Latest Photos
          </Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/burgers.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/camera.jpg"
                alt=""
              />
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" fontWeight={100} mt={2}>
            Latest Conversations
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/3.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    );
  };

  const ProfileRightbar = () => {
    return (
      <Box
        
        p={2}
        sx={{ display: { xs: "none", sm: "block" } }}
        bgcolor={"background.default"}
        width={"100%"}
      >
        <Box position="fixed" width={300} bgcolor={"background.default"}>
          {users.username !== state.user.username && (
            <Button onClick={handleClick}>
              {followed ? "Unfollow" : "Follow"}
              {followed ? <Remove /> : <Add />}
            </Button>
          )}
          <Typography variant="h6" fontWeight={100}>
            Online Friends
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem>
              <ListItemAvatar>
                {friends.map((friend) => (
                  <Link
                    to={"/profile/" + friend.username}
                    style={{ textDecoration: "none" }}
                  >
                    <Avatar key={friend._id} src={friend.profilePicture} />
                  </Link>
                ))}
              </ListItemAvatar>

              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
          </List>
          <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
            Latest Photos
          </Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/burgers.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/camera.jpg"
                alt=""
              />
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" fontWeight={100} mt={2}>
            Latest Conversations
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/3.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    );
  };

  return <>{users ? <ProfileRightbar /> : <HomeRightbar />}</>
};

export default Rightbar;
