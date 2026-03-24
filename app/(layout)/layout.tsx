'use client'

import GlobalNav from "@/components/GlobalNav";
import Header from "@/components/Header";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [globalNavOpen, setGlobalNavOpen] = useState(false);

    return (
        <>
            <AnimatePresence>
                {globalNavOpen &&
                    <GlobalNav setGlobalNavOpen={setGlobalNavOpen} />
                }
            </AnimatePresence>

            <Header 
                globalNavOpen={globalNavOpen} 
                setGlobalNavOpen={setGlobalNavOpen} 
            />
            
            {children}
        </>
    )
}