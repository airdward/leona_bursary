import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <a href="/"><strong>Privacy Policy</strong></a>
                    &ensp;&ensp;<a href="/" ><strong>Terms of Use</strong></a>
                    <hr />
                    <p className="text-xl-left">
                        <strong>Department of Computer Science</strong><br />
                         Federal University of Petroleum Resources<br />
                        
                    </p>
                    
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()}  Bursary Award Management System made by Leona  - All Rights Reserved
                        </p>
                    </div>
                </div>   
            </div>    
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
    .footer-middle {
        background: var(--mainDark);
        padding-top: 1.5rem;
        color: var(--mainWhite);
    }
    .footer-bottom {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    a {
        color: var(--mainWhite);
    }
    a:hover {
        color: var(--mainLightGrey);
    }
    hr {
        background-color: white;
    }
`;
