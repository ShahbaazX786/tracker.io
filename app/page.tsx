"use client";

import Pagination from "@/components/shared/Pagination";

export default function Home({ searchParams }: { searchParams: { page: string } }) {
  return (
    <>
      <h1>Bismillah</h1>
      <Pagination itemCount={100} pageSize={10} currentPage={parseInt(searchParams.page)} />
    </>
  )
}