"use client";

import { NextUIProvider } from "@nextui-org/react";

export default function ClientWrapper({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
