"use client";

import BentoItem from "@/components/BentoItem";
import { Github, Linkedin, Mail, ArrowUpRight, Activity } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-8">
        <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-white/10 shadow-2xl">
           {/* Placeholder for Profile Picture */}
           <div className="w-full h-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center">
             <span className="text-2xl font-bold text-white/50">EG</span>
           </div>
           {/* Uncomment below when you have an actual image */}
           {/* <Image src="/profile.jpg" alt="Eginanjar" fill className="object-cover" /> */}
        </div>
        
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Eginanjar</h1>
          <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
            Product Orchestrator
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Featured Project - Large Item */}
        <a href="https://github.com/eginanjarid" target="_blank" rel="noopener noreferrer" className="md:col-span-2">
          <BentoItem className="h-64 bg-gradient-to-br from-purple-900/40 to-black/20 group" delay={0.1}>
            <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
            
            <div className="mt-auto">
              <div className="flex items-center gap-2 mb-2">
                <Github className="w-5 h-5 text-purple-300" />
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-200">Featured</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">GitHub Portfolio</h3>
              <p className="text-sm text-gray-400">Explore my open source contributions and coding experiments.</p>
            </div>
          </BentoItem>
        </a>

        {/* LinkedIn - Medium Item */}
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <BentoItem className="h-40 bg-gradient-to-br from-blue-900/40 to-black/20" delay={0.2}>
             <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
            <Linkedin className="w-8 h-8 text-blue-400 mb-auto" />
            <div>
              <h3 className="font-semibold text-white">LinkedIn</h3>
              <p className="text-xs text-gray-400">Connect professionally</p>
            </div>
          </BentoItem>
        </a>

        {/* Email - Medium Item */}
        <a href="mailto:hello@eginanjar.id">
          <BentoItem className="h-40 bg-gradient-to-br from-emerald-900/40 to-black/20" delay={0.3}>
             <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
            <Mail className="w-8 h-8 text-emerald-400 mb-auto" />
            <div>
              <h3 className="font-semibold text-white">Email</h3>
              <p className="text-xs text-gray-400">Get in touch</p>
            </div>
          </BentoItem>
        </a>

        {/* Current Status - Wide Item */}
        <div className="md:col-span-2">
          <BentoItem className="flex-row items-center justify-start gap-4 p-4 min-h-[80px]" delay={0.4}>
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">Current Status</p>
              <p className="text-sm font-medium text-white">Open for new opportunities & collaborations</p>
            </div>
            <Activity className="ml-auto w-5 h-5 text-gray-600" />
          </BentoItem>
        </div>

      </div>

      {/* Footer */}
      <footer className="pt-8 text-center text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} Eginanjar. All rights reserved.</p>
      </footer>
    </div>
  );
}
