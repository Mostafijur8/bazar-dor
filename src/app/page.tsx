import Hero from "@/components/home/Hero";
import RisingProducts from "@/components/home/RisingProducts";
import FallingProducts from "@/components/home/FallingProducts";
import AllProducts from "@/components/home/AllProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <RisingProducts />
      <FallingProducts />
      <AllProducts />
    </main>
  );
}
