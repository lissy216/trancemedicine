import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms of Service",
  description: "Privacy policy and terms of service for Trance Medicine.",
};

export default function Legal() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6" style={{ backgroundColor: "#2F2925" }}>
        <div className="max-w-2xl mx-auto">
          <h1
            className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "Georgia, serif", color: "#EADDC8" }}
          >
            Privacy &amp; Terms
          </h1>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="py-20 px-6" style={{ backgroundColor: "#EADDC8" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl mb-8"
            style={{ fontFamily: "Georgia, serif", color: "#2F2925" }}
          >
            Privacy Policy
          </h2>
          <p className="text-xs mb-8 italic" style={{ color: "#8A4F36" }}>
            This policy has been reviewed by a Canadian-licensed legal professional. Last updated 2026.
          </p>
          <div className="space-y-8 text-sm leading-relaxed" style={{ color: "#2F2925" }}>
            {[
              {
                title: "Data Collection",
                body: "Personal information collected includes name, email address, intake form responses, and booking data. Information is collected only when you voluntarily provide it — through the newsletter signup, contact form, session intake, or program enrollment. Information is used solely to deliver the services you have requested.",
              },
              {
                title: "Email Communications",
                body: "Email addresses are used for newsletter delivery, booking confirmations, and program communications. You can unsubscribe at any time using the link in any email. Email lists are never sold or shared with third parties.",
              },
              {
                title: "Booking and Session Data",
                body: "Session booking data and intake form responses are stored securely and used only to provide services. Session content is confidential and is not disclosed to third parties except where required by law. Retention periods follow applicable Canadian privacy legislation.",
              },
              {
                title: "Cookies and Analytics",
                body: "This site uses minimal cookies for functional purposes. Analytics may be collected in aggregate, anonymized form to understand how the site is used. You can manage cookie preferences through your browser settings.",
              },
              {
                title: "Third-Party Services",
                body: "Third-party services that handle data on this site may include email delivery providers, booking systems, and payment processors. Each operates under its own privacy policy. No sensitive session content is shared with any third-party service.",
              },
            ].map((section) => (
              <div key={section.title}>
                <h3
                  className="text-base mb-3"
                  style={{ fontFamily: "Georgia, serif", color: "#8A4F36" }}
                >
                  {section.title}
                </h3>
                <p>{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section id="terms" className="py-20 px-6" style={{ backgroundColor: "#2F2925" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl mb-8"
            style={{ fontFamily: "Georgia, serif", color: "#D9AA3A" }}
          >
            Terms of Service
          </h2>
          <p className="text-xs mb-8 italic" style={{ color: "#B38A32" }}>
            This document has been reviewed by a Canadian-licensed legal professional. Last updated 2026.
          </p>
          <div className="space-y-8 text-sm leading-relaxed" style={{ color: "#EADDC8" }}>
            {[
              {
                title: "Scope of Practice",
                body: "Hypnosis services provided here are not therapy, not medical treatment, and not a substitute for professional mental health care. Referrals to appropriate professionals are made when indicated. Clients are responsible for disclosing relevant medical and mental health history during intake.",
              },
              {
                title: "Session Policies",
                body: "Cancellations require a minimum of 48 hours notice. Late arrivals may result in a shortened session at the full session rate. Sessions are not recorded without explicit consent. Session content is held in confidence by the practitioner within applicable legal and ethical limits.",
              },
              {
                title: "Program Enrollment",
                body: "Enrollment in The Quiet Fire CPH program is subject to the terms provided at the time of enrollment. Refund policies, completion requirements, and deferral options are outlined in the enrollment agreement. Course materials remain the intellectual property of Trance Medicine and may not be reproduced or distributed without written permission.",
              },
              {
                title: "Limitation of Liability",
                body: "No guarantees of specific outcomes are made for any service, session, or program. Clients and students take full responsibility for their own wellbeing and decisions. Trance Medicine is not liable for decisions made based on information provided through this site or any of its programs.",
              },
            ].map((section) => (
              <div key={section.title}>
                <h3
                  className="text-base mb-3"
                  style={{ fontFamily: "Georgia, serif", color: "#B38A32" }}
                >
                  {section.title}
                </h3>
                <p>{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
