import * as React from "react";
import Image from "next/image";
import imageNotFound from "../public/static/page_not_found.svg";
import { Container } from "@mui/material";

// pages/404.js
export default function Custom404() {
  return (
    <Container>
      <Image
        layout="fixed"
        objectFit="cover"
        src={imageNotFound}
        alt="image not found"
      />
    </Container>
  );
}
