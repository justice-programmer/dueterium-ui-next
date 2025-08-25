import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useState } from "react";
import { Readex_Pro } from "next/font/google";
import { Card, Input, Button, Container, Dialog, Sidebar } from "@/components";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const rp = Readex_Pro({
  variable: "--font-readex-pro",
  subsets: ["latin"]
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  let text = ""
  let dialogOpen = false
  const [open, setOpen] = React.useState(false);

  function handleChange(value: string) {
    text = value
    console.log(text)
  }
  return (
    <>
      <Head>
        <title>Dueterium UI</title>
        <meta name="description" content="A modern UI component library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className={`dark:text-white min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4 ${rp.variable}`}>
          <Sidebar bgVariant="dark" attach={false} className="mb-8">
            <div className="text-2xl font-bold mb-4">Dueterium UI</div>
            <nav className="flex flex-col gap-2">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">Components</a>
              <a href="#" className="hover:underline">Documentation</a>
              <a href="#" className="hover:underline">GitHub</a>
            </nav>
          </Sidebar>
          <Card bgVariant="dark" className="flex flex-col items-center min-h-fit-screen p-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to Dueterium UI</h1>
            <p className="mb-4">
              A modern UI component library built with Next.js and Tailwind CSS.
            </p>  
            <Input 
              onChange={handleChange} 
              placeholder="Type something..." 
              className="mb-4 w-full max-w-md"
            />
            <Button variant="primary" onClick={() =>setOpen(true)} className="w-full max-w-md">
              Show Dialog
            </Button>
         </Card>

          <Dialog bgVariant="dark" variant="info" isOpen={open} onClose={() => setOpen(false)} title="Hello from Dueterium UI!">
            <p>This is a simple dialog component.</p>
          </Dialog>

       </main>
    </>
  );
}
