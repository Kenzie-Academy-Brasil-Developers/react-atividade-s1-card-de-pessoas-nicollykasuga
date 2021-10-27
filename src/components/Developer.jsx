import "./style.css";
export const Developer = ({ name, age, country }) => (
  <div className="Card">
    <ul className="lista">
      <li>Dev: {name}</li>
      <li>Idade: {age}</li>
      <li>País: {country}</li>
    </ul>
  </div>
);
