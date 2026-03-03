"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type CookiePreferences = {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_KEY = "gmc_cookie_consent";

function getCookieConsent(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(COOKIE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function saveCookieConsent(prefs: CookiePreferences) {
  localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const existing = getCookieConsent();
    if (!existing) {
      setVisible(true);
    }
  }, []);

  function acceptAll() {
    const all: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    saveCookieConsent(all);
    setVisible(false);
  }

  function rejectAll() {
    const minimal: CookiePreferences = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    saveCookieConsent(minimal);
    setVisible(false);
  }

  function savePreferences() {
    saveCookieConsent(prefs);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100]">
      <div className="bg-white border-t border-navy-950/10 shadow-[0_-4px_30px_rgba(0,0,0,0.08)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          {showDetails && (
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <CookieToggle
                label="Strictly Necessary"
                description="Essential for the website to function."
                checked={true}
                disabled
              />
              <CookieToggle
                label="Functional"
                description="Remember your preferences and settings."
                checked={prefs.functional}
                onChange={(v) => setPrefs({ ...prefs, functional: v })}
              />
              <CookieToggle
                label="Analytics"
                description="Understand how visitors use our site."
                checked={prefs.analytics}
                onChange={(v) => setPrefs({ ...prefs, analytics: v })}
              />
              <CookieToggle
                label="Marketing"
                description="Deliver relevant advertisements."
                checked={prefs.marketing}
                onChange={(v) => setPrefs({ ...prefs, marketing: v })}
              />
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="flex-1 text-sm text-navy-700/60 leading-relaxed">
              We use cookies to enhance your experience.{" "}
              <Link
                href="/cookies"
                className="text-gold-500 hover:underline"
              >
                Cookie Policy
              </Link>
            </p>
            <div className="flex items-center gap-2 shrink-0">
              {showDetails ? (
                <button
                  onClick={savePreferences}
                  className="rounded-full border border-gold-500 px-5 py-2 text-sm font-semibold text-gold-500 hover:bg-gold-500 hover:text-navy-950 transition-colors"
                >
                  Save Preferences
                </button>
              ) : (
                <button
                  onClick={() => setShowDetails(true)}
                  className="rounded-full border border-navy-950/10 px-5 py-2 text-sm font-medium text-navy-700/60 hover:text-navy-950 hover:border-navy-950/20 transition-colors"
                >
                  Manage
                </button>
              )}
              <button
                onClick={rejectAll}
                className="rounded-full border border-navy-950/10 px-5 py-2 text-sm font-semibold text-navy-950 hover:bg-navy-950/5 transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={acceptAll}
                className="rounded-full bg-navy-950 px-5 py-2 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CookieToggle({
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (val: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg bg-warm-50 px-4 py-3">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-navy-950">{label}</p>
        <p className="text-xs text-navy-700/50 truncate">{description}</p>
      </div>
      <button
        type="button"
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
          checked ? "bg-gold-500" : "bg-navy-950/10"
        } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
