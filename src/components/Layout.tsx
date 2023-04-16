import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
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
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
