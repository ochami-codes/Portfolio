export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center rounded-t-2xl shadow-inner">
      <p className="text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">
          Ochami
        </span>{" "}
        — All Rights Reserved.
      </p>
    </footer>
  );
}