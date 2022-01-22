import { Flex, Grid } from "../components/Display";
import item_20 from "../images/items/item_20.png";
import item_19 from "../images/items/item_19.png";
import item_18 from "../images/items/item_18.png";
import item_17 from "../images/items/item_17.png";

import item_16 from "../images/items/item_16.png";
import item_15 from "../images/items/item_15.png";
import item_14 from "../images/items/item_14.png";
import item_13 from "../images/items/item_13.png";

import item_12 from "../images/items/item_12.png";
import item_11 from "../images/items/item_11.png";
import item_10 from "../images/items/item_10.png";
import item_9 from "../images/items/item_9.png";

import { Col, Row } from "../components/GridSystem";
import Avatar from "../components/Avatar";
import avatar_3 from "../images/avatars/avatar_3.png";
import avatar_2 from "../images/avatars/avatar_2.png";
import avatar_1 from "../images/avatars/avatar_1.png";

export default function Collections() {
  const colGrid = 'col-sm- 12 col-md-6 col-lg-4';
  const collections = [
    { 
      creator: {
        username: '@william_jamy...',
        img: avatar_2,
      }, 
      title: 'Creative Art Collection', like: '2.1k', bigImg: item_12,  img: [item_11, item_10, item_9] 
    },
    { 
      creator: {
        username: '@alexis_fenn...',
        img: avatar_3,
      }, title: 'Colorful Abstract Painting', like: '3.5k', bigImg: item_16, img: [item_15, item_14, item_13] 
    },
    { 
      creator: {
        username: '@Joshua_Bren...',
        img: avatar_1
      }, title: 'Modern Art Collection', like: '7.2k', bigImg: item_20, img: [item_19, item_18, item_17]
    },
  ];

  return (
    <section>
      <h2 className="fw-bold yu-text-dark mt-5 mb-4">Collections</h2>
      <Row className="g-4">
        {collections.map((collection) => 
          <Col className={colGrid}>
            <section className="d-grid gap-3">
              <Grid className="gap-2 yu-rounded bg-white p-4">
                <Flex className="gap-2">
                  <img src={collection.img[0]} alt="" className="w-100 yu-tl-rounded-10" />
                  <img src={collection.img[1]} alt="" className="w-100" />
                  <img src={collection.img[2]} alt="" className="w-100 yu-tr-rounded-10" />
                </Flex>
                <img src={collection.bigImg} alt="" className="w-100 yu-br-rounded-10 yu-bl-rounded-10" />
              </Grid>

              <Grid className="align-items-center gap-3">
                <Flex className="justify-content-between">
                  <h3 className="m-0 fs-5 yu-fw-600 yu-text-dark">{collection.title}</h3>
                  <p className="yu-text-dark d-flex gap-1 m-0">
                    <i className="bi bi-heart-fill yu-text-v-lighter" style={{ color: '#ccc' }} />
                    <span>{collection.like}</span>
                  </p>
                </Flex>
                <Flex className="gap-2 align-items-center">
                  <small className="fs-6 yu-fw-600 yu-text-v-lighter">5 items - Created By</small>
                  <Avatar img={collection.creator.img} username={collection.creator.username} height={25} width={25} />
                </Flex>
              </Grid>
            </section>
          </Col>
        )}
      </Row>
    </section>
  );
}
