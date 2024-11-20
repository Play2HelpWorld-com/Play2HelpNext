import Link from 'next/link';
import Image from 'next/image';

const ExtraRewards = () => {
  return (
    <div className="container mx-auto mt-5 px-4">
      <div className="flex justify-center">
        <div className="max-w-2xl bg-white text-center shadow-lg p-8 rounded-lg">
          {/* Affiliate Link */}
          <Link href="https://www.swagbucks.com/lp-savings-button?cmp=695&cxid=swagbuttonref&rb=127116045&extRefCmp=1&extRb=127116045" target="_blank">
            <div className="price mb-4">
              <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">GRAB EXTRA $$REWARDS</h1>
              <Image
                src="/images/watch_ads.png"
                alt="games and rewards image"
                width={300}
                height={200}
                className="mx-auto my-4 rounded"
                layout="responsive"
              />
            </div>
          </Link>

          {/* Sharing Buttons */}
          <div className="sharethis-inline-reaction-buttons mb-4"></div>

          {/* Description */}
          <h2 className="text-lg md:text-xl text-gray-700 font-semibold mb-4">
            You can have more cash with 3 easy fun steps.
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li>1. Sign up</li>
            <li>2. Play games, watch ads or answer surveys</li>
            <li><strong>3. Get more extra fun rewards!</strong></li>
          </ul>

          {/* Join Button */}
          <Link className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-colors" href="https://www.swagbucks.com/lp-savings-button?cmp=695&cxid=swagbuttonref&rb=127116045&extRefCmp=1&extRb=127116045" target="_blank">
            JOIN NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExtraRewards;
