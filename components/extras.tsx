"use client";

import Image from "next/image";

import img1 from "@/public/Layer_1.svg";
import img2 from "@/public/Layer_1 (1).svg";
import img3 from "@/public/Layer_1 (2).svg";
import img4 from "@/public/Layer_1 (3).svg";

const array = [
  {
    img: img1,
    title: "",
    description:
      "Apply theories and build your startup in real-time through practical challenges.",
  },
  {
    img: img2,
    title: "Immediate Feedback",
    description:
      "Receive personalized mentorship and refine your product with actionable insights.",
  },
  {
    img: img3,
    title: "Community Driven Success",
    description:
      "Connect with entrepreneurs, fostering partnerships and support.",
  },
  {
    img: img4,
    title: "Launch Ready Outcome",
    description:
      "Graduate with a validated product, pitch deck, and growth roadmap.",
  },
];

export default function Extras() {
  return (
    <div className="flex flex-col items-center justify-center text-white mt-10">
      <div className="px-[120px] text-center">
        <div className="text-[36px] font-[600]">More Than Just a Cohort</div>
        <div className="text-[22px] font-[400]">
          Experience real-world startup success through hands-on learning
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        {array.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

interface cardProps {
  img: string;
  title?: string;
  description: string;
}

function Card({ img, title, description }: cardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 m-4 max-w-sm">
      <div className="flex items-center justify-center w-full h-48 mb-4">
        <Image
          src={img}
          alt={title || "Card Image"}
          width={157}
          height={151}
          className="rounded"
        />
      </div>
      {title && (
        <div className="text-[24px] font-[600] mb-2 text-center">{title}</div>
      )}
      <div className="text-[16px] font-[400] text-center">{description}</div>
    </div>
  );
}
