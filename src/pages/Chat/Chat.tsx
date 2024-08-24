import { Grid } from "@mui/material";
import { classes } from "./styles";
import Paper from "@mui/material/Paper";
import ChatTextField from "@/components/ChatTextField";

const Chat = () => {
  return (
    <Grid container sx={classes.grid}>
      <Grid item sx={classes.textArea}>
        <ChatTextField
          label={"Write something"}
          fullWidth
          InputProps={{ sx: { borderRadius: 20, border: '2px white solid' } }}
          InputLabelProps={{
            sx: {
              color: "#518eb9",
              fontSize: "18px",
              fontWeight: 1000,
              marginLeft: "30px",
              "&.MuiOutlinedInput-notchedOutline": { fontSize: "10px" },
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Chat;
