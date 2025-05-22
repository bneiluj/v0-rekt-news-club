"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ClubPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-black font-mono relative overflow-x-hidden flex flex-col">
      {/* Announcement bar */}
      <div className="bg-black text-white text-xs py-2 px-4 text-center sticky top-0 z-30">
        Rekt Exclusive Membership is <span className="font-bold">OFFERING NO. 001</span> ▼ from the Rekt News
        Intelligence Network.
      </div>

      {/* Background gradient that follows mouse */}
      <div
        className="fixed inset-0 opacity-10 pointer-events-none transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(circle 30vw at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.2), transparent)`,
        }}
      />

      {/* Navigation */}
      <header className="border-b border-black/20 py-4 px-4 sm:px-6 sticky top-0 bg-white z-20">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">rekt</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-4 text-sm">
            {["t&c", "videos", "club", "leaderboard", "research", "parlour", "dark"].map((item) => (
              <Link
                key={item}
                href={`/${item === "dark" ? "" : item}`}
                className="hover:underline transition-all duration-200"
              >
                {item}
              </Link>
            ))}
            <span className="px-1">|</span>
            <Link href="/en" className="hover:underline transition-all duration-200">
              en ▼
            </Link>
            <span className="px-1">|</span>
            <Link href="/login" className="hover:underline transition-all duration-200">
              log in
            </Link>
          </nav>

          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">rekt exclusive membership</h1>
          <p className="text-lg mb-6">exclusive access for insiders only</p>
        </motion.div>

        {/* Membership Card Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex flex-col items-center"
        >
          <h2 className="text-2xl font-serif mb-6">Go Beyond.</h2>

          <div className="relative w-64 h-40 mx-auto mb-8 transform hover:scale-105 transition-transform duration-300">
            {/* Card holder */}
            <div className="absolute inset-0 bg-black rounded-lg shadow-lg transform translate-y-1 translate-x-1"></div>

            {/* White card */}
            <div className="absolute inset-0 bg-white rounded-lg shadow-lg transform -translate-y-1 -translate-x-1 overflow-hidden border border-black/20">
              <div className="absolute inset-0 opacity-10 bg-[url('/card-pattern.png')] bg-repeat"></div>
              <div className="absolute top-3 left-3 text-black font-bold text-sm">rekt</div>
              <div className="absolute bottom-3 right-3 text-black text-xs">001</div>
            </div>

            {/* Black card holder */}
            <div className="absolute inset-0 bg-black rounded-lg overflow-hidden">
              {/* Card peeking out */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-white rounded-t-lg transform -translate-y-2 border-x border-t border-black/20">
                <div className="absolute inset-0 opacity-10 bg-[url('/card-pattern.png')] bg-repeat"></div>
                <div className="absolute top-3 left-3 text-black font-bold text-sm">rekt</div>
              </div>

              {/* Card holder text */}
              <div className="absolute bottom-4 w-full text-center">
                <div className="text-white font-bold italic text-sm">rekt</div>
                <div className="text-white text-xs tracking-wider">OPERATIONAL CLEARANCE</div>
              </div>
            </div>
          </div>

          <p className="text-base text-center max-w-lg">
            this is not for everyone. just for insiders.
            <br />
            rekt news is evolving. not pivoting.
            <br />
            still exposing truth, dropping alpha, building tools — and unlocking vip access for those who play to win.
          </p>
        </motion.div>

        {/* Basic Tier */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16 w-full"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">rekt basic</h2>
            <p className="text-sm mb-4">your edge in web3 security & alpha</p>
            <div className="inline-block border-b border-black/30 px-6 py-2 mb-4">
              <span className="text-xl font-bold">$12</span>
              <span className="text-lg"> / month</span>
            </div>
          </div>

          <div className="space-y-3">
            <BenefitItem text="monthly drops of real alpha, deep analysis & protocol intel" />
            <BenefitItem text="early access to governance changes, token renames & stealth updates" />
            <BenefitItem text="discounts from top-tier partners like Nansen, Chaos Labs & premium RPCs" />
            <BenefitItem text="early beta access to scanners, dashboards, and FHE/MPC tooling" />
            <BenefitItem text="wallet protection tools – approval scanner, revoke-all, hygiene suite" />
            <BenefitItem text="early view of Hopium Diaries & Rekt News video originals" />
            <BenefitItem text="exclusive digital drops & member-only collectibles" />
          </div>

          <div className="mt-8 text-center">
            <p className="font-bold mb-6">rekt basic = stay sharp. stay early.</p>
            <motion.button
              className="bg-black text-white px-6 py-2 text-sm font-bold hover:bg-black/80 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Join rekt basic
            </motion.button>
          </div>
        </motion.div>

        <div className="w-full h-px bg-black/10 my-16"></div>

        {/* OG Tier */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16 w-full"
        >
          <div className="text-center mb-8 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-1">
              OPERATIONAL CLEARANCE
            </div>
            <h2 className="text-2xl font-bold mb-2">rekt OG</h2>
            <p className="text-sm mb-4">for operatives only</p>
            <div className="inline-block border-b border-black/30 px-6 py-2 mb-4">
              <span className="text-xl font-bold">$99</span>
              <span className="text-lg"> / month</span>
            </div>
          </div>

          <div className="space-y-3">
            <BenefitItem text="everything in rekt basic, plus real-world access and elite-tier perks." />
            <BenefitItem text="rekt newspaper – annual print edition. collectible. offline proof you were there" />
          </div>

          <div className="mt-6">
            <h3 className="font-bold text-sm mb-3">vip access:</h3>
            <div className="space-y-3">
              <BenefitItem text="early entry to drops, tools & experimental releases" />
              <BenefitItem text="access to rekt AI – exploit predictors & unreleased scanners" />
              <BenefitItem text="deep-dive reports on attack vectors, token mechanics & protocol intel" />
              <BenefitItem text="private intel briefings – filtered, verified, no noise" />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-bold text-sm mb-3">irl & protocol perks:</h3>
            <div className="space-y-3">
              <BenefitItem text="fast-track access at Rekt News & partner events" />
              <BenefitItem text="OG-only meetups & underground briefings" />
              <BenefitItem text="priority invites to governance experiments & protocol betas" />
              <BenefitItem text="exclusive discounts on infra, privacy tools & field gear" />
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="font-bold mb-6">
              rekt OG = operational clearance.
              <br />
              your edge just got sharper.
            </p>
            <motion.button
              className="bg-black text-white px-6 py-2 text-sm font-bold hover:bg-black/80 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Join rekt OG
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <blockquote className="border-l-2 border-black/50 pl-4 py-2 italic">
            "rekt news is the only source I trust in this space."
            <footer className="text-sm mt-2 opacity-70">— anonymous fund manager</footer>
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mb-16"
        >
          <p className="mb-8">
            rekt has been documenting the collapse of DeFi since 2020. in 2025, we're going deeper.
          </p>

          <div className="text-center py-4 mb-8">
            <p>this is a membership.</p>
            <p>not a movement.</p>
            <p>movements get co-opted.</p>
            <p>we stay anonymous.</p>
            <p>we stay rekt.</p>
          </div>

          <p className="mb-8">
            not for everyone. if you're building, trading, or investing in crypto, you'll want to be here.
          </p>

          <motion.button
            className="bg-black text-white px-8 py-3 text-lg font-bold hover:bg-black/80 transition-all duration-300 mx-auto block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Rekt Club
          </motion.button>

          <p className="mt-4 text-sm opacity-70">Cancel anytime.</p>
        </motion.div>

        <div className="text-center text-sm opacity-70 mt-16">
          <p>powered by Rekt News.</p>
          <p>offset by Offsetra.</p>
        </div>
      </main>

      {/* Footer with social links */}
      <footer className="bg-black text-white text-xs py-3 px-4 text-center w-full mt-auto">
        Receive timely updates regarding Rekt affairs via the communication pathways of one's preference:
        <span className="ml-1 flex flex-wrap justify-center gap-2 mt-1">
          <Link href="https://t.me/RektNews" className="underline hover:text-gray-300 transition-colors">
            TELEGRAM
          </Link>
          <Link href="mailto:info@rekt.news" className="underline hover:text-gray-300 transition-colors">
            EMAIL
          </Link>
          <Link href="https://instagram.com/rektnews" className="underline hover:text-gray-300 transition-colors">
            INSTAGRAM
          </Link>
          <Link href="https://twitter.com/RektHQ" className="underline hover:text-gray-300 transition-colors">
            TWITTER
          </Link>
        </span>
      </footer>
    </div>
  )
}

function BenefitItem({ text }: { text: string }) {
  return (
    <motion.div
      className="flex gap-3 items-start hover:bg-black/5 transition-colors duration-300 p-2"
      whileHover={{ x: 5 }}
    >
      <div className="w-2 h-2 rounded-full bg-black/70 mt-2 shrink-0"></div>
      <p className="text-sm">{text}</p>
    </motion.div>
  )
}
