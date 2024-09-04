import { Header, Hero, Services, AboutUs, WhyChooseUs, Testimonials, Consultation, Footer } from "./components";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <div className="aboutUs">
        <AboutUs />
        <WhyChooseUs />
      </div>
      <Testimonials />
      <Consultation />
      <Footer />
    </>
  );
}

export default App;
