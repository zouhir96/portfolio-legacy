import React from "react";
import { useRouter } from "next/router";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ArrowRight from "@mui/icons-material/ArrowRight";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { constants } from "../public/data/constants";
import { SocialMedias } from "../components/Styled";

const listItems = [
  {
    index: 0,
    text: "Experiences",
    href: "/experiences",
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

const LinksStyle = {
  marginTop: { xs: 15, md: 20 },
  // selected and (selected + hover) states
  "&& .Mui-selected": {
    bgcolor: "#06205d",
    "&, & .MuiListItemIcon-root": {
      color: "white",
    },
  },
};

function openLink(link) {
  window.open(link);
}

export default function SideBar(props) {
  const router = useRouter();

  const navigate = (href) => {
    router.push(href);
    if (props.setMobileOpen) {
      props.setMobileOpen(false);
    }
  };

  return (
    <div style={{height:"100%",backgroundColor: "#e2eafc" }}>
      <List sx={LinksStyle} >
        {listItems.map((item, index) => (
          <MListItem
            text={item.text}
            selected={router.asPath === item.href}
            onClick={() => navigate(item.href)}
            key={index}
          />
        ))}
      </List>
      <Contact />
    </div>
  );
}

const MListItem = ({ text, selected, onClick }) => {
  return (
    <ListItemButton
      selected={selected}
      onClick={onClick}
      sx={{ margin: 1, backgroundColor: "white", borderRadius: 2, border: "1px solid #06205d" }}
    >
      <ListItemText primary={text} />
      <ArrowRight sx={{ position: "absolute", right: 4 }} />
    </ListItemButton>
  );
};

const Contact = () => {
  return (
    <SocialMedias>
      <GitHub onClick={() => openLink(constants.GITHUB_LINK)} />
      <LinkedIn onClick={() => openLink(constants.LINKEDIN_LINK)} />
      <Instagram onClick={() => openLink(constants.INSTAGRAME_LINK)} />
    </SocialMedias>
  );
};
