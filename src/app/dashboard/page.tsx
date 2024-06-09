import { Homes } from "./Homes";

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-1/2">
      <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
      <Homes />
    </div>
  );
}
