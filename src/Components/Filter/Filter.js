import "./Filter.css";
import { connect } from 'react-redux';
import * as actions from '../Redux/contacts/contacts-actions';
function Filter({ filter, inputChange }) {
    return (
        <label className="Filter">
        Поиск контакта по имени
        <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={filter}
        onChange={inputChange}
        />
        </label>
    );
};
const mapStateToProps = state => {
   return {filter: state.contacts.filter}
};

const mapDispatchToProps = dispatch => {

   return {
     inputChange: (x) => dispatch(actions.filter(x.target.value)),
   };
};    
export default connect(mapStateToProps,mapDispatchToProps)(Filter);
