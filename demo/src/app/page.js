import Image from "next/image";
import SliderComponent from "./components/homepage/SliderComponent";
import CardComponent from "./components/homepage/CardComponent";
import SubBodyComponent from "./components/homepage/SubBodyComponent";

export default function Home() {
  return (
   <>
    <SliderComponent />
    <CardComponent />
    <SubBodyComponent />
   </>
  );
}
