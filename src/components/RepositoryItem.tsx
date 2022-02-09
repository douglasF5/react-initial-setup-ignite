import "../styles/repository-item.scss";

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
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
