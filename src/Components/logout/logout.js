import { useDispatch, useSelector } from "react-redux";
import { setName } from "../stores/slices/registrationFormSlice";
import { useEffect, useState } from "react";
import { IconButton, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import style from "./logout.module.css";
import { NavLink } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';

export default function LogOut({username}) {
    const dispatch = useDispatch();
    const { name } = useSelector((state) => state.registration);
    const userRegistrationData = JSON.parse(localStorage.getItem("userRegistrationData"));

    const [anchorEl, setAnchorEl] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        // Dispatch action to set name
        if (userRegistrationData) {
            dispatch(setName(userRegistrationData.name));
        }
    }, [dispatch, userRegistrationData]);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleDialogOpen = () => {
        handleMenuClose();
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    return (
        <section className={style.LogOutSection}>
            <div className={style.userProfile}>
                {userRegistrationData && (
                    <li className={style.userData}>
                        <img
                            className={style.userImg}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfBjATtjLsKnPIJOJGtA41hOsTeQxcWfzPg&usqp=CAU"
                            alt="not found"
                        />
                        <div className={style.user}>
                            <h3>{username}</h3>
                            <p>@userName</p>
                        </div>

                        <IconButton onClick={handleMenuOpen}>
                            <MoreVertIcon />
                        </IconButton>

                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            keepMounted
                        >
                            <MenuItem >Add an existing account</MenuItem>
                            <MenuItem onClick={handleDialogOpen}>Log out @username</MenuItem>
                        </Menu>

                        <Dialog open={openDialog} onClose={handleDialogClose} >
                        
                        <TwitterIcon className="sidebar__twitterIcon"  sx={{margin:'auto'}}/>
                            <DialogTitle>Log out of Twitter?</DialogTitle>
                            <DialogContent >
                                <p>Log out of Twitter?
                                    You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account. </p>
                            </DialogContent>
                            <DialogActions >
                                <Button onClick={handleDialogClose}>Cancel</Button>
                                <NavLink to={'/signin'}> <Button onClick={handleDialogClose}>Logout</Button> </NavLink>
                            </DialogActions>
                        
                        </Dialog>
                    </li>
                )}
            </div>
        </section>
    );
}
