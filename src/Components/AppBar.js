import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import Link from '@mui/material/Link';
import { IconButton } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link component={RouterLink} color="inherit" underline="none" to="/">
              Poke App
            </Link>
          </Typography>
          <Typography sx={{ minWidth: 100 }}>
          <IconButton
              size="medium"
              aria-label="show 17 new notifications"
              color="inherit"
              edge="end"
              component={RouterLink}
              to="favorites"
            >
              <StarIcon />
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
