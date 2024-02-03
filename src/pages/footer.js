export const Footer = () => {
  return (
    <>
      <footer id='footer' className='footer'>
        <div className='footer-content position-relative'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-md-6'>
                <div className='footer-info'>
                  <h3>Paddy View Resort</h3>
                  <p>
                    Vattuvady, Moolankavu,Thoduvatty Road,Sulthan Bathery,
                    Wayanad <br />
                    KL 673592, In
                    <br />
                    <br />
                    <strong>Contact Info</strong>
                    <br />
                    <a href='tel:+919846849935'>+91 9846849935</a>
                    <br />
                    <a href='tel:+919961555576'>+91 9961555576</a>
                    <br />
                    <a href='tel:+919961555586'>+91 9961555586</a>
                    <br />
                    <a href='tel:+919961555587'>+91 9961555587</a>
                    <br />
                  </p>
                </div>
              </div>
              <div className='col-lg-2 col-md-3 footer-links'>
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href='/contact'>Contact Us</a>
                  </li>
                  <li>
                    <a href='/'>Services</a>
                  </li>
                  <li>
                    <a href='/'>Terms of service</a>
                  </li>
                  <li>
                    <a href='/'>Privacy policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-legal text-center position-relative'>
          <div className='container'>
            <div className='copyright'>
              © Copyright{' '}
              <strong>
                <span>Paddy View Resort</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className='credits'></div>
          </div>
        </div>
      </footer>
    </>
  );
};
