import { Navbar, Hero } from "./components/MainSections.tsx";
import { Pricing } from "./components/FeaturesAndPricing.tsx";
import { Footer, ProcessSteps, FAQ } from "./components/ExtraSections.tsx";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProcessSteps />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
