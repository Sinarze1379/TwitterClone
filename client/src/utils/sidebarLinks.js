import {FaTwitter} from "react-icons/fa";
import {RiHome4Line} from "react-icons/ri";
import {FiHash, FiMail} from "react-icons/fi";
import {IoMdNotificationsOutline} from "react-icons/io";
import {BsBookmark} from "react-icons/bs";
import {CgProfile} from "react-icons/cg";


const sidebarLinks = [
  {
    text: "",
    path: "/",
    icon: FaTwitter,
    class: "twitter",
  },
  {
    text: "Home",
    path: "/home",
    icon: RiHome4Line,
    class: "home",
  },
  {
    text: "Explore",
    path: "/explore",
    icon: FiHash,
    class: "explore",
  },
  {
    text: "Notification",
    path: "/notifications",
    icon: IoMdNotificationsOutline,
    class: "notification",
  },
  {
    text: "Message",
    path: "/messages",
    icon: FiMail,
    class: "message",
  },
  {
    text: "Bookmark",
    path: "/bookmarks",
    icon: BsBookmark,
    class: "bookmark",
  },

  {
    text: "Profile",
    path: "/profile/",
    icon: CgProfile,
    class: "profile",
  },
  {
    text: "Tweet",
    path: "/tweet",
    icon: "",
    class: "tweet",
  },
];

export default sidebarLinks;
