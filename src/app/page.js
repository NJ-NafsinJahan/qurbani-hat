import Banner from "@/components/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {" "}
      <Banner></Banner>
      <h1 className="text-3xl text-red-600">Main page: Home</h1>
    </div>
  );
}
