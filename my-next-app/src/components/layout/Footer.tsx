export default function Footer() {
  return (
    <footer className="bg-[var(--color-background)] border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-[var(--color-border)]">
        © {new Date().getFullYear()} Ian Ochami. All rights reserved.
      </div>
    </footer>
  );
}
