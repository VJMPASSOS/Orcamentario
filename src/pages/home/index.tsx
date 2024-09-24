import "../../styles/about.css";
import Logo from "../../assets/logo2.jsx"; // Renomeando para seguir a convenção de componentes

const Home = () => {
    return (
<div>
    <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>
        Bem-vindo ao Vital Budget
    </h1>
    <h2>
        O que esta aplicação pode fazer por você?
    </h2>
    <p>
        Esta plataforma foi desenvolvida para simplificar sua vida financeira, fornecendo informações essenciais que auxiliam na tomada de decisões inteligentes e conscientes. 
    </p>
    <h2>
        Como funciona?
    </h2>
    <p>
        Com o Vital Budget, você tem total controle sobre suas finanças. Aqui está o que você pode fazer:
    </p>
    <ul>
        <li>Adicione e gerencie suas despesas de maneira simples e rápida.</li>
        <li>Edite ou exclua qualquer despesa com facilidade.</li>
        <li>Monitore seu saldo em tempo real, sempre atualizado.</li>
        <li>Inclua novas receitas a qualquer momento para manter seu orçamento sempre organizado.</li>
    </ul>
    <p>
        Tudo isso em uma interface amigável e intuitiva, feita para que você tenha o máximo de controle e clareza sobre suas finanças.
    </p>
</div>
    );
}

export default Home;
