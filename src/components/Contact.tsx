"use client";

import { MapPin, Mail, Phone, ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, useRef, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { siteConfig } from "@/lib/config";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!executeRecaptcha) {
      setFormState("error");
      setErrorMessage("reCAPTCHA not ready. Please try again.");
      return;
    }

    let captchaToken: string;
    try {
      captchaToken = await executeRecaptcha("contact_form");
    } catch {
      setFormState("error");
      setErrorMessage("reCAPTCHA verification failed. Please try again.");
      return;
    }

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      captchaToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setFormState("success");
      formRef.current?.reset();
    } catch (err) {
      setFormState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }, [executeRecaptcha]);

  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-warm-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] text-gold-500 uppercase">
              Get in Touch
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
              Let&apos;s Build Something{" "}
              <span className="text-gold-500">Extraordinary</span>
            </h2>
            <p className="mt-6 text-lg text-navy-700/60 leading-relaxed">
              Ready to take your business to the next level? Whether you&apos;re
              exploring new markets or seeking to optimise your current
              operations, we&apos;re here to help.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-gold-500">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-950">Office</h4>
                  <p className="mt-1 text-sm text-navy-700/60">
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-gold-500">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-950">Email</h4>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block text-sm text-navy-700/60 hover:text-gold-500 transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-gold-500">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-950">Phone</h4>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-sm text-navy-700/60 hover:text-gold-500 transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 lg:p-10 shadow-sm border border-navy-950/5">
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600 mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-navy-950">Thank You</h3>
                <p className="mt-3 text-navy-700/60">
                  We&apos;ve received your message and will be in touch within 24
                  hours.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-8 text-sm font-medium text-gold-500 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-950 mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={formState === "submitting"}
                    className="w-full rounded-lg border border-navy-950/10 bg-warm-50 px-4 py-3 text-sm text-navy-950 placeholder:text-navy-700/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-950 mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={formState === "submitting"}
                    className="w-full rounded-lg border border-navy-950/10 bg-warm-50 px-4 py-3 text-sm text-navy-950 placeholder:text-navy-700/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors disabled:opacity-50"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-950 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    disabled={formState === "submitting"}
                    className="w-full rounded-lg border border-navy-950/10 bg-warm-50 px-4 py-3 text-sm text-navy-950 placeholder:text-navy-700/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors disabled:opacity-50"
                    placeholder="+971 50 000 0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-950 mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    disabled={formState === "submitting"}
                    className="w-full rounded-lg border border-navy-950/10 bg-warm-50 px-4 py-3 text-sm text-navy-950 placeholder:text-navy-700/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors resize-none disabled:opacity-50"
                    placeholder="Tell us about your project or enquiry..."
                  />
                </div>

                {formState === "error" && errorMessage && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                    <AlertCircle size={16} className="shrink-0" />
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full rounded-full bg-navy-950 px-8 py-4 text-sm font-semibold text-white hover:bg-navy-800 transition-colors duration-200 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === "submitting" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
