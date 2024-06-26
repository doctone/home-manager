"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HomeList } from "./HomeList";
const queryClient = new QueryClient();

export function Homes() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeList />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
