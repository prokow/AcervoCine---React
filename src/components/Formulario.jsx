import { useState } from 'react';
import { useParams } from 'react-router-dom';
import imagemEstrela from './estrela.png'; // Importação de imagem
import './Formulario.css'; // Importação do CSS

// Evento de Formulario(onSubmit - usado para enviar o formulario)
// Evento de Formulario(onChange - usado para capturar os campos dos inputs)
const Formulario = ({ onSubmit }) => {
  const { id } = useParams();
  const [critica, setCritica] = useState({
    nome: '',
    email: '',
    dataNascimento: '', 
    rating: 3,
    comentario: '',
    spoiler: false,
    tipo: 'critica',
    anexo: null
  });
  const [mensagemSucesso, setMensagemSucesso] = useState('');

  // Eventos variados
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setCritica(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : 
              type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Avaliação enviada:', critica);
    onSubmit({ ...critica, filmeId: id });
    setMensagemSucesso('Avaliação Enviada com Sucesso!');
    setTimeout(() => setMensagemSucesso(''), 3000); // Remove a mensagem após 3 segundos
  };

  return (
    <form onSubmit={handleSubmit} className="form-critica">
      <h2>Avalie o Filme</h2>
      
      {/* Text Input */}
      <label className="form-label">
        Nome:
        <input 
          type="text" 
          name="nome" 
          value={critica.nome}
          onChange={handleChange}
          required
        />
      </label>

      {/* Email Input */}
      <label className="form-label">
        Email:
        <input
          type="email"
          name="email"
          value={critica.email}
          onChange={handleChange}
          required
        />
      </label>

      {/* Date Input */}
      <label className="form-label">
        Data de Nascimento:
        <input
          type="date"
          name="dataNascimento"
          value={critica.dataNascimento}
          onChange={handleChange}
          required
        />
      </label>

      {/* Number Input */}
      <label className="form-label">
        Nota (1-5):
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          value={critica.rating}
          onChange={handleChange}
        />
        <div className="rating-stars">
          {[...Array(Number(critica.rating))].map((_, index) => (
            <img key={index} src={imagemEstrela} alt="Estrela" className="estrela" />
          ))}
        </div>
      </label>

      {/* Textarea */}
      <label className="form-label">
        Comentário:
        <textarea
          name="comentario"
          value={critica.comentario}
          onChange={handleChange}
          rows="2"
        />
      </label>

      {/* Select */}
      <label className="form-label">
        Tipo de avaliação:
        <select 
          name="tipo" 
          value={critica.tipo} 
          onChange={handleChange}
        >
          <option value="critica">Crítica</option>
          <option value="analise">Análise</option>
          <option value="resenha">Resenha</option>
        </select>
      </label>

      {/* Checkbox */}
      <label className="form-label">
        Contém spoiler?
        <input
          type="checkbox"
          name="spoiler"
          checked={critica.spoiler}
          onChange={handleChange}
        />
      </label>
          
      {/* File Input */}
      <label className="form-label">
        Anexar imagem:
        <input
          type="file"
          name="anexo"
          onChange={handleChange}
          accept="image/*"
        />
      </label>

      <button type="submit" className="submit-button">Enviar Avaliação</button>
      {mensagemSucesso && <div className="mensagem-sucesso">{mensagemSucesso}</div>}
    </form>
  );
};

export default Formulario;