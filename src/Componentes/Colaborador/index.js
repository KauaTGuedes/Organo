import { IoMdCloseCircle } from 'react-icons/io';
import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo, corDeFundo }) => {
    return (<div className='colaborador'>
       < IoMdCloseCircle size={10} ClassName="deletar" onClick={aoDeletar} />
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={Colaborador.imagem} alt={Colaborador.nome}/>
        </div>
        <div className='rodape'>
            <h4>{Colaborador.nome}</h4>
            <h5>{Colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador