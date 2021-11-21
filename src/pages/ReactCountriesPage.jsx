import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";
import {useState} from "react";
import {allCountries} from "../data/countries";
import Countries from "../components/Countries";
import Country from "../components/Country";

export default function ReactCountriesPage() {
    const [countryFilter, setCountryFilter] = useState('');
    const [visitedCountries, setVisitedCountries] = useState([])

    function handleCountryFilterChange(newCountryFilter) {
        setCountryFilter(newCountryFilter);
    }

    function toggleVisitedCountry(countryId){
        let newVisitedCountries = [...visitedCountries];

        const isCountryVisited = newVisitedCountries.indexOf(countryId) !== -1;

        if(isCountryVisited){
            newVisitedCountries  = newVisitedCountries.filter(visitedCountryId => {
                return visitedCountryId !== countryId
            })
        } else {
            newVisitedCountries.push(countryId);
        }

        setVisitedCountries(newVisitedCountries);
    }

    const countryFilterLowerCase = countryFilter.trim().toLowerCase();

    const filteredCountries =
        countryFilterLowerCase.length > 3 ?
            allCountries.filter(({nameLowerCase}) => {
                return nameLowerCase.includes(countryFilterLowerCase)
            }) : allCountries;

    return (
        <div>
            <Header>React-countries</Header>
            <Main>
                <TextInput
                    id={'inputCountryFilter'}
                    labelDescription={'Informe o nome do país (pelo menos 3 caracteres)'}
                    inputValue={countryFilter}
                    onInputChange={handleCountryFilterChange}
                    autoFocus
                />
                {/*Prop drilling*/}
                {/*<Countries*/}
                {/*    visitedCountries={visitedCountries}*/}
                {/*    onCountryClick={toggleVisitedCountry}>*/}
                {/*    {filteredCountries}*/}
                {/*</Countries>*/}
                <Countries>
                    <div className={"border p-2"}>
                        <h2 className={"text-center font-semibold"}>
                            {filteredCountries.length} país(es)
                        </h2>
                        <h3 className={'text-center font-semibold text-sm'}>
                            {visitedCountries.length} país(es) visitado(s)
                        </h3>
                    </div>
                    {
                        filteredCountries.map(country =>  {
                            const isVisited = visitedCountries.indexOf(country.id) !== -1;
                            return <Country
                                isVisited={isVisited}
                                onCountryClick={toggleVisitedCountry}
                                key={country.id}>
                                {country}
                            </Country>
                        })
                    }
                </Countries>
            </Main>
        </div>
    )
}
