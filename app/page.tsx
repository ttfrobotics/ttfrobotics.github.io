"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Particles from "./components/particles";
import Confetti from "react-confetti";
import * as Yup from "yup";

const navigation = [
  // { name: "Projects", href: "/projects" },
  { name: "Socials", href: "/contact" },
];
type Props = {};
const requiredSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
});
export default function Home() {
  const [status, setStatus] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [run, setRun] = useState<boolean>(false);
  const [totalCounts, setTotalCounts] = useState<number>(400);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({
      width,
      height,
    });
  }, []);

  return (
    <>
      {showConfetti && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          numberOfPieces={totalCounts}
          run={run}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xl duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          TTF Robotics
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500 ">
            Learn more via{" "}
            <Link
              target="_blank"
              href="/contact"
              className="underline duration-500 hover:text-zinc-300"
            >
              LinkTree.
            </Link>{" "}
            Subscribe to{" "}
            <Link
              target="_blank"
              href="/contact"
              className="underline duration-500 hover:text-zinc-300"
            >
              our Youtube channel
            </Link>{" "}
          </h2>

          {/* Sign up our newsletter below form */}
          <h1 className="mt-20 text-xl text-zinc-500">
            Sign up for our newsletter
          </h1>
          <form
            action="https://github.us18.list-manage.com/subscribe/post?u=88347cb9c4e00f0e859f22968&amp;id=362996b829&amp;f_id=00e925e7f0"
            method="post"
            className="mt-8"
          >
            <div className="flex flex-col items-center gap-5">
              <input
                type="email"
                name="EMAIL"
                placeholder="Enter your email"
                className="px-4 py-2 mb-2 text-center bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <button
                type="submit"
                className="px-4 py-2 text-white bg-gray-700 rounded-md hover:bg-gray-200 hover:text-black focus:bg-gray-400 focus:text-white focus:outline-none focus:ring-2 focus:ring-black"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
