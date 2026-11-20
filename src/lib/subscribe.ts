// Sends a newsletter sign-up to /api/newsletter. Returns an error message to show
// the visitor, or null when it went through.
export async function subscribe(name: string, email: string, source: string): Promise<string | null> {
  try {
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, source }),
    });
    if (res.ok) return null;
    const data = await res.json().catch(() => ({}));
    return data.error ?? "That did not go through. Please try again.";
  } catch {
    return "That did not go through. Please check your connection and try again.";
  }
}
