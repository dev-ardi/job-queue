import { SignIn, SignInButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	const user = useUser();
	return (
		<>
			<Head>
				<title>Job Queue</title>
				<meta name="description" content="Advanced TODO list" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
				<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
					<h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
						Job Queue
					</h1>

					<p className="text-2xl text-white">
						{user.isSignedIn && <SignInButton />}
					</p>
				</div>
			</main>
		</>
	);
};

export default Home;
