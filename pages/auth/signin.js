import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";
import React from "react";

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          src="https://superviral.com.au/wp-content/uploads/2021/10/Buy-Instagram-Followers-Australia.png"
          alt="insta-img"
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
        />
        <div className="">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              <img
                className="w-32 object-cover"
                src="https://techstory.in/wp-content/uploads/2021/12/instagram-logo-2-2.png"
                alt=""
              />
              <p className="text-sm italic my-10 text-center">
                This app is created for learning purposes
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
