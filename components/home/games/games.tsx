// components/GameSection.js

import Image from 'next/image';
import Link from 'next/link';

const GameSection = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="flex justify-center text-center my-10">
        <div className="w-full lg:w-8/12">
          <h2 className="text-3xl font-bold">Our Games</h2>
          <p className="mt-2 text-lg text-gray-700">
            These are our free games
            <br /> Try them out now and enjoy!
          </p>
        </div>
      </div>

      <div className="space-y-10">
        {/* UP! Game */}
        <div className="bg-white shadow-md rounded-lg text-center p-8">
          <div className="mb-4">
            <Image
              src="/images/UP_Summer.webp"
              alt="UP! game image"
              width={300}
              height={200}
              className="mx-auto"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">UP!</h2>
          <ul className="text-gray-700 list-none mb-6">
            <li>Can you stop the UP blocks to save the world?</li>
            <li>If you can, you can help charity Cancer Research UK.</li>
            <li>Every point you gain will increase a $ donation to Cancer Research.</li>
            <li>
              Start smashing those blocks now. See{' '}
              <Link href="https://www.facebook.com/Play2.HelpWorld">
                <div className="text-blue-500 underline">social media</div>
              </Link>{' '}
              for tips and tricks.
            </li>
          </ul>
          <Link href="http://play2helpup.free.nf/" className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600">
            Play | Share
          </Link>
        </div>

        {/* YUM Game */}
        <div className="bg-white shadow-md rounded-lg text-center p-8">
          <div className="mb-4">
            <Image
              src="/images/YUM_Summer.webp"
              alt="YUM game image"
              width={300}
              height={200}
              className="mx-auto"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">YUM Game</h2>
          <ul className="text-gray-700 list-none mb-6">
            <li>Can you eat up YUM to save the world?</li>
            <li>If you can, you can help charity OXFAM.</li>
            <li>Every point you gain will increase a $ donation to OXFAM.</li>
            <li>
              Start catching those ingredients now. See{' '}
              <Link href="https://www.facebook.com/Play2.HelpWorld" passHref>
                <Link href="#" className="text-blue-500 underline">social media</Link>
              </Link>{' '}
              for tips and tricks.
            </li>
          </ul>
          <Link href="http://play2helpyum.free.nf" className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600">
            Play | Share
          </Link>
        </div>

        {/* POP! Game */}
        <div className="bg-white shadow-md rounded-lg text-center p-8">
          <div className="mb-4">
            <Image
              src="/images/POP+WATER_AID.webp"
              alt="POP game image"
              width={300}
              height={200}
              className="mx-auto"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">POP!</h2>
          <ul className="text-gray-700 list-none mb-6">
            <li>Can you stop the POP bubbles to save the world?</li>
            <li>If you can, you can help charity WaterAid.</li>
            <li>Every point you gain will increase a $ donation to WaterAid.</li>
            <li>
              Start smashing those bubbles now. See{' '}
              <Link href="https://www.facebook.com/Play2.HelpWorld" passHref>
                <Link href="#" className="text-blue-500 underline">social media</Link>
              </Link>{' '}
              for tips and tricks.
            </li>
          </ul>
          <Link href="https://daf7f8k0buj1j.cloudfront.net/bubble-invasion/index.html" className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600">
            Play | Share
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameSection;
