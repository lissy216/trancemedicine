// Morrow, the Trance Medicine chatbot: name, words and colours.

export const GUIDE = {
  name: 'Morrow',
  role: 'AI guide to Trance Medicine',
  greeting:
    "Hello. I'm Morrow, an AI chatbot for Trance Medicine. I can answer questions about private hypnosis sessions, The Quiet Fire CPH training, the book, and how to get in touch. I'm not a person, and I'm not Miskwa Kimiwan.",
  starters: [
    'What happens in a private session?',
    'Tell me about the CPH training',
    'Is hypnosis safe for me?',
  ],
  placeholder: 'Ask about sessions or training',
  footnote:
    'Not for crisis support. In Canada or the US, call or text 988. Chats are not saved here.',
}

// Hosts allowed to call the chatbot. A leading dot allows any subdomain.
export const GUIDE_ALLOWED_HOSTS = ['trancemedicine.com', '.trancemedicine.com']
// Vercel preview addresses for this project start with this.
export const GUIDE_VERCEL_PREFIX = 'trancemedicine'

export const GUIDE_STYLE = {
  launcher: 'bg-charcoal/95 border-gold/70 hover:border-gold text-parchment',
  panel: 'bg-parchment border-charcoal/30 text-charcoal font-body',
  title: 'font-heading text-charcoal',
  accent: 'text-gold',
  muted: 'text-charcoal/60',
  rule: 'border-charcoal/15',
  chip: 'border-charcoal/25 text-charcoal/80 hover:border-earth hover:text-charcoal',
  userBubble: 'bg-charcoal text-parchment',
  input: 'bg-white/70 border-charcoal/25 text-charcoal placeholder:text-charcoal/50 focus:border-earth',
  button: 'border-earth text-earth hover:bg-earth/10',
  link: 'text-earth decoration-earth/50 hover:text-charcoal',
}
