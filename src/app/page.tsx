import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductsSection } from "@/components/sections/Products";
import { RecipesSection } from "@/components/sections/Recipes";
import { SustainabilitySection } from "@/components/sections/Sustainability";

export default function Page() {
  return (
    <main className="bg-white text-pulse-ink">
      <Header />
      <Hero />
      <ProductsSection />
      <SustainabilitySection />
      <RecipesSection />
      <Footer />
    </main>
  );
}
