import React from "react";
import Link from "next/link";
import { Avatar } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ArrowRight from "@mui/icons-material/ArrowRight";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { constants } from "../public/data/constants";
import {SocialMedias} from "../components/Styled"

const listItems = [
  {
    index: 0,
    text: "Experiences",
    href: "/",
  },
  {
    index: 1,
    text: "Educations",
    href: "/educations",
  },
  {
    index: 2,
    text: "Projects",
    href: "/projects/Konnash",
  },
  {
    index: 3,
    text: "Skills",
    href: "/skills",
  },
];

function openLink(link) {
  window.open(link);
}

export default function SideBar() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const MListItem = ({ text, index, href }) => {
    return (
      <Link href={href}>
        <ListItemButton
          selected={selectedIndex == index}
          onClick={(event) => handleListItemClick(event, index)}
          sx={{ margin: 1, borderRadius: 2 }}
        >
          <ListItemText primary={text} />
          <ArrowRight sx={{ position: "absolute", right: 4 }} />
        </ListItemButton>
      </Link>
    );
  };

  return (
    <div className="main">
      <Avatar
        alt="Zouhir RAJDAOUI"
        src="/static/my_image.jpeg"
        sx={{
          marginTop: 4,
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 2,
          width: 100,
          height: 100,
        }}
      />
      <List
        sx={{
          // selected and (selected + hover) states
          "&& .Mui-selected": {
            bgcolor: "#06205d",
            "&, & .MuiListItemIcon-root": {
              color: "white",
            },
          },
        }}
      >
        {listItems.map((item, index) => (
          <MListItem
            href={item.href}
            key={index}
            text={item.text}
            index={index}
          />
        ))}
      </List>
      <SocialMedias>
        <GitHub
          onClick={() => openLink(constants.GITHUB_LINK)}
        />
        <LinkedIn
          onClick={() => openLink(constants.LINKEDIN_LINK)}
        />
        <Instagram
          onClick={() => openLink(constants.INSTAGRAME_LINK)}
        />
      </SocialMedias>
    </div>
  );
}
