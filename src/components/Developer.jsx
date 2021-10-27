import "./style.css";
export const Developer = ({ name, age, country }) => (
  <div>
    <ul className="lista">
      <li>Dev: {name}</li>
      <li>Idade: {age}</li>
      <li>País: {country}</li>
    </ul>
  </div>
);
