import { Button, Stack, Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { memo, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles({
  root: {
    width: "100%",
    border: "solid 1px",
    marginTop: "5px",
    marginBottom: "5px",
    borderRadius: "0.4rem",
    padding: "0.2rem 0.8rem",
    borderColor: "#D1D5DB"
  }
});

const Product = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Stack direction="row">
        <Stack flex="1">
          <Typography variant="h4">{props.name}</Typography>
          <Stack direction="row" alignItems="center">
            <Typography variant="subtitle1">Price:</Typography>
            <Typography variant="body1">${props.price}</Typography>
          </Stack>
        </Stack>
        <IconButton onClick={() => props.delete(props.id)}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default memo(Product);
