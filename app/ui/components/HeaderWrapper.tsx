"use client";

import GlobalNav from "@/components/GlobalNav";
import Header from "@/components/Header";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

export default function HeaderWrapper() {
  const [globalNavOpen, setGlobalNavOpen] = useState(false);

  return (
    <>
      {/* Wraps the Header and GlobalNav into one client component.
        GlobalNav animates in/out of the DOM when opened/closed. */}
      <AnimatePresence>
        {globalNavOpen && <GlobalNav setGlobalNavOpen={setGlobalNavOpen} />}
      </AnimatePresence>

      <Header
        globalNavOpen={globalNavOpen}
        setGlobalNavOpen={setGlobalNavOpen}
      />
    </>
  );
}
