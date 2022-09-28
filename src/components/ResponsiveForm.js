import React from 'react'
import './ResponsiveForm.css';
import {BsFillSuitHeartFill} from 'react-icons/bs';



const ResponsiveForm = () => {
    return (
        <div className="container">
            <h1>REGISTRATION FOR ADOPTION</h1>
                <p>A dog is a big responsibility! If you are aware of this, we will gladly accept your registration for adoption.</p>
                <p>After submitting the form, we will contact you as soon as possible. <BsFillSuitHeartFill/></p>
                    <form>
                        <div className="row">
                            <div className="column">
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" id="firstName"/>
                            </div>
                            <div className="column">
                                <label htmlFor="lastname">Last Name</label>
                                <input type="text" id="lastName"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <label htmlFor="phone">Contact Number</label>
                                    <input type="text" id="phone"/>   
                            </div>
                            <div className="column">
                                <label htmlFor="phone">Email Address</label>
                                    <input id="phone"  type="email"/>   
                            </div>         
                        </div>
                        <div className="row">
                            <div className="column gender-container">
                                <div className="gender-label-container">
                                    <label>Gender</label>
                                </div>
                                <div className="radio-buttons">
                                    <div>
                                        <label htmlFor="male" className="male-female-label">Male</label>
                                            <span>
                                                <input 
                                                type="radio" 
                                                id="gender" 
                                                name="gender" 
                                                value="male"
                                                />  
                                            </span>
                                    </div>
                                    <div>         
                                        <label htmlFor="female" className="male-female-label">Female</label>    
                                            <span>                          
                                                <input 
                                                type="radio" 
                                                id="female" 
                                                name="gender" 
                                                value="female"                                   
                                                />  
                                            </span>
                                    </div>                                                                              
                                </div>
                            </div>
                            
                            <div className="column">
                                <div>
                                    <div>
                                        <label>Birthday</label>
                                    </div>                           
                                    <div className="all-birthday-container">
                                        <div className="day-of-birth-container">
                                            <select
                                            id="dayOfBirth" 
                                            name="dayOfBirth"
                                            >
                                                <option value="none">Day</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="28">28</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                                <option value="31">31</option>
                                            </select>
                                        </div>
                                        <div className="month-of-birth-container">
                                            <select
                                            id="monthOfBirth" 
                                            name="monthOfBirth"
                                            >
                                                <option value="none">Mont</option>
                                                <option value="january">January</option>
                                                <option value="february">Febuary</option>
                                                <option value="march">March</option>
                                                <option value="april">April</option>
                                                <option value="may">May</option>
                                                <option value="june">June</option>
                                                <option value="july">July</option>
                                                <option value="august">August</option>
                                                <option value="september">September</option>
                                                <option value="october">October</option>
                                                <option value="november">November</option>
                                                <option value="december">December</option>
                                            </select>
                                        </div>
                                        <div className="year-of-birth-container">
                                            <select
                                            id="yearOfBirth" 
                                            name="yearOfBirth"
                                            >
                                                <option value="none">Year</option>
                                                <option value="2011">2011</option>
                                                <option value="2010">2010</option>
                                                <option value="2009">2009</option>
                                                <option value="2008">2008</option>
                                                <option value="2007">2007</option>
                                                <option value="2006">2006</option>
                                                <option value="2005">2005</option>
                                                <option value="2004">2004</option>
                                                <option value="2003">2003</option>
                                                <option value="2002">2002</option>
                                                <option value="2001">2001</option>
                                                <option value="2000">2000</option>
                                                <option value="1999">1999</option>
                                                <option value="1998">1998</option>
                                                <option value="1997">1997</option>
                                                <option value="1996">1996</option>
                                                <option value="1995">1995</option>
                                                <option value="1994">1994</option>
                                                <option value="1993">1993</option>
                                                <option value="1992">1992</option>
                                                <option value="1991">1991</option>
                                                <option value="1990">1990</option>
                                                <option value="1989">1989</option>
                                                <option value="1988">1988</option>
                                                <option value="1987">1987</option>
                                                <option value="1986">1986</option>
                                                <option value="1985">1985</option>
                                                <option value="1984">1984</option>
                                                <option value="1983">1983</option>
                                                <option value="1982">1982</option>
                                                <option value="1981">1981</option>
                                                <option value="1980">1980</option>
                                                <option value="1979">1979</option>
                                                <option value="1978">1978</option>
                                                <option value="1977">1977</option>
                                                <option value="1976">1976</option>
                                                <option value="1975">1975</option>
                                                <option value="1974">1974</option>
                                                <option value="1973">1973</option>
                                                <option value="1972">1972</option>
                                                <option value="1971">1971</option>
                                                <option value="1970">1970</option>
                                                <option value="1969">1969</option>
                                                <option value="1968">1968</option>
                                                <option value="1967">1967</option>
                                                <option value="1966">1966</option>
                                                <option value="1965">1965</option>
                                                <option value="1964">1964</option>
                                                <option value="1963">1963</option>
                                                <option value="1962">1962</option>
                                                <option value="1961">1961</option>
                                                <option value="1960">1960</option>
                                                <option value="1959">1959</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>       
                        </div>
                    </form>
        </div>
  )
}

export default ResponsiveForm;