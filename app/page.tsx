import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";
// import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/Logo.png"
            height={1000}
            width={1000}
            alt="Logo"
            className="mb-8 h-10 w-fit"
          />
        </div>
        <PatientForm />
        <div className="text-14-regular mt-6 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">
            © 2024 CareLink. All rights reserved.
          </p>
          <Link href="/?admin=true" className="text-green-500">
            Admin
          </Link>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="onboarding-img"
        className="side-img max-w-[50%] "
      />
    </div>
  );
}
