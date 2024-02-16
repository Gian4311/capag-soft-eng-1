import React from 'react';
import logo from './logo.svg';
import './css/main.css';
import './css/App.css';
import "./css/grid.css"
    
function App() {

    return <>
        <nav className="grid">
            <section><img src="assets/img/logo.png"/></section>
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
        </nav>
        <main className="grid">
            <section><form className="grid">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName"/>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName"/>
                <label htmlFor="middleName">Middle Name</label>
                <input type="text" id="middleName"/>
                <label htmlFor="sex">Sex</label>
                <select id="sex">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <label htmlFor="age">Age</label>
                <input type="number" id="age"/>
                <label htmlFor="contactNumber">Contact Number</label>
                <input type="text" id="contactNumber"/>
                <label htmlFor="email">Email</label>
                <input type="text" id="email"/>
            </form></section>
            <section><form className="grid">
                <label htmlFor="date">Date</label>
                <input type="date" id="date"/>
                <label htmlFor="timePeriod">Time Period</label>
                <select id="timePeriod">
                    <option value="09-10">9am - 10am</option>
                    <option value="10-11">10am - 11am</option>
                    <option value="11-12">11am - 12pm</option>
                    <option value="12-13">12pm - 1pm</option>
                    <option value="13-14">1pm - 2pm</option>
                    <option value="14-15">2pm - 3pm</option>
                    <option value="15-16">3pm - 4pm</option>
                    <option value="16-17">4pm - 5pm</option>
                    <option value="17-18">5pm - 6pm</option>
                    <option value="18-19">6pm - 7pm</option>
                    <option value="19-20">7pm - 8pm</option>
                </select>
                <label htmlFor="service">Service</label>
                <select id="service">
                    <option value="eyelashExtension">Eyelash Extension</option>
                    <option value="footSpa">Foot Spa</option>
                    <option value="maniPedi">Mani-pedi</option>
                </select>
                <label htmlFor="duration">Duration</label>
                <input readOnly id="duration" value="Lorem ipsum"/>
                <label htmlFor="price">Price</label>
                <input readOnly id="price" value="Lorem ipsum"/>
                <label htmlFor="preferredEmployee">Preferred Employee</label>
                <select id="preferredEmployee">
                    <option value="1">Pennywise</option>
                    <option value="2">Chucky</option>
                    <option value="3">Freddy Krueger</option>
                </select>s
            </form></section>
            <section>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat.</p>
                <button id="pass">Done</button>
            </section>
        </main>
    </>;

}

export default App;
