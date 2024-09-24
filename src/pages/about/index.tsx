import "../../styles/about.css";
import fotoMinhaBonita from "../../assets/fotoMinhaBonita.jpg"
const About=()=>{
    return(
        <div>
            <h1>Sobre</h1>
            <h2>Minha Imagem</h2>
            <img src={fotoMinhaBonita} alt="Its me Mario!" width={200} />
            <h2>Nome</h2>
            <p>Vinicius José Morais dos Passos</p>
            <h2>Profissão</h2>
            <p>Professor Substituto</p>
            <h2>Biografia</h2>
            <p >
                Nasci em 14 de junho 2003, um sábado, não sei como estava o clima, mas o importante é que eu nasci : ).
                 Moro em Três Barras do Paraná - PR, em um pequeno sítio, no qual realizo tarefas diárias.
                 Hoje aos 21 anos, estou cursando Engenharia de Software no Centro Universitário Assis Gurgacz em Cascavel - PR, acho que estou lascado, mas tudo bem.
                 Sendo assim, a vós que estás lendo, desejo-te alegria e felicidade.

            </p>
            <h2>GitHub</h2>
            <p>
            <a href="https://github.com/VJMPASSOS">GitHub</a>
            </p>
        </div>
    )
}

export default About;