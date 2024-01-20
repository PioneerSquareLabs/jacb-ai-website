import Head from "next/head";
import CodeInAction from "~/components/CodeInAction";
import DesignerForDevs from "~/components/DesignerForDevs";
import Intro from "~/components/Intro";
import WhyJacob from "~/components/WhyJacob";
import Hero from "~/components/Hero";
import Header from "~/components/Header";
import CTA from "~/components/CTA";
import JacobInMotion from "~/components/JacobInMotion";

export default function Home() {
  return (
    <>
      <Head>
        <title>JACoB - Just Another Coding Bot</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center pb-12 text-dark-blue">
        <Header />
        <Hero />
        <Intro />
        <JacobInMotion />
        <WhyJacob />
        <DesignerForDevs />
        <CodeInAction />
        <CTA />
      </main>
    </>
  );
}
