import { Row } from "./GridSystem";
import { Flex } from "./Display";
import logo from '../images/logos/logo.png';

function FooterLink({ children, href }) {
  return ( 
    <a href={href} className="text-decoration-none yu-text-dark --hover-translate-x transition-100">
      {children}
    </a>
  );
}

function Col({ children, className, colDefault = 'col-6' }) {
  return (<div className={`${colDefault} ${className}`}>{children}</div> )
}

export default function Footer() {
  const sectionLinks = [
    { title: 'Company', links: ['About', 'Careers', 'Ranking', 'Activity'] },
    { title: 'Marketplace', links: ['All NFTs', 'Collectibles', 'Art', 'Photography', 'Trading Cards'] },
    { title: 'My Account', links: ['Profile', 'Favorites', 'My Collections', 'Settings'] },
    { title: 'Resources', links: ['Help Center', 'Platform Status', 'Partners', 'Gas-Free Marketplace', 'Docs'] },
  ];

  return (
    <footer className="bg-white">
      <div className="container yu-container">
        <Row className="py-5">
          <Col colDefault="12" className="col-md-12 col-lg-4">
            <img src={logo} alt="" />
            <p className="yu-text-v-lighter">YuMeta is a shared liquidity NFT market smart contract</p>
          </Col>
          {sectionLinks.map((sectionLink) => 
            <Col className="col-sm-6 col-md-6 col-lg-2 p-3 p-md-3 p-lg-0">
                <section className="d-grid gap-3">
                  <h2 className="m-0 fs-5 fw-bolder yu-text-dark">{sectionLink.title}</h2>
                  <div className="d-grid gap-3">
                    {sectionLink.links.map((link) =>
                      <FooterLink  href={`#${link.toLowerCase()}`}>{link}</FooterLink>
                    )}
                  </div>
                </section>
            </Col>
          )}
        </Row>
        
        <hr className="mb-0" style={{ backgroundColor: '#606c82' }} />

        <Flex className="justify-content-between py-4">
          <small>Copyright © 2021</small>
          <Flex className="gap-3">
            <a href="#privacy-policy" className="text-decoration-none yu-text-v-lighter">
              <small>Privacy Policy</small>
              </a>
            <a href="#term-of-service" className="text-decoration-none yu-text-v-lighter">
              <small>Terms of Service</small>
              </a>
          </Flex>
        </Flex>
      </div>
    </footer>
  );
}