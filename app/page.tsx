export default function Page() {
  const faqs = [
    {
      q: "Which cloud providers are supported?",
      a: "We support AWS, Google Cloud, Azure, and DigitalOcean as both source and target providers, covering 95% of enterprise workloads."
    },
    {
      q: "How accurate are the cost estimates?",
      a: "Our AI cross-references live pricing APIs from all major providers, giving estimates within 10-15% of actual migration costs."
    },
    {
      q: "Is my infrastructure data kept private?",
      a: "Yes. All infrastructure inputs are encrypted in transit, never stored permanently, and never used to train AI models."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          DevOps Tools
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Escape Cloud Vendor Lock-In —{" "}
          <span className="text-[#58a6ff]">On Your Terms</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Cloud Exit Planner generates AI-powered, step-by-step migration strategies with real cost estimates so your team can switch providers without surprises.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-10 py-4 rounded-xl transition-colors duration-200"
        >
          Start Your Exit Plan — $49/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No infrastructure access required to get started.</p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🗺️", title: "Step-by-Step Roadmap", desc: "Ordered migration tasks with owner assignments and dependency mapping." },
            { icon: "💰", title: "Live Cost Estimates", desc: "Real-time pricing from AWS, GCP, Azure, and DigitalOcean APIs." },
            { icon: "⏱️", title: "Timeline Projections", desc: "Realistic sprint-by-sprint timelines based on your team size and stack." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-4">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$49<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to migrate with confidence</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited migration plans",
              "AI-generated step-by-step roadmaps",
              "Live multi-cloud cost comparison",
              "Timeline & sprint breakdowns",
              "PDF export for stakeholders",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Cloud Exit Planner. Built for CTOs and DevOps teams.
      </footer>
    </main>
  );
}
