import React from "react";
import { getProviders, signIn } from "next-auth/react";
import { Header } from "../../components/Header";
import Image from "next/image";

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <Image
              src="/google.png"
              width={420}
              height={420}
              className="object-cover"
              alt="google-logo"
            ></Image>
            {/* <p className="text-sm italic my-10 text-center">
              this website is only for learning purpose.
            </p> */}
            <button
              className="bg-red-400 rounded-lg text-white p-3 py-2 hover:bg-red-500"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers }, // will be passed to the page component as props
  };
}
