import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import Image from "next/image";
export const User = ({ providers }) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Image
          src={session.user.image}
          width={100}
          height={50}
          alt="user image"
          onClick={signOut}
          className="h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-"
        ></Image>
      </>
    );
  }
  return (
    <>
      <button
        className="bg-blue-500 text-white px-6 py-2  font-medium rounded-md hover:brightness-105 hover:shadow-md"
        onClick={signIn}
      >
        Sign In
      </button>
    </>
  )
};
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers }, // will be passed to the page component as props
  };
}
