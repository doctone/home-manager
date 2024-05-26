"use client";

import { useQuery } from "@tanstack/react-query";
import { HomeList } from "./HomeList";
import { Home } from "../api/homes/route";

export function Homes() {
  const { data: homes, isLoading } = useQuery<{ data: Home[] }, Error, Home[]>({
    queryKey: ["homes"],
    queryFn: () => fetch("/api/homes").then((res) => res.json()),
    select: ({ data }) => data,
  });

  if (!homes || isLoading) return <div>Loading...</div>;

  return (
    <div className="flex items-center">
      <HomeList homes={homes} />
    </div>
  );
}
