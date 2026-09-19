"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAuth, useSettings } from "@/components/AuthProvider";

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout, loading } = useAuth();
  const { setIsSettingsOpen, t } = useSettings();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 sm:h-16 bg-white border-b border-[#e7e5e4] transition-all flex items-center shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-8 flex items-center justify-between relative">
        
        {/* Left: Brand Logo & Wordmark */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group" title="Vora Earth">
          <Image
            src="/logo-wordmark.png"
            alt="Vora Earth"
            width={120}
            height={32}
            priority
            className="h-4.5 sm:h-5.5 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <svg
            className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#616c39] translate-y-[2px] transition-transform duration-500 group-hover:scale-110 shrink-0"
            viewBox="0 0 512 512"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M177.8 63.2l10 17.4c2.8 4.8 4.2 10.3 4.2 15.9l0 41.4c0 3.9 1.6 7.7 4.3 10.4c6.2 6.2 16.5 5.7 22-1.2l13.6-17c4.7-5.9 12.9-7.7 19.6-4.3l15.2 7.6c3.4 1.7 7.2 2.6 11 2.6c6.5 0 12.8-2.6 17.4-7.2l3.9-3.9c2.9-2.9 7.3-3.6 11-1.8l29.2 14.6c7.8 3.9 12.6 11.8 12.6 20.5c0 10.5-7.1 19.6-17.3 22.2l-35.4 8.8c-7.4 1.8-15.1 1.5-22.4-.9l-32-10.7c-3.3-1.1-6.7-1.7-10.2-1.7c-7 0-13.8 2.3-19.4 6.5L176 212c-10.1 7.6-16 19.4-16 32l0 28c0 26.5 21.5 48 48 48l32 0c8.8 0 16 7.2 16 16l0 48c0 17.7 14.3 32 32 32c10.1 0 19.6-4.7 25.6-12.8l25.6-34.1c8.3-11.1 12.8-24.6 12.8-38.4l0-12.1c0-3.9 2.6-7.3 6.4-8.2l5.3-1.3c11.9-3 20.3-13.7 20.3-26c0-7.1-2.8-13.9-7.8-18.9l-33.5-33.5c-3.7-3.7-3.7-9.7 0-13.4c5.7-5.7 14.1-7.7 21.8-5.1l14.1 4.7c12.3 4.1 25.7-1.5 31.5-13c3.5-7 11.2-10.8 18.9-9.2l27.4 5.5C432 112.4 351.5 48 256 48c-27.7 0-54 5.4-78.2 15.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>
          </svg>
        </Link>

        {/* Center links (Desktop-only) */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link 
            href="/gallery" 
            className={"text-xs sm:text-sm transition-colors duration-150 " + (pathname === "/gallery" ? "text-[#292524] font-medium" : "text-[#79716b] hover:text-[#292524]")}
          >
            {t("nav.gallery")}
          </Link>
          {user && (
            <Link 
              href="/my-plots" 
              className={"text-xs sm:text-sm transition-colors duration-150 " + (pathname === "/my-plots" ? "text-[#292524] font-medium" : "text-[#79716b] hover:text-[#292524]")}
            >
              {t("nav.myPlots")}
            </Link>
          )}
        </div>

        {/* Right action links */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-h-[32px]">
          
          {/* Settings Button */}
          <button
            type="button"
            onClick={() => setIsSettingsOpen(true)}
            className="p-1.5 text-[#79716b] hover:text-[#292524] hover:bg-[#fafaf9] border border-[#e7e5e4] rounded-lg transition-colors cursor-pointer shrink-0"
            title={t("nav.settings")}
            aria-label="Settings"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          {/* New Scan Action Button */}
          <Link
            href="/reconstruct"
            className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.04em] bg-[#616c39] text-white hover:bg-[#4e572c] px-3.5 py-1.5 rounded-lg transition-colors duration-150 flex items-center justify-center gap-1.5 shrink-0 shadow-none cursor-pointer"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            {t("nav.newScan")}
          </Link>

          {/* Auth status (Desktop-only) */}
          {!loading && (
            <div className="hidden md:flex items-center gap-2.5">
              {user ? (
                <div className="flex items-center gap-2.5">
                  <span className="text-xs text-[#79716b] font-medium bg-[#fafaf9] border border-[#e7e5e4] px-2.5 py-1.5 rounded-lg">
                    {user.display_name || user.username}
                  </span>
                  <button
                    onClick={logout}
                    className="text-xs text-[#79716b] font-semibold hover:text-[#ff0000] transition-colors cursor-pointer"
                  >
                    {t("nav.logout")}
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link
                    href="/login"
                    className="text-xs font-semibold uppercase tracking-[0.04em] text-[#79716b] hover:text-[#292524] px-2 py-1.5 transition-colors cursor-pointer"
                  >
                    {t("nav.login")}
                  </Link>
                  <Link
                    href="/register"
                    className="text-xs font-semibold uppercase tracking-[0.04em] border border-[#e7e5e4] hover:border-[#292524] text-[#292524] px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer bg-transparent"
                  >
                    {t("nav.register")}
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Hamburger Menu Button (Mobile-only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex md:hidden p-1.5 text-[#79716b] hover:text-[#292524] hover:bg-[#e7e5e4]/50 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-[#e7e5e4] shadow-lg px-6 py-5 flex flex-col gap-3.5 md:hidden z-40 animate-fadeIn">
          <Link
            href="/gallery"
            onClick={() => setMenuOpen(false)}
            className={"text-sm py-1.5 font-medium transition " + (pathname === "/gallery" ? "text-[#292524] font-semibold" : "text-[#79716b] hover:text-[#292524]")}
          >
            {t("nav.gallery")}
          </Link>
          {user && (
            <Link
              href="/my-plots"
              onClick={() => setMenuOpen(false)}
              className={"text-sm py-1.5 font-medium transition " + (pathname === "/my-plots" ? "text-[#292524] font-semibold" : "text-[#79716b] hover:text-[#292524]")}
            >
              {t("nav.myPlots")}
            </Link>
          )}

          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              setIsSettingsOpen(true);
            }}
            className="text-left text-sm py-1.5 font-medium text-[#79716b] hover:text-[#292524] flex items-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {t("nav.settings")}
          </button>
          
          <div className="h-px bg-[#e7e5e4] my-1" />

          {!loading && (
            user ? (
              <div className="flex flex-col gap-3">
                <span className="text-xs text-[#79716b] font-medium bg-[#fafaf9] border border-[#e7e5e4] px-3 py-2 rounded-xl self-start">
                  {t("nav.user")}: {user.display_name || user.username}
                </span>
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="text-xs text-[#ff0000] font-bold text-left py-1.5 transition-colors cursor-pointer"
                >
                  {t("nav.logout")}
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-semibold text-[#79716b] hover:text-[#292524] py-1"
                >
                  {t("nav.login")}
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-semibold border border-[#e7e5e4] text-center hover:bg-[#fafaf9] text-[#292524] py-2.5 rounded-xl transition-all cursor-pointer"
                >
                  {t("nav.register")}
                </Link>
              </div>
            )
          )}
        </div>
      )}
    </nav>
  );
}
