import "./search-box.styles.css";
function SearchBox({className,placeholder,onChange}) {
        return (<input 
            className={className} 
            type='search' 
            placeholder={placeholder}
            onChange={onChange} 
            />);
    };

export default SearchBox;