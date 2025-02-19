import React from "react";
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import clsx from "clsx";
import css from "./App.module.css";

function App() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <h1 className={clsx(css.siteHeader)}>Phonebook</h1>
                </div>
            </header>
            <div className="section">
                <div className="container">
                    <ContactForm />
                </div>
            </div>
            <SearchBox />
            <ContactList />
        </>
    );
}

export default App;
