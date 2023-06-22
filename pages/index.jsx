import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Trabalho 2 Etapa</title>
      </Head>
      <h1>Aluno: José Henrique</h1>
      <h2>Trabalho Next.js Etapa 2</h2>
      {/* <h2>{process.env.NEXT_PUBLIC_API_URL}</h2> */}
      <br />
      <Link href="/CSR">CSR</Link>
      <br />
      <Link href="/SSR">SSR</Link>
      <br />
      <Link href="/SSG">SSG</Link>    
      <br />
      <Link href="/ISR">ISR</Link>        

    </div>
  )
}