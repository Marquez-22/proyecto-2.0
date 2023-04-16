import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <img src='/images/logo.png' />
        </Link>
        <Link href="/about">About</Link>
        <Link href="/clothing">Clothing</Link>
        <Link href="/accesories">Accesories</Link>
        <Link href="/services">Services </Link>
        <Link href="/login">Log in</Link>
        <Link href="/signup">
          <button>Sign Up</button>
        </Link>
      </nav>
    </header>
  );
}
