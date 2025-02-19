import { Button } from "@/components/ui/button";
import { BrainCogIcon, EyeIcon, GlobeIcon, MonitorSmartphoneIcon, ServerCogIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "Store Your PDF Documents",
    description:
      "Keep all your important PDF files securely stored and easily accessible anytime, anywhere.",
    icon: GlobeIcon,
  },
  {
    name: "Blazing Fast Response",
    description:
      "Experiance lightning-fast answer to your queries, ensuring you get the information you need to instantly.",
    icon: ZapIcon,
  },
  {
    name: "Chat Memorisation",
    description:
      "Our intelligent chatbot remembers previous interaction, providing seamless and personalized experiance.",
    icon: BrainCogIcon,
  },
  {
    name: "Interactive PDF Viewer",
    description:
      "Engage with your PDF like never before using out intutive and interaction viewer.",
    icon: EyeIcon,
  },
  {
    name: "Cloud Backup",
    description:
      "Rest assured knowing your documents are safely backed up on the cloud, protected from loss or damage.",
    icon: ServerCogIcon,
  },
  {
    name: "Responsive Across Devices",
    description:
      "Access and chat with your PDFs seamlesly on any device, whether its your desktop, tablet, or smartphone.",
    icon: MonitorSmartphoneIcon,
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600 ">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Your Interactive Document Companion
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your PDFs into Interative Conversation
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Introduction
              <span className="font-bold text-indigo-600"> Chat with PDF.</span>
              <br />
              <br /> Upload your document our chatbot will answer questions,
              summerize content, and answer all your Qs. Ideal for everyone,{" "}
              <span className="text-indigo-600">Chat with PDF</span> turns
              static document into{" "}
              <span className="font-bold">dynamic conversation</span>, enhancing
              productivity 10x fold effortlessly
            </p>
          </div>

          <Button asChild className="mt-10">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>

        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              alt="app screenshot"
              src="https://i.imgur.com/VciRSTI.jpeg"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8 ">
          <dl className="mx-auto grid max-w-2xl grid-col-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 ">
            {features.map((feature, i) => (
              <div key={i} className="relative py-10 px-16 border border-indigo-600/30 shadow-lg rounded-xl ">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon
                    aria-hidden="true"
                    className="absolute left-7 top-11 h-5 w-5  text-indigo-600"
                  />
                </dt>
                <dd><span className="font-bold">{feature.name} </span>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
