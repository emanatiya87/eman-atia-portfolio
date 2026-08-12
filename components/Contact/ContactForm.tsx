"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "@/lib/schemas/contact";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-lg border border-white/10 bg-panel/60 px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-xl space-y-4">
      <div>
        <input
          {...register("name")}
          placeholder="Your name"
          className={cn(fieldClass, errors.name && "border-red-400/60")}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input
            {...register("email")}
            placeholder="Email address"
            type="email"
            className={cn(fieldClass, errors.email && "border-red-400/60")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("mobile")}
            placeholder="Mobile number"
            type="tel"
            className={cn(fieldClass, errors.mobile && "border-red-400/60")}
          />
          {errors.mobile && (
            <p className="mt-1 text-xs text-red-400">{errors.mobile.message}</p>
          )}
        </div>
      </div>

      <div>
        <textarea
          {...register("message")}
          placeholder="Tell me a bit about what you need"
          rows={5}
          className={cn(fieldClass, "resize-none", errors.message && "border-red-400/60")}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-center text-sm text-emerald-400">
          Thanks — your message is in! I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Please try again in a moment.
        </p>
      )}
    </form>
  );
}
