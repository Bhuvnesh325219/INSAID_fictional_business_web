
import './style.css';

import About from "./About";
import Contact from "./Contact";

  import React from "react";
 
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';

  
function Home() {
  return (
<>


    <div className="home">
      <div className='home_header'>
        <span className='home_header_logo'>
        
        <img src="finance_fevicon.png" width="100" height="50" />

          </span>
          
        <span className='home_header_another'>
          <span className='home_header_same_another'>
         
          
          </span>
          <span className='home_header_same_another'>
          
          </span>
        </span>
      </div>



      <div className='home_main'>
         <div className='home_main_heading'>
          <h1>Quick Finance </h1>
         </div>
         <div className='home_main_shortdes'>We provide world Largest,Secure Financial Services, Start today with Quick Finance
          more than 10 million subsribers,across 63 countries
          
           
          </div>
         <div className='home_main_services_heading'> 
         <h1>Our Services </h1>
         </div>
         <div className='home_main_services'>
          
          


          <div className='home_main_service'>
           <div className='service_heading'>
            <h3>Banking</h3>
            </div>
            <div className='service_description1'>
            Banking is the business of protecting money for others. Banks lend this money,
             generating interest that creates profits for the bank and its customers. 
             A bank is a financial institution licensed to accept deposits and make loans.
              But they may also perform other financial services.
            </div>
          </div>


          <div className='home_main_service'> 
          <div className='service_heading'>
            <h3>Loan</h3>
          </div>
            <div className='service_description2'>
            A loan is a form of debt incurred by an individual or other entity. 
            The lender—usually a corporation, financial institution, or government—advances 
            a sum of money to the borrower. In return, the borrower agrees to a certain 
            set of terms including interest, repayment date, and 
            other conditions.
             </div>
        </div>


    </div>


    <div className='home_main_services'>
          
          
          <div className='home_main_service'>
           <div className='service_heading'>
            <h3>Insurance</h3>
            </div>
            <div className='service_description3'>
            Insurance is a contract (policy) in which an insurer indemnifies another 
            against losses from specific contingencies or perils.There are many types 
            of insurance policies. Life, health, homeowners, and auto are the most common 
            forms of insurance.The core components that make up most insurance policies 
            are the deductible, policy limit, and premium.
            </div>
          </div>


          <div className='home_main_service'> 
          <div className='service_heading'>
            <h3>Stock and Trading</h3>
          </div>
            <div className='service_description4'>
            The term stock market refers to several exchanges in which shares of 
            publicly held companies are bought and sold. Such financial activities 
            are conducted through formal exchanges and via over-the-counter (OTC) 
            marketplaces that operate under a defined set of regulations.marketplaces 
            that operate under a defined set of regulations.
             </div>
        </div>

</div>
    
        <div className='home_main_services'>
          
          
          <div className='home_main_service'>
           <div className='service_heading'>
            <h3>Advisory</h3>
            </div>
            <div className='service_description5'>
            The term advisory management refers to the provision of professional,
             personalized investment guidance. Advisory management services allow 
             private individuals to consult with investment professionals before 
             making changes to their portfolios. Advisory management services allow 
             private individuals to consult with investment professionals before 
             making changes to their portfolios. 
            </div>
          </div>


          <div className='home_main_service'> 
          <div className='service_heading'>
            <h3>Wealth Managment</h3>
          </div>
            <div className='service_description6'>
            Wealth management plans are tailored to client-specific needs. The financial 
            products are combined to effectively reach the financial goals of the client.
            The advisory services entail the handling of client sensitive information. 
            Investment advisors have to maintain the confidentiality of information obtained
           during the course of financial planning and advisory services
             </div>
        </div>


    </div>











          
           

      

   </div>
     <div className='home_footer'>
         <div>Market Leading Services</div>
         <div>All right Reserved(2023)</div>
      </div>
    </div>


    
        
   



  
          
      


    </>
  );

}

export default Home;
