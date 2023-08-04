import style from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contacts-filter';


const Filter = () => {
  const dispatch = useDispatch();
  
  const setFilterValue = event => {
    dispatch(setFilter(event.currentTarget.value.toLowerCase()));
  };
  
  return (
    
    <div className={style.filter}>
    <p>Filter</p>
    <input
      type="name"
      onChange={setFilterValue}
      />
    </div>
  )     
}
      
export default Filter;
