import {Link} from '../Link';
import {Button} from "../Button";
import { Container } from '../Container';

export const Header = () => {
  return (
    <header className='cabecera'>
      <Container>
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
           <Button>
            Sign Up
            </Button>
          </Link>

        </div>
 


      </nav>
      </Container>

    </header>
  );
}
