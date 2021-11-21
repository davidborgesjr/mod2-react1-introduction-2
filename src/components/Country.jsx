import Item from "./Item";

export default function Country({children: country, onCountryClick = null, isVisited=false}){
    if(!country){
        return <div>Impossível achar o país</div>
    }

    function handleCountryClick(){
        if(onCountryClick){
            onCountryClick(country.id);
        }
    }

    const demographicDensity = country.population / country.area;

    const {name, capital, region, population, area} = country;

    const isVisitedClassName = isVisited ? 'bg-green-100' : '';

    return (
        <div className={`border p-2 m-2 flex flex-row items-center cursor-pointer ${isVisitedClassName}`} onClick={handleCountryClick}>
            {/*<img className={'w-48'} src={flag} alt={name}/>*/}
            <ul>
                <li>
                    <Item label={"Name: "}>{name}</Item>
                </li>
                <li>
                    <Item label={"Capital: "}>{capital}</Item>
                </li>
                <li>
                    <Item label={"Region: "}>{region}</Item>
                </li>
                <li>
                    <Item label={"Population: "}>{population}</Item>
                </li>
                <li>
                    <Item label={"Area: "}>{area}</Item>
                </li>
                <li>
                    <Item label={"Demographic Density: "}>{demographicDensity}</Item>
                </li>
            </ul>
        </div>
    )
}
