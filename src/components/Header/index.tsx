import Link from 'next/link';
import {Button} from "../Button";

export const Header = () => {
  return (
    <header className='cabecera'>
      <nav className='menu'>
        <div className='columna1'>
          <Link href="/">
            <img src='/images/logo.png' className='logo' />
          </Link>
        </div>

        <div className='columna2'>
          <Link href="/about">About</Link>
          <Link href="/clothing">Clothing</Link>
          <Link href="/accesories">Accesories</Link>
          <Link href="/services">Services </Link>
        </div>

        <div className='columna3'>
          <Link href="/login">Log in</Link>
          <Link href="/signup">
           <Button text='Sign Up ' />
          </Link>

        </div>



      </nav>


    </header>
  );
}
