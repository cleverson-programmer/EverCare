"use client";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/components/data/services";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/layout/Footer";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* <Navbar />
      <ServicePageClient service={service} />
      <Footer /> */}
    </>
  );
}
