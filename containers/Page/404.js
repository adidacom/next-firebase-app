import React from 'react';
import Link from 'next/link';
import IntlMessages from '../../components/utility/intlMessages';
import FourZeroFourStyleWrapper from './404.style';
import Image from '../../static/image/rob.png';
class FourZeroFour extends React.Component {
  render() {
    return (
      <FourZeroFourStyleWrapper className="iso404Page">
        <div className="iso404Content">
          <h1>
            <IntlMessages id="page404.title" />
          </h1>
          <h3>
            <IntlMessages id="page404.subTitle" />
          </h3>
          <p>
            <IntlMessages id="page404.description" />
          </p>
          <button type="button">
            <Link href="/dashboard">
              <a className="isoMenuHolder">
                <span className="nav-text">
                  <IntlMessages id="page404.backButton" />
                </span>
              </a>
            </Link>
          </button>
        </div>

        <div className="iso404Artwork">
          <img alt="#" src={Image} />
        </div>
      </FourZeroFourStyleWrapper>
    );
  }
}

export default FourZeroFour;
