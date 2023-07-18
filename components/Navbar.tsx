import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="h-20 fixed top-0 left-0 right-0 bg-light/90 backdrop-blur-lg border-b border-dark/10  z-[100]">
      <div className="wrapper w-full h-full flex justify-between items-center">
        {/* NAV LEFT  */}
        <nav>
          <Link href="/" className="text-xl font-semibold link-item">
            Sparkle Bazaar
          </Link>
        </nav>
        {/* NAV MID  */}
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/" className="link-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="link-item">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-item">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-item">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* NAV RIGHT  */}
        <nav>
          <Button href="/login" placeholder="Login" color="yellow" />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
