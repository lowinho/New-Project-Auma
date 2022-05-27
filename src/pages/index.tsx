import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>Links</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/auma">
            <a>Auma</a>
          </Link>
        </li>
        <li>
          <Link href="/autismo">
            <a>Autismo</a>
          </Link>
        </li>
        <li>
          <Link href="/midia">
            <a>Midia</a>
          </Link>
        </li>
        <li>
          <Link href="/contato">
            <a>Contato</a>
          </Link>
        </li>
        <li>
          <Link href="/contas">
            <a>Prestação de contas</a>
          </Link>
        </li>
      </ul>
    </Container>
  )
}

export default Home
