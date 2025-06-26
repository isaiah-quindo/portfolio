/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function LawAdvisorAccessToJustice() {
  return (
    <>
      <Header />
      <div className="main-case-study min-h-lvh px-6 pt-40 px-6">
        <div className="max-w-7xl m-auto">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 max-w-3xl">
              <h1 className="text-4xl font-bold">Law Advisor</h1>
              <p className="text-gray-400">Access to Justice Platform</p>
            </div>

            <Image
              src="/images/law-advisor-showcase.jpg"
              alt="Law Advisor"
              width={1280}
              height={720}
              className="rounded-4xl h-auto"
            />

            <div className="flex flex-col gap-4 max-w-3xl">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="text-gray-400">
                LawAdvisor was founded in Australia in 2015, entering a legal
                tech space that was still in its early stages. At the time,
                users primarily used the platform as a lawyer directory, with
                most legal transactions happening offline. Recognizing the need
                for deeper digital transformation, LawAdvisor relocated to
                London in 2019 and shifted its focus to the B2B sector. This
                move led to the launch of products like Fibonacci and LegalEye,
                positioning LawAdvisor as a global innovator reshaping how legal
                services are delivered and managed.
              </p>
            </div>
            <div className="flex flex-col gap-4 max-w-3xl">
              <h2 className="text-2xl font-bold">The Problem</h2>
              <p className="text-gray-400">
                Access to legal advice is costly and confusing for many
                everyday. LawAdvisor wanted to build a platform that empowers
                people to understand and manage legal issues without needing a
                lawyer for everything.
              </p>
              <p className="text-gray-400">
                <span className="font-bold text-gray-300">Our Goal:</span>{" "}
                Design a user-friendly experience that demystifies legal help
                and makes legal services more accessible to the public.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black pb-40">
          <div className="max-w-7xl m-auto">
            <div className="flex flex-col gap-10">
              <Image
                src="/images/law-advisor-old.png"
                alt="Law Advisor"
                width={750}
                height={0}
                className="h-auto mt-8"
              />
              <div className="flex flex-col gap-4 max-w-3xl">
                <h2 className="text-2xl font-bold">My Role</h2>
                <ul className="list-disc list-none flex flex-col gap-4">
                  <li className="text-gray-400 flex flex-row gap-2 self-start items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                      />
                    </svg>
                    Designing a clean, approachable interface for non-lawyers
                  </li>
                  <li className="text-gray-400 flex flex-row gap-2 self-start items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                      />
                    </svg>
                    Mapping out information architecture for complex legal
                    workflows.
                  </li>
                  <li className="text-gray-400 flex flex-row gap-2 self-start items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                      />
                    </svg>
                    Collaborating with developers to ensure pixel-perfect
                    implementation.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 max-w-3xl">
                <h2 className="text-2xl font-bold">The Solution</h2>
                <p className="text-gray-400">
                  We focused on three major user needs:
                </p>
                <h3 className="text-xl font-bold">
                  1. Completing Sales Funnel
                </h3>
                <p className="text-gray-400">
                  At the start of a user&apos;s legal journey, LawAdvisor
                  leverages SEO to attract people searching for specific legal
                  issues, guiding them to a tailored Q&A experience. This
                  content is designed to match user concerns precisely, helping
                  them quickly understand their situation. From there, users can
                  immediately connect with legal advisors who&apos;ve shown
                  strong expertise in similar cases. This streamlined,
                  issue-focused approach creates a smooth and supportive entry
                  point—buildin, trust and setting the stage for a meaningful
                  legal interaction.
                </p>
              </div>
              <Image
                src="/images/law-advisor-solution-1.png"
                alt="Law Advisor - Solution 1"
                width={1280}
                height={720}
                className=" w-full h-auto"
              />
              <div className="flex flex-col gap-4 max-w-3xl">
                <h3 className="text-xl font-bold">
                  2. Commoditisation of legal services
                </h3>
                <p className="text-gray-400">
                  For users who already understand what legal help they need,
                  LawAdvisor offers a simplified experience through its Legal
                  Services page. Designed like an e-commerce platform, it allows
                  users to easily browse and compare a wide range of legal
                  services. With familiar filters, such as practice area or
                  service type, users can quickly find the right advisor. By
                  presenting legal options in a familiar, consumer-friendly
                  format, we make the legal system feel less intimidating and
                  more accessible to everyday people.
                </p>
              </div>
              <Image
                src="/images/law-advisor-solution-2.png"
                alt="Law Advisor - Solution 2"
                width={1280}
                height={720}
                className=" w-full h-auto"
              />
              <div className="flex flex-col gap-4 max-w-3xl">
                <h3 className="text-xl font-bold">3. Case Management</h3>
                <p className="text-gray-400">
                  As part of our end-to-end legal experience, case management
                  plays a central role. It&apos;s the shared workspace where
                  clients and advisors handle daily tasks—like sharing updates,
                  tracking progress, exchanging documents, scheduling meetings,
                  and managing payments. By centralising these functions within
                  the platform, LawAdvisor improves transparency, streamlines
                  collaboration, and keeps everyone aligned throughout the legal
                  process—making it easier, faster, and more user-friendly from
                  start to finish.
                </p>
              </div>
              <Image
                src="/images/law-advisor-solution-3.png"
                alt="Law Advisor - Solution 3"
                width={1280}
                height={720}
                className="w-full h-auto"
              />
              <div className="flex flex-col gap-4 max-w-3xl">
                <h2 className="text-2xl font-bold">Reflections</h2>
                <p className="text-gray-400">
                  I transitioned off the project as product development neared
                  completion. Given more time, my next step would&apos;ve been
                  to conduct usability testing with real users and iterate based
                  on their feedback.
                </p>
                <p className="text-gray-400">
                  At first, I was hesitant about diving into the legal space, it
                  felt complex and unfamiliar. But through hands-on involvement,
                  I realized it&apos;s less about legal jargon and more about
                  understanding people. When you truly empathize with users, you
                  will see that their goals, clarity, simplicity, and trust are
                  the same ones we strive for in good design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
