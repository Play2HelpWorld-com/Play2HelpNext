import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Booster = () => {
  return (
    <div className="container my-4">
      <h1 className="text-center">Offers for you!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {[
          { src: '/images/Amazon Promos 4x.png', alt: 'Amazon Promo' },
          { src: '/images/Add Video 2x.png', alt: 'Add Video' },
          { src: '/images/Easy Surveys 2x.png', alt: 'Easy Surveys' },
          { src: '/images/Free Apps 2x.png', alt: 'Free Apps' },
          { src: '/images/Free Trial 2x.png', alt: 'Free Trial' },
          { src: '/images/Fun Stuff 2x.png', alt: 'Fun Stuff' },
          { src: '/images/Social Post 2x.png', alt: 'Social Post' },
          { src: '/images/Update Profile 2x.png', alt: 'Update Profile' },
          { src: '/images/Fun Ads 2x.png', alt: 'Fun Ads' }
        ].map((image, index) => (
          <div key={index} className="col-span-1">
            <Image width={350} height={300} className="img-fluid" src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <h4 className="text-center my-4">Check out these amazing booster products</h4>
      <div className="flex justify-center my-4">
        <Link
          id="amazon"
          className="web_btn_style bg-info m-1 px-4 py-2 rounded text-white flex items-center"
          href="#"
          title="up game link"
        >
          <i className="mx-1 fab fa-amazon"></i> Show Amazon offers
        </Link>
      </div>

      <div className="my-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            'B0B1GVQ67M',
            'B07F5ZNBHG',
            'B09VSLNDLJ',
            'B09Z9K12P2',
            'B07F2YJRN2',
            'B09NW4FN2R'
          ].map((asin, index) => (
            <div
              key={index}
              className="booster border border-primary bg-light p-2 flex items-center justify-center"
            >
              <iframe
                title='booster'
                sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                className="w-[120px] h-[240px] m-0 border-0"
                src={`//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=play2world-20&language=en_US&marketplace=amazon&region=US&placement=${asin}&asins=${asin}&linkId=${asin}&show_border=true&link_opens_in_new_window=true`}
              />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
