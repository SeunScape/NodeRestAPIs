import {addNewContact, getContacts, getContactById, updateContact, deleteContact} from '../controllers/apiController';


const routes = (app) => {
    app.route('/contact')
    .get(getContacts)

    .post(addNewContact);
    
    app.route('/contact/:contactId')
    .put(updateContact)
    .get(getContactById)
    .delete(deleteContact)

}
export default routes;