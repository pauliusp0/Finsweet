import React from 'react';
import styled from 'styled-components';
import Button from '../Buttons/Button';

const StyledBanner = styled.div`
  height: 502px;
  width: 100%;
  position: relative;
  display: flex;

  > div {
    width: 729px;
    height: 100%;
    position: absolute;
    left: 318px;
    top: 0px;
    background: var(--primary-color);
    padding: 128px 80px 240px 80px;
  }

  h3 {
    color: #ffffff;
  }
  button {
    margin-top: 48px;
  }
`;

const Image1 = styled.img`
  width: 976px;
  height: 502px;
  object-fit: cover;
  object-position: center;
`;

const Image2 = styled.img`
  width: 944px;
  height: 502px;
  object-fit: cover;
  object-position: center;
  margin-left: 100px;
`;

const Banner = () => {
  return (
    <StyledBanner>
      <div>
        <h3>Get in touch with us for your service related query</h3>
        <Button secondary text='Contact us' />
      </div>
      <Image1 src='https://s3-alpha-sig.figma.com/img/56b2/13db/d58d488c9a353667c40c465994e3ecbd?Expires=1635724800&Signature=Me603i8Xqxx8g7NYxfdUT2Easz5Uft2rIDrJiQcMMoSXcL0-35ajLfeLzpO2oMQAhP4S9pmgHabxfTyAOC2168Mf5i5JaBGyyLdF7c-N32jhQL5l5-Dk6nOgshkID2Sd0gYgb5uWBYO9emlEFBafQgTFBJNZZh5BxIJRYy1V39O1KnXo937zmLCPo3N3NPsrX00SbCZ373FH2Pubojm5vaprbN3T8y4gT1NCn6K0pTCvC~Pkv1XBV-Oiy2mV76iRBocYZfo6dGZAU52qADZR5UUxoYuH7hteAFYGjGQxrKZcD4DBr9BoQFw3J2Ebu~5sr-Tdz1IJdfWHGdqnyHMRhg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
      <Image2 src='https://s3-alpha-sig.figma.com/img/235b/ae2e/09b28d997abb1e1d7a2ae161ff474c33?Expires=1635724800&Signature=Ra-cvGNI5wx7Wz6cKYJRJ1gv88ZV~dt-XAb06obB7tsYt05Zt2PpH94G9yHkyqCmmmMhE7nwI3kQjL5~-vRiynscwk200mP-Mbjj6fIkCXbiQkbxqMbxmV3lcC-1CpEZT4DqzCbUdMRbbIzmHvVwsB3CHRztAFQFILcCgQ0XI7WGQtRTg1R2PGH1HWNNlMQr2Ln4c99p1EupEzo2XeDKy7m7d79d5p943aAgNSJvP5gqArUFtChcYAP3FV3rxiDzZH4l74a~0LkL-QY3fDfMOebq62o7cxMiMmn~9PC~8fREFCgFFlcTfUCV4Y4zNna9U~Rb1AB2K6QtAxWW-vzJ3g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
    </StyledBanner>
  );
};

export default Banner;
