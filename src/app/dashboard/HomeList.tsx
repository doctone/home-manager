import { Home } from "../api/homes/route";

export function HomeList({ homes }: { homes: Home[] }) {
  return (
    <div className="flex flex-col items-center justify-center">
      {homes?.map(({ description, name, id }) => (
        <div key={id} className="flex flex-col">
          <h2 className="text-xl">{name}</h2>
          <p className="text-sm">{description}</p>
        </div>
      ))}
    </div>
  );
}
