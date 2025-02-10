import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
   <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">About</h1>
   <div className="text-center">
      <p className="text-lg">We are a small passionate team.</p>
   </div>

   <div className="prose mx-auto mt-14 text-center dark:prose-invert">
      <p>We provide real-time connectivity to enable software providers and financial institutions to build integrated products for their small business customers.</p>
      <p>Our API infrastructure is leveraged by clients ranging from lenders to corporate card providers and business forecasting tools, with use cases including automatic reconciliation, business dashboarding, and loan decisioning.</p>
      <p><a href="/contact">Get in touch</a></p>
   </div>
</div>
      <Footer />
    </>
  );
}
