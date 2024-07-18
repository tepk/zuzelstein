import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "@mui/material";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import InfoIcon from "@mui/icons-material/Info";
import { Ballot } from "@mui/icons-material";
import { Link } from "react-router-dom";

const navigationList = [
  { name: "Главная", href: "/", icon: <Ballot fontSize="small" /> },
  { name: "Об Агентстве", href: "/about", icon: <InfoIcon fontSize="small" /> },
  {
    name: "Цены",
    href: "/pricing",
    icon: <CleaningServicesIcon fontSize="small" />,
  },
  {
    name: "Корзина",
    href: "/cart",
    icon: <ShoppingCartIcon fontSize="small" />,
  },
];

export function HeaderMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuList sx={{ width: 320, maxWidth: "100%", padding: 0 }}>
          {navigationList.map((el, index) => (
            <MenuItem key={index}>
              <ListItemIcon>{el.icon}</ListItemIcon>
              <Link to={el.href}>
                <ListItemText>{el.name}</ListItemText>
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}
