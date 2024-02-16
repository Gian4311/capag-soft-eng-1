import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from "jquery";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
$( async() => {

    $( "main button" ).on( "click", () => {

        const
            lastName = $( "#lastName" ).val(),
            firstName = $( "#firstName" ).val(),
            middleName = $( "#middleName" ).val(),
            sex = $( "#sex" ).val(),
            age = $( "#age" ).val(),
            contactNumber = $( "#contactNumber" ).val(),
            email = $( "#email" ).val(),
            date = $( "#date" ).val(),
            timePeriod = $( "#timePeriod" ).val(),
            service = $( "#service" ).val(),
            preferredEmployee = $( "#preferredEmployee" ).val()
        ;
        alert(
            `Name: ${ firstName } ${ middleName } ${ lastName }\n`
            + `Sex: ${ sex }\n`
            + `Age: ${ age }\n`
            + `Contact Number: ${ contactNumber }\n`
            + `Email: ${ email }\n`
            + `Date: ${ date }\n`
            + `Time Period: ${ timePeriod }\n`
            + `Service: ${ service }\n`
            + `Preferred Employee: ${ preferredEmployee }\n`
        );

    } );

} );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
