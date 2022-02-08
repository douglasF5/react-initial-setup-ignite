import "../styles/repository-item.scss";

export function RepositoryItem(props) {
  return (
    <li className="repository-item">
      <p className="title">{props.repository?.name}</p>
      <p className="description">{props.repository.description}</p>
      <a className="link" href={props.repository.html_url}>
        Go to repository
      </a>
    </li>
  );
}
