import { ItemContainer } from './styles';

function ItemRepo({ repo, handleRemove }) {
  return (
    <ItemContainer>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        Ver no GitHub
      </a>
      <button className="remove-btn" onClick={() => handleRemove(repo.name)}>
        Remover
      </button>
    </ItemContainer>
  );
}

export default ItemRepo;
