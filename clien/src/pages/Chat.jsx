import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Avatar,
  Badge,
  Card,
  CardHeader,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Stack } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

const CardStyled = styled(Card)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
    },
  },
}));
const commonStyles = {
  bgcolor: "#b6d7a8",
  borderColor: "#b6d7a8",
  m: "auto",
  p: 1,
  border: 1,
};

export default function Chat() {
  return (
    <Container maxWidth="md" sx={{ ...commonStyles, borderRadius: 1 }}>
      <Grid container direction="column" sx={{ mt: { md: "20%" } }}>
        <Grid container spacing={2}>
          <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }}>
            <Typography variant="subtitle1" gutterBottom align="center">
              Contact
            </Typography>
            <CardStyled>
              <CardHeader
                avatar={
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar alt="M" src="/static/images/avatar/1.jpg" />
                  </StyledBadge>
                }
                title="Mostapha Lamdar"
              />
            </CardStyled>
            <CardStyled>
              <CardHeader
                avatar={
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar alt="M" src="/static/images/avatar/1.jpg" />
                  </StyledBadge>
                }
                title="Mostapha Lamdar"
              />
            </CardStyled>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid spacing={2}>
              <Item>Item 1</Item>
              <Grid>Item 2</Grid>
              <Item position="fixed" b="0">
                Item 3
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
