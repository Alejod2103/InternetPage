import React from 'react'
import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";

import { 
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxOption,
 } from "@reach/combobox";

import './AutoComplete.css';

import "@reach/combobox/styles.css";

const AutoComplete = () => {
 
    return (
        <>
                <Search  />
        </>
  );
}
function Search() {
    const { ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
        requestOptions: {
            location:{
                lat: () => 43.653225, lng:() => -43.653225
            },
            radius: 200 * 1000,
        },
    })
    
    return <div className="search">
        <Combobox onSelect={async (address) => {
            setValue(address, false);
            clearSuggestions()

            try{
                const result = await getGeocode({address});
                console.log(result[0]);
            }
            catch(error){
                console.log("Error");
            }
        
        console.log(address)
        setValue(address.address)
    } }>
        
        <ComboboxInput value={value} onChange={(e) => {
            setValue(e.target.value);
        }}
        disabled={!ready}
        placeholder="Direccion"
        />
        <ComboboxPopover>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
        </ComboboxPopover>
    </Combobox>
    </div>
    
  
};

export default AutoComplete;
