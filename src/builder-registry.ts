"use client";
import { builder, Builder } from "@builder.io/react";
import Footer from "./components/footer";
import Header from "./components/header";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);



Builder.registerComponent(Header, {
  name: "Header",
});

Builder.registerComponent(Footer, {
  name: "Footer",
});
