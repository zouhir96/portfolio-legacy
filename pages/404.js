import * as React from 'react';
import Image from 'next/image'

// pages/404.js
export default function Custom404() {
  return <Image width={40} height={10} layout='responsive' src='/static/page_not_found.svg'/>;
}
