"use client";

import { useEffect } from "react";

const CALENDLY_URL =
  "https://calendly.com/the8thfire/trance-medicine-private-session";

export default function CalendlyEmbed() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src =
        "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full"
      data-url={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=2F2925&text_color=EADDC8&primary_color=D9AA3A`}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
