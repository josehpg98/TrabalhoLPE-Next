function SSR({ pessoas }) {
    return (
        <div>
            <h1>Trabalho Next.js - SSR</h1>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>cidade</th>
                        <th>uf</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pessoas.map(obj => (
                            <tr key={obj.codigo}>
                                <td>{obj.codigo}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.cidade}</td>
                                <td>{obj.uf}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SSR;

export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pessoas`);
    const pessoas = await res.json();

    return {
        props: {
            pessoas
        }
    }
}