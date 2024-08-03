import {
  CustomerReview,
  Footer,
  Hero,
  PopularProduct,
  SuperQuality,
  SpecialOffer,
  Suscribe,
  Services,
} from "./sections";
import Nav from "./Components/Nav";

export default function App() {
  return (
    <main className="relative">
      <Nav></Nav>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero></Hero>
      </section>
      <section className="padding">
        <PopularProduct></PopularProduct>
      </section>
      <section className="padding">
        <SuperQuality></SuperQuality>
      </section>
      <section className="padding-x py-10">
        <Services></Services>
      </section>
      <section className="padding">
        <SpecialOffer></SpecialOffer>
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReview></CustomerReview>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Suscribe></Suscribe>
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer></Footer>
      </section>
    </main>
  );
}
