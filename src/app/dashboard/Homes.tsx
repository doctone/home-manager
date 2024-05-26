"use client";

import {
  queryOptions,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { HomeList } from "./HomeList";
import { Home } from "../api/homes/route";

const query = queryOptions<{ data: Home[] }, Error, Home[]>({
  queryKey: ["homes"],
  queryFn: () =>
    fetch("http://localhost:3000/api/homes", { cache: "no-cache" }).then(
      (res) => res.json()
    ),
  select: ({ data }) => data,
});

export function Homes() {
  const { data: homes } = useSuspenseQuery(query);

  return (
    <div className="flex items-start">
      <HomeList homes={homes} />
    </div>
  );
}
