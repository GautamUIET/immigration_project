// import Image from "next/image";
// import React from "react";
// import { Timeline } from "@/components/ui/timeline";
// import Footer from "./Footer";

// export function TimelineDemo() {
//   const data = [
//     {
//       title: "Sign Up",
//       content: (
//         <div>
          
//           <div className="grid grid-cols-2 gap-4">
//             <img
//               src="si1.png"
//               alt="startup template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <img
//               src="s4.png"
//               alt="startup template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <img
//               src="s5.png"
//               alt="startup template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <img
//               src="s3.png"
//               alt="startup template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
           
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Send Your Documents",
//       content: (
//         <div >
         
         
//           <div className="grid grid-cols-2 gap-4">
//             <img
//               src="i2.png"
//               alt="hero template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <img
//               src="i3.png"
//               alt="hero template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
            
           
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Filling and Submission ",
//       content: (
//         <div>
         
         
//           <div className="grid grid-cols-2 gap-4">
//             <img
//               src="e2.png"
//               alt="hero template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <img
//               src="e3.png"
//               alt="hero template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
            
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Result",
//       content: (
//         <div>
          
          
//           <div className="grid grid-cols-2 gap-4">
//             <img
//               src="d1.png"
//               alt="hero template"
//               width={700}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
            
            
//           </div>
//         </div>
//       ),
//     },
//   ];
//   return (
//     <div className="w-full flex flex-col ">
//       <Timeline data={data} />   
//       <Footer />

//     </div>
//   );
// }



"use client";

import React, { useEffect } from "react";
import { Timeline } from "@/components/ui/timeline";
import Footer from "./Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function TimelineDemo() {
  useEffect(() => {
    const elements = gsap.utils.toArray(".fade-in");

    elements.forEach((el) => {
      gsap.fromTo(
        el as HTMLElement,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el as HTMLElement,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const data = [
    {
      title: "Sign Up",
      content: (
        <div className="fade-in">
          <div className="grid grid-cols-2 gap-4">
            <img src="si1.png" alt="signup" className="img-style" />
            <img src="s4.png" alt="signup" className="img-style" />
            <img src="s5.png" alt="signup" className="img-style" />
            <img src="s3.png" alt="signup" className="img-style" />
          </div>
        </div>
      ),
    },
    {
      title: "Send Your Documents",
      content: (
        <div className="fade-in">
          <div className="grid grid-cols-2 gap-4">
            <img src="i2.png" alt="documents" className="img-style" />
            <img src="i3.png" alt="documents" className="img-style" />
          </div>
        </div>
      ),
    },
    {
      title: "Filling and Submission",
      content: (
        <div className="fade-in">
          <div className="grid grid-cols-2 gap-4">
            <img src="e2.png" alt="submission" className="img-style" />
            <img src="e3.png" alt="submission" className="img-style" />
          </div>
        </div>
      ),
    },
    {
      title: "Result",
      content: (
        <div className="fade-in">
          <div className="grid grid-cols-2 gap-4">
            <img src="d1.png" alt="result" className="img-style" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <Timeline data={data} />
      <Footer />
    </div>
  );
}
