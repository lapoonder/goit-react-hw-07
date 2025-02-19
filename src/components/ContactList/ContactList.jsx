import React from "react";
import Contact from "../Contact/Contact.jsx";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice.js";
import clsx from "clsx";
import css from "./ContactList.module.css";

function ContactList() {
    const dispatch = useDispatch();
    const ContactsPeople = useSelector((state) => state.contacts.items);
    const searchText = useSelector((state) => state.filters.text);

    const searchResult = ContactsPeople.filter((contact) =>
        contact.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const delContact = (ContactId) => {
        dispatch(deleteContact(ContactId));
    };

    return (
        <div className="section">
            <ul className={clsx("container", css.contactList)}>
                {searchResult.map((contact) => {
                    return (
                        <li
                            className={clsx(css.contactListItem)}
                            key={contact.id}
                        >
                            <Contact
                                user={contact.name}
                                phone={contact.number}
                                id={contact.id}
                                onDel={delContact}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ContactList;
