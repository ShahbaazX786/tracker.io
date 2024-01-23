"use client";

import Link from "next/link";
import { Button } from "@radix-ui/themes"
import { FiPlusCircle } from "react-icons/fi";

export default function Home() {
  return (
    <>
      {/* <h1>Bismillah</h1> */}
      <Button>
        <FiPlusCircle />
        <Link href={'/issues/new'}>
          Create Issue
        </Link>
      </Button>
    </>
  )
}