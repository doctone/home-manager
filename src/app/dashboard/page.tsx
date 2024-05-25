import { Homes } from "./Homes";

export default async function Page() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
      <Homes />
    </div>
  );
}
