import { Home } from "../api/homes/route";

export function HomeList({ homes }: { homes: Home[] }) {
  return (
    <div className="flex flex-col items-start justify-start gap-5">
      {homes.map(({ description, name, id }) => (
        <div key={id} className="flex gap-5">
          <h2 className="text-xl">{name}</h2>
          <p className="text-sm">{description}</p>
        </div>
      ))}
    </div>
  );
}
