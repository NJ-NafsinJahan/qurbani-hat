import Banner from "@/components/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {" "}
      <h1 className="text-3xl text-red-600">Main page: Home</h1>
      <Banner></Banner>
    </div>
  );
}
