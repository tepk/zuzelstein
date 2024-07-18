import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import styles from "../styles/main.module.scss";
import { Router as RemixRouter } from "@remix-run/router/dist/router";
import { HeaderMenu } from "./HeaderMenu";
import { useMediaQuery } from "@mui/material";

export default function Header({ router }: { router?: RemixRouter }) {
  const mobileDevice = useMediaQuery("(max-width:767px)");
  return (
    <AppBar position="static" sx={{ bgcolor: "rgba(79, 77, 77, 0.96)" }}>
      <Toolbar>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <img src={`./logo.png`} alt={`Main Logo`} className={styles.logo} />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, lineHeight: "1.3rem" }}
        >
          {!mobileDevice ? (
            <span>
              Клининговое Агентство
              <br />
              Господина Зузельштейна
            </span>
          ) : (
            <span>
              Агентство
              <br />
              Зузельштейна
            </span>
          )}
        </Typography>
        <HeaderMenu />
      </Toolbar>
    </AppBar>
  );
}
