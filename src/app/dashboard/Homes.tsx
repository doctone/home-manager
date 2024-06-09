"use client";

import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Home } from "../api/homes/route";

const query = queryOptions<{ data: Home[] }, Error, Home[]>({
  queryKey: ["homes"],
  queryFn: () =>
    fetch("http://localhost:3000/api/homes").then((res) => res.json()),
  select: ({ data }) => data,
});

export function Homes() {
  const { data: homes } = useSuspenseQuery(query);

  return (
    <div className="w-full flex flex-col items-start justify-start gap-5 py-5">
      {homes.map(({ description, name, id }) => (
        <div key={id} className="flex gap-5">
          <h2 className="text-xl">{name}</h2>
          <p className="text-sm">{description}</p>
        </div>
      ))}
    </div>
  );
}
