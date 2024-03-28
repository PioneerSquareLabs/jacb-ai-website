import Head from "next/head";
import CodeInAction from "~/components/home/CodeInAction";
import DesignerForDevs from "~/components/home/DesignedForDevs";
import Intro from "~/components/home/Intro";
import WhyJacob from "~/components/home/WhyJacob";
import Hero from "~/components/home/Hero";
import Header from "~/components/home/Header";
import CTA from "~/components/home/CTA";
import JacobInMotion from "~/components/home/JacobInMotion";
import Footer from "~/components/home/Footer";

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
