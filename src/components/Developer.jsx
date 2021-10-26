import './style.css'
export const Developer = ({name, age,country}) =>(
    <div>
        <ul>
            <li className='lista'>Dev: {name}</li>
            <li className='lista'>Idade: {age}</li>
            <li className='lista'>País: {country}</li>
        </ul>
    </div>
);
