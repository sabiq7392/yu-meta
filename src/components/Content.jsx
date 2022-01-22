/* eslint-disable react/jsx-no-undef */
import item from '../images/items/item_2.png';
import ButtonCircle from './ButtonCircle';
import ButtonPill from './ButtonPill';
import Col from './Col';
import Flex from './Flex';
import Row from './Row';
import Card, { CardBody, CardHeader } from './Card';
import Avatar from './Avatar';
import avatar_3 from '../images/avatars/avatar_3.png';
import avatar_2 from '../images/avatars/avatar_2.png';

export default function Content() {
  return (
    <div>
      <ButtonPill className="py-1 mb-5 yu-shadow-sm">
        <span>Back to Home</span>
      </ButtonPill>
      <Row>
        <Col className="col-md-12 col-lg-6">
          <img 
            className="w-100 h-100"
            style={{ borderRadius: 25 }} 
            src={item} 
            alt="" 
          />
        </Col>
        <Col className="col-md-12 col-lg-6 mt-lg-0 mt-4 d-grid gap-4">
          <h1 className="yu-text-dark fw-bold fs-3">
            Creative Girl Illustration
          </h1>
          <Flex className="align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <p className="m-0 yu-text-v-lighter">1 of 1</p>
              <ButtonPill>
                <i className="bi bi-heart-fill yu-text-red" />
                <span>2.1k</span>
              </ButtonPill>
            </div>
            <div className="d-flex align-items-center gap-2">
              <ButtonCircle className="yu-shadow-sm" >
                <i className="bi bi-share" />
              </ButtonCircle>
              <ButtonCircle className="yu-shadow-sm">
                <i className="bi bi-three-dots" />
              </ButtonCircle>
            </div>
          </Flex>
          <div className="dropdown">
            <ButtonPill
              className="btn text-white d-grid align-items-center py-1"
              backgroundColor="yu-bg-dark" 
              id="viewDropdown" 
              dataBsToggle="dropdown" 
              ariaExpanded="false"
            >
              <span>View proof of authenticity</span>
              <i className="bi bi-chevron-down" />
            </ButtonPill>
            <ul className="dropdown-menu yu-bg-dark" aria-labelledby="viewDropdown">
              <li><a className="dropdown-item text-white" href="#action">view of authenticity</a></li>
              <li><a className="dropdown-item text-white" href="#another-action">View on IPFS</a></li>
              <li><a className="dropdown-item text-white" href="#something">View on Etherscan</a></li>
            </ul>
          </div>
          <Card className="text-center border-0 yu-shadow-sm yu-rounded">
            <CardHeader className="bg-white py-3 px-4 yu-t-rounded border-0">
              <ul className="nav nav-pills card-header-pills gap-2">
                <li className="nav-item">
                  <a className="nav-link active rounded-pill py-1" href="#details">Details</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link rounded-pill py-1" href="#bids">Bids</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link rounded-pill py-1" href="#history">History</a>
                </li>
              </ul>
              <hr className="mb-0" style={{ backgroundColor: '#606c82' }} />
            </CardHeader>
            <CardBody>
              <p className="yu-text-v-lighter">
                Hey guys! New exploration about NFT Marketplace Web Design, this time I'm inspired by
                one of my favorite NFT website called Rarible (with crypto payment)! What do you think?
              </p>
            </CardBody>
          </Card>
          <Row>
            <Col className="col-md-12 col-lg-6">
              <h2 className="fs-6 yu-text-v-lighter yu-fw-600">Minimum bid</h2>
              <p className="yu-text-dark fw-bolder fs-5 ">
                2.4000<span className="yu-text-v-lighter">ETH/ $4769.88</span>
              </p>
            </Col>
            <Col className="col-md-12 col-lg-6">
              <h2 className="fs-6 yu-text-v-lighter yu-fw-600">Countdown</h2>
              <p className="yu-text-dark fw-bolder fs-5">
                22 : 12 : 47
              </p>
            </Col>
          </Row>
          <hr className="m-0" />
          <Row>
            <Col className="col-md-12 col-lg-6">
              <Avatar img={avatar_3} username="@ayoub_fennouni / fouzi..." />
            </Col>
            <Col className="col-md-12 col-lg-6">
              <Avatar img={avatar_2} username="makinzi_jamy..." />
            </Col>
          </Row>
          <Flex className="gap-2">
            <a href="#buy-now" className="btn fs-5 w-100 yu-bg-v-red text-white rounded-pill">Buy Now</a>
            <a href="#place-bid" className="btn fs-5 w-100 yu-bg-red text-white rounded-pill">Place Bid</a>
          </Flex>
        </Col>
      </Row>
    </div>
  );
}