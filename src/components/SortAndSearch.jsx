import React, {useState} from "react";
import Search from './Search.jsx';

function SortAndSearch(props){
  const [search, setSearch] = useState('');
  const [searchChanged, setSearchChanged] = useState(false);

  function handleChange(event){
    const value = event.target.value;
    props.setSort(value);
    if(value === "sortByNameAsc"){
      props.setContacts(prevValue => {
        return [...prevValue.sort((a,b) => (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1))];
      });
    } else if(value === "sortByNameDesc"){
      props.setContacts(prevValue => {
        return [...prevValue.sort((a,b) => (a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1))];
      });
    } else if(value === "sortByEmailAsc"){
      props.setContacts(prevValue => {
        return [...prevValue.sort((a,b) => (a.email.toUpperCase() > b.email.toUpperCase() ? 1 : -1))];
      });
    } else if(value === "sortByEmailDesc"){
      props.setContacts(prevValue => {
        return [...prevValue.sort((a,b) => (a.email.toUpperCase() < b.email.toUpperCase() ? 1 : -1))];
      });
    } else if(value === "sortByDateAsc"){
      props.setContacts(prevValue => {
        return [...prevValue.sort((a,b) => (a.createdAt.toUpperCase() > b.createdAt.toUpperCase() ? 1 : -1))];
      });
    } else if(value === "sortByDateDesc"){
      props.setContacts(prevValue => {
        return [...prevValue.sort((a,b) => (a.createdAt.toUpperCase() < b.createdAt.toUpperCase() ? 1 : -1))];
      });
    }
  }

  function handleSearchChange(event){
    const value = event.target.value;
    setSearch(value);
    setSearchChanged(true);
  }

  function onSubmit(e){
    e.preventDefault();
  }

  return(
    <div className="row">
    <div className="col-lg-4">
        <form onSubmit={onSubmit}>
          <Search
            contacts = {props.contacts}
            setContacts = {props.setContacts}
            sort = {props.sort}
            search = {search}
            searchChanged = {searchChanged}
            setSearchChanged = {setSearchChanged}
            handleSearchChange = {handleSearchChange}
          />
          <div className="form-group">
          <select className="form-control" defaultValue={"DEFAULT"} onChange={handleChange}>
            <option value="DEFAULT">Sort By</option>
            <option value="sortByNameAsc">Name A-Z</option>
            <option value="sortByNameDesc">Name Z-A</option>
            <option value="sortByEmailAsc">Email A-Z</option>
            <option value="sortByEmailDesc">Email Z-A</option>
            <option value="sortByDateDesc">Date Added Newest</option>
            <option value="sortByDateAsc">Date Added Oldest</option>
          </select>
          </div>
        </form>
        </div>
        </div>
  );
}

export default SortAndSearch;
