import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardMedia,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
  Cancel,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import axios from "axios";
import { Box } from "@mui/system";
import { useContext } from "react";
import { AppContext } from "../../State";

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  const { state } = useContext(AppContext);
  const [desc, setdesc] = useState("");
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: state.user._id,
      desc: desc,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          onSubmit={submitHandler}
          noValidate
          width={400}
          maxheight={480}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              src={state.user.profilePicture}
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              {state.user.username}
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          {/* {file && (
            <div>
              <img
                src={URL.createObjectURL(file)}
                alt=""
              />
              <Cancel
                onClick={() => setFile(null)}
              />
            </div>
          )} */}
          {file && (
            <Card
              sx={{
                height: 300,
                Width: 300,
              }}
            >
              <CardActionArea style={{position: "relative"}} >
                <Cancel
                  onClick={() => setFile(null)}
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "20px",
                    cursor: "pointer",
                    opacity: "0.7",
                  }}
                />
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  style={{width: "100%"}}
                  image={URL.createObjectURL(file)}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          )}
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Button
              variant="raised"
              component="label"
              style={{
                backgroundColor: "transparent",
                padding: "0px 0px",
              }}
            >
              <Image color="secondary" type="file" />
              <input
                hidden
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Button>

            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button type="submit">Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </SytledModal>
    </>
  );
};

export default Add;
