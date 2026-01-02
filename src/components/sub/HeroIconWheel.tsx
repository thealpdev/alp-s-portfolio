"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Atom,
    Code2,
    Database,
    FileJson,
    Globe,
    Layout,
    Server,
    Terminal
} from "lucide-react";

const HeroIconWheel = () => {
    return (
        <div className="relative flex h-[600px] w-[600px] items-center justify-center rounded-full">
            {/* Radar/Grid Lines Background */}
            <div className="absolute inset-0 z-0">
                <svg className="h-full w-full opacity-20" viewBox="0 0 600 600">
                    <circle cx="300" cy="300" r="100" fill="none" stroke="white" strokeWidth="1" />
                    <circle cx="300" cy="300" r="200" fill="none" stroke="white" strokeWidth="1" />
                    <circle cx="300" cy="300" r="280" fill="none" stroke="white" strokeWidth="1" />
                    <line x1="300" y1="0" x2="300" y2="600" stroke="white" strokeWidth="1" />
                    <line x1="0" y1="300" x2="600" y2="300" stroke="white" strokeWidth="1" />
                    <line x1="88" y1="88" x2="512" y2="512" stroke="white" strokeWidth="1" />
                    <line x1="512" y1="88" x2="88" y2="512" stroke="white" strokeWidth="1" />
                </svg>
            </div>

            {/* Central Icon */}
            <div className="z-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-900/50 border border-purple-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(112,66,248,0.3)]">
                <Code2 className="h-12 w-12 text-purple-400" />
            </div>

            {/* Orbiting Icons */}
            {/* Top */}
            <div className="absolute top-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-sm animate-pulse-slow">
                <Atom className="h-10 w-10 text-cyan-400" />
            </div>

            {/* Top Right */}
            <div className="absolute top-24 right-20 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-sm">
                <FileJson className="h-8 w-8 text-yellow-400" />
            </div>

            {/* Right */}
            <div className="absolute right-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-sm">
                <Server className="h-10 w-10 text-green-400" />
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-24 right-20 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-sm">
                <Database className="h-8 w-8 text-orange-400" />
            </div>

            {/* Bottom */}
            <div className="absolute bottom-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-sm">
                <Terminal className="h-10 w-10 text-white" />
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-24 left-20 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-sm">
                <Layout className="h-8 w-8 text-pink-400" />
            </div>

            {/* Left */}
            <div className="absolute left-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-sm">
                <Globe className="h-10 w-10 text-blue-400" />
            </div>

            {/* Top Left */}
            <div className="absolute top-24 left-20 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-sm">
                <span className="text-xl font-bold text-white">TS</span>
            </div>

        </div>
    );
};

export default HeroIconWheel;
