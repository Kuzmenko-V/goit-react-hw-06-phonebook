import  { useState } from 'react';
import './Form.css';
import { connect } from 'react-redux';
import * as actions from '../Redux/contacts/contacts-actions';


function Form({ addContacts }) {
  const [name, setName] = useState('');
  const [number, setNomber] = useState('');
  const inputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name': setName(value); break;
      case 'number': setNomber(value); break;
      default: return;
    }
  };
  const formSabmit = e => {
    e.preventDefault();
    addContacts({ name, number });
    setNomber('');
    setName('');
  }
  return (
            <form  className="form"onSubmit={formSabmit}>
             <label >
               Имя
               <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={name}
                onChange={inputChange}
               />
                </label>
             <label >
               Номер телефона
               <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                value={number}
                onChange={inputChange}
               />
             </label>
             <button title="submit">Добавить контакт</button>
            </form>
        );
};
const mapDispatchToProps = dispatch => {

   return {
     addContacts: (x) => dispatch(actions.addContact(x))
   };
};

export default connect(null,mapDispatchToProps)(Form);