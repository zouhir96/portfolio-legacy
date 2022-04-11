import * as React from 'react';
import Image from 'next/image'

// pages/404.js
export default function Custom404() {
  return <Image width={"100%"} height={"100%"} layout='responsive' src='/static/page_not_found.svg'/>;
}
