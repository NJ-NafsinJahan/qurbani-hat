import AllLiveStock from "@/components/AllLiveStock";
import Banner from "@/components/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {" "}
      <Banner></Banner>
      <AllLiveStock></AllLiveStock>
    </div>
  );
}
