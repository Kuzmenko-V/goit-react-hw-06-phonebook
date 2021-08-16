import './ContactList.css';
import { connect } from 'react-redux';
import * as actions from '../Redux/contacts/contacts-actions';


function ContactList({ contacts, onDeleteContact }) {
   return (
   <ul className="ContactList">
      {contacts.map(contact =>
         <li key={contact.id} >
            <p>{contact.name}: {contact.number}</p>
            <button onClick={()=>onDeleteContact(contact.id)}>Удалить</button>
         </li>
      )}
   </ul> 
);
}

const mapStateToProps = state => {
   const name = state.contacts.filter;
   const contacts = state.contacts.items.filter(e => e.name.toLowerCase().includes(name.toLowerCase())) ;
   return {contacts};
};

const mapDispatchToProps = dispatch => {

   return {
     onDeleteContact: (id) => dispatch(actions.deleteContact(id)),
   };
};
export default connect(mapStateToProps,mapDispatchToProps)(ContactList);