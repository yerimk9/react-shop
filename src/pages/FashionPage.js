import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import ProductSection from "../components/ProductSection";

export default function FashionPage() {
  return (
    <div>
      <Nav />
      <section>
        <section className="sectionInner">
          <div className="category">
            <ul>
              <li>홈</li>
              <li>&nbsp; &gt; 패션</li>
            </ul>
          </div>
          <ProductSection category="clothing">패션</ProductSection>
        </section>
      </section>
      <Footer />
    </div>
  );
}