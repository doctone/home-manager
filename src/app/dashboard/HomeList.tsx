import { useQuery } from "@tanstack/react-query";

export function HomeList() {
  const { data, isLoading } = useQuery({
    queryKey: ["homes"],
    queryFn: () => fetch("/api/homes").then((res) => res.json()),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{JSON.stringify(data, null, 2)}</h1>
    </div>
  );
}
