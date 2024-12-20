"use client";
import { Button } from "@/components/ui/button";
import "@/app/globals.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    //redirect to login dashboard
    window.location.href = "/dashboard";
  }, []);
  return <></>;
}
