import { useDispatch, useSelector } from "react-redux";
import { setName,} from "../stores/slices/registrationFormSlice";
import { useEffect } from "react";
import { IconButton, Menu } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import style from './logout.module.css'

export default function LogOut() {
  const dispatch = useDispatch();
  const {  name } = useSelector((state) => state.registration);
  const userRegistrationData = JSON.parse(localStorage.getItem("userRegistrationData"));

  useEffect(() => {
    // Dispatch actions to set name and email
    if (userRegistrationData) {
      dispatch(setName(userRegistrationData.name));
    //   dispatch(setEmail(userRegistrationData.email));
    }
  }, [dispatch, userRegistrationData]);

  return (
    <section className={style.LogOutSection}>
      <div className={style.userProfile}>
        {userRegistrationData && (
          <li className={style.userData}>
            <img className={style.userImg}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfBjATtjLsKnPIJOJGtA41hOsTeQxcWfzPg&usqp=CAU"
              alt="not found"
            />
            <div className={style.user}>
              <h3>{userRegistrationData.name} name</h3>
              <p>@userName</p>
            </div>

            <IconButton>
                <MoreVertIcon/>
                <Menu>

                </Menu>
            </IconButton>
          </li>
        )}
      </div>
    </section>
  );
}
