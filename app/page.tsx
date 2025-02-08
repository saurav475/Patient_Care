import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.png"
            height={1000}
            width={1248}
            alt="patient"
            className="mb-12 h-20 w-fit"
          />

          <PatientForm />

          <div className="text-14-regular mt-10 flex flex-col justify-between">
            <Link href="/?admin=true" className=" text-white bg-green-700 text-[20px] p-3 w-auto italic text-center font-semibold rounded-lg">
              Admin Panel
            </Link>
            
            <p className="mt-10 text-dark-600 text-center text-[18px] font-bold">
              © 2025 Patient Care
            </p>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%] h-fit"
      />
    </div>
  );
};

export default Home;
