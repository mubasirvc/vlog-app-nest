import Link from "next/link";

const SignInPanel = () => {
  return (
    <>
      <Link href={"/signin"}>Sign In</Link>
      <Link href={"/signup"}>Sign Up</Link>
    </>
  );
};

export default SignInPanel;