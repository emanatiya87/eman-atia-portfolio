import { ContactForm } from "@/components/Contact/ContactForm";
import { CopyableContact } from "@/components/CopyableContact";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-ink px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          Get In Touch
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
          Don&apos;t hesitate to reach out
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-balance text-sm text-muted sm:text-base">
          Have a project in mind, need a hand, or just want to share an idea
          or some feedback? I&apos;d love to hear from you.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <CopyableContact type="email" value="Emanatiya87@gmail.com" display="Emanatiya87@gmail.com" />
          <CopyableContact type="phone" value="+201113364852" display="+20 111 336 4852" />
        </div>

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
