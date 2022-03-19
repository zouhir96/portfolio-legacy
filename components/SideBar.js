import React from "react";
import Link from 'next/link'
import { Avatar } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ArrowRight from "@mui/icons-material/ArrowRight";

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
    href: "/projects",
  },
  {
    index: 3,
    text: "Skills",
    href: "/skills",
  },
];

export default function SideBar() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    event.preventDefault();
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
    <div>
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
          <MListItem href={item.href} key={index} text={item.text} index={index} />
        ))}
      </List>
    </div>
  );
}
