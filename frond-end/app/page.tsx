import Image from "next/image";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <>
      <div className="animate-pulse">
        <div className="h-12 bg-blue-400 mb-4"></div>
        <div className="h-12 bg-blue-400 mb-4"></div>
        <div className="h-12 bg-blue-400 mb-4"></div>
      </div>
      <Dashboard />
    </>
  );
}
