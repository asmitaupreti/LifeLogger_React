import { RxDashboard } from "react-icons/rx";
import {
  IoPersonOutline,
  IoSettingsOutline,
  IoLogOutOutline,
  IoNotificationsOutline,
} from "react-icons/io5";

export const menus = [
  {
    name: "Dahsboard",
    icon: RxDashboard,
    link: "/",
  },
  {
    name: "Profile",
    icon: IoPersonOutline,
    link: "/",
  },
  {
    name: "Notifications",
    icon: IoNotificationsOutline,
    link: "/",
  },

  {
    name: "Setting",
    icon: IoSettingsOutline,
    link: "/",
  },
  {
    name: "Logout",
    icon: IoLogOutOutline,
    link: "/",
  },
];
