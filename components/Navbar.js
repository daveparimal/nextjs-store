import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  function isActive(route) {
    if (route == router.pathname) {
      return "active";
    } else "";
  }
  return (
    <nav>
      <div className="nav-wrapper #0d47a1 blue darken-4">
        <Link href="/">
          <a className="brand-logo left">Logo</a>
        </Link>
        <ul id="nav-mobile" className="right">
          <li className={isActive("/login")}>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          <li className={isActive("/signup")}>
            <Link href="/signup">
              <a>Sign up</a>
            </Link>
          </li>
          <li className={isActive("/create")}>
            <Link href="/create">
              <a>Create</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
