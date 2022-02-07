import { RepositoryItem } from "./RepositoryItem";
import "../styles/repository-list.scss";

const repository = {
  name: "unform2",
  description: "Forms in React",
  url: "http://github.com/unform/unform",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Repositories by Rocketseat</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
