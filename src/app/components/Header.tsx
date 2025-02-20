import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-yellow-700 p-4">
      <nav className="flex justify-center space-x-4">
        <Link href="/ressources" className="hover:underline">Ressources</Link>
        <Link href="/armes" className="hover:underline">Armes</Link>
        <Link href="/armures" className="hover:underline">Armures</Link>
        <Link href="/batiments" className="hover:underline">Bâtiments</Link>
        <Link href="/precieuse" className="hover:underline hover:text-yellow-600">Pierres précieuses</Link>
        test
      </nav>
    </header>
  );
};

export default Header;