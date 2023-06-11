'use client'

import Image from "next/image";
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <h1>Hey, I'm Faye and I'm A Web Developer</h1>
        <h3>Building applications that enrich user experience.</h3>
        <button class="border-2">Let's connect</button>
      </div>
      <div>
        <Image 
          src={"/Final.jpg"}
          width={200}
          height={200}
          alt="Picture of Faye" 
        />
      </div>
    </main>
  );
}
