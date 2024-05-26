import { useQuery } from "@tanstack/react-query";
import { Home } from "../api/homes/route";

export function HomeList() {
  const { data: homes, isLoading } = useQuery<{ data: Home[] }, Error, Home[]>({
    queryKey: ["homes"],
    queryFn: () => fetch("/api/homes").then((res) => res.json()),
    select: ({ data }) => data,
  });

  if (isLoading) {
    return <div className="flex items-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {/* {JSON.stringify(homes, null, 2)} */}
      {homes?.map(({ description, name, id }) => (
        <div key={id} className="flex flex-col">
          <h2 className="text-xl">{name}</h2>
          <p className="text-sm">{description}</p>
        </div>
      ))}
    </div>
  );
}
