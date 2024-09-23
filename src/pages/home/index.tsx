import "../../styles/home.css";
import Logo from "../../assets/logo2.jsx"; // Renomeando para seguir a convenção de componentes

const Home = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>
                Home Sweet Home
            </h1>
            <h2>
                O que esta aplicação vos oferece?
            </h2>
            <p>
                Fornece informações financeiras essenciais para a tomada de decisões.
            </p>
            <h2>
                Como funciona?
            </h2>
            <p>
                Você pode criar e adicionar novas despesas, além de também editá-las e excluí-las.<br />
                Você pode verificar seu saldo.<br />
                Você adiciona receitas a hora que quiser.
            </p>
        </div>
    );
}

export default Home;
