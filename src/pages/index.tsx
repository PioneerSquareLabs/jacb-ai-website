import Head from "next/head";
import CodeInAction from "~/components/CodeInAction";
import DesignerForDevs from "~/components/DesignedForDevs";
import Intro from "~/components/Intro";
import WhyJacob from "~/components/WhyJacob";
import Hero from "~/components/Hero";
import Header from "~/components/Header";
import CTA from "~/components/CTA";
import JacobInMotion from "~/components/JacobInMotion";
import Footer from "~/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>JACoB - Just Another Coding Bot</title>
      </Head>
      <main className="flex w-full flex-col items-center overflow-x-hidden pb-12">
        <Header />
        <Hero />
        <Intro />
        <JacobInMotion />
        <WhyJacob />
        <DesignerForDevs />
        <CodeInAction />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
