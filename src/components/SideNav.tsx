import Link from "next/link";

export default function SideNav() {
  return (
    <div className="h-screen bg-stone-700 w-1/5 p-12 flex flex-col gap-3 3xl">
      <Link href="/dashboard">Home</Link>
      <Link href="/rooms">Rooms</Link>
      <Link href="/tasks">Tasks</Link>
      <Link href="/profile">Profile</Link>
    </div>
  );
}
