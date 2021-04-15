import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <section className="footer mt-3">
      <div className="image">
        <a href={'http://www.google.com'}>
          <Image
            src="/assets/twitter-sign.png"
            layout="intrinsic"
            width={40}
            height={40}
          />
        </a>
      </div>
      <div className="image">
        <a href={'http://www.google.com'}>
          <Image
            src="/assets/linkedin.png"
            layout="intrinsic"
            width={40}
            height={40}
          />
        </a>
      </div>
    </section>
  );
}
export default Footer;