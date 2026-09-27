"use client";

import { useState } from "react";
import { CreditCard, Copy, Check, Heart, Sparkles, Gift } from "lucide-react";

export default function GiftRegistry() {
  const [copied, setCopied] = useState(false);

  const accountDetails = {
    bank: "United Bank for Africa (UBA)",
    accountNumber: "205973632",
    accountName: "Ololade Martha & Oluwadamilola Ayomide",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(accountDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="gifts" className="py-20 px-4 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#2D6A4F]/30 bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold uppercase tracking-widest">
            <Gift className="w-3.5 h-3.5 text-[#D96B27]" />
            <span>Blessing The Couple</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B4332]">
            Gifts &amp; <span className="text-[#D96B27]">Monetization</span>
          </h2>
          <p className="font-serif italic text-sm sm:text-base text-[#4A2511] font-semibold max-w-xl mx-auto">
            &ldquo;Your presence is our greatest gift. However, for those who wish to bless the couple, gifts may be monetized.&rdquo;
          </p>
        </div>

        {/* Bank Details Card */}
        <div className="iv-card p-8 sm:p-10 rounded-3xl border-2 border-[#D96B27]/30 shadow-xl space-y-6 max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-[#1B4332] text-white flex items-center justify-center mx-auto shadow-md">
            <CreditCard className="w-8 h-8 text-[#D96B27]" />
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Official Wedding Gift Bank Account</span>
            <h3 className="font-serif text-2xl font-bold text-[#1B4332]">
              {accountDetails.bank}
            </h3>
          </div>

          {/* Large Copyable Account Number */}
          <div className="bg-[#F3EFEA] p-6 rounded-2xl border border-[#2D6A4F]/20 space-y-3">
            <span className="text-xs uppercase font-bold text-[#4A2511] tracking-wider block">UBA Account Number</span>
            <div className="font-mono text-3xl sm:text-4xl font-bold text-[#1B4332] tracking-widest">
              {accountDetails.accountNumber}
            </div>
            <p className="text-xs text-slate-600 font-medium">
              Account Name: <strong className="text-[#1B4332] font-semibold">{accountDetails.accountName}</strong>
            </p>

            <button
              onClick={handleCopy}
              className="mt-3 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#D96B27] text-white hover:bg-[#E76F51] transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Account Number Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-white" />
                  <span>Copy Account Number</span>
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-slate-500 font-medium">
            Thank you for your generous love, support, and prayers as we begin our new life together!
          </p>
        </div>
      </div>
    </section>
  );
}
