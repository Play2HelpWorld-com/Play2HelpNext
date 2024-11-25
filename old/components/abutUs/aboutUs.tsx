import React from 'react';

const data = [
  { Date: '2024-01-01', Impressions: '1,000', Profit: '$100', CPM: '$10' },
  { Date: '2024-02-01', Impressions: '2,000', Profit: '$200', CPM: '$15' },
];

export const AboutUs = () => {
  return (
    <div className="container mx-auto p-10">
      <div className="items-container bottom-wrapper">
        <p>&nbsp;<br />&nbsp;</p>
      </div>

      <div className="pt-5">
        <h1 className="text-2xl font-bold">What Is Play2World?</h1>
        <p className="section-description mt-4">
          Play2World is a fab new place online where you can play fun, free games, via almost any device you choose. On top of that you can claim rewards for yourself and grab other benefits too. On Play2WorkWorld.com it&apos;s all about the work and the $$$ you earn this for yourself. On Play2HelpWorld.com you can donate your rewards and $$$ to major charities. On Play2HealthWorld.com you grab rewards and also get help with your healthy lifestyle. On Play2LearnWorld.com you are earning and learning. And on Play2LiveWellWorld.com grab your rewards while improving your lived environment. The more you play the more rewards you earn - it&apos;s super simple, fun and always free!
        </p>
      </div>

      <div className="items-container bottom-wrapper">
        <p>&nbsp;<br />&nbsp;</p>
      </div>

      <div>
        <h2 className="text-xl font-bold mt-8">How Do Rewards Work</h2>
        <p className="section-description mt-4">
          We aim to make the Rewards programme as simple and transparent as possible. You play fun, free games here and if you choose to join the Rewards programme your game scores on the game score leaderboards will be used to calculate your rewards. The more you play, the more rewards, it&apos;s that simple! For now the Rewards will be a fair share of the revenues that the games bring in, after costs are deducted, which we aim to keep to a minimum. We plan to be 100% transparent at all times with dashboards from well known independent companies showing how much the revenues & cost deductions are. Rewards payments will be made on a monthly basis via your selected payment channels eg Paypal. You can also donate your rewards to top charities. We list all the charities on the website with direct links to them there via a 100% independent charity donation management company. That way you can click and verify all the donations that we are able to make! We are always looking to improve so do let us know if you have suggestions for making the Rewards programme even better.
        </p>
      </div>

      <div className="items-container bottom-wrapper">
        <p>&nbsp;<br />&nbsp;</p>
      </div>

      <div>
        <h2 className="text-xl font-bold mt-8">Why Do We Do This</h2>
        <p className="section-description mt-4">
          Given all that&apos;s going on in the world today we think it&apos;s important to give back and help others, especially those less fortunate. We also love fun, free casual games that we can play anytime on almost any device! So one day we decided to combine those two things and created Play2.Help World. We are a small community of friendly folk who really believe in this initiative and are working passionately to make it a reality. We welcome all help and in fact you can see on our website different areas where more people can help support this in various ways. So if you feel the same jump in and play the games then contact us on social media to find out more!
          {/* Add more description as needed */}
        </p>
      </div>

      <div className="items-container bottom-wrapper">
        <p>&nbsp;<br />&nbsp;</p>
      </div>

      <div className="mt-8">
        <table className="w-full text-center text-white bg-cover bg-no-repeat" style={{ backgroundImage: "url('/images/Play2Help=Charity.png')" }}>
          <thead>
            <tr>
              <th className="w-1/5 p-2 border">Date</th>
              <th className="w-1/5 p-2 border">Impressions</th>
              <th className="p-2 border">Profit</th>
              <th className="w-1/10 p-2 border">CPM</th>
            </tr>
          </thead>
          <tbody>
            {data.map((revenue, index) => (
              <tr key={index}>
                <td className="p-2 border">{revenue.Date}</td>
                <td className="p-2 border">{revenue.Impressions}</td>
                <td className="p-2 border">{revenue.Profit}</td>
                <td className="p-2 border">{revenue.CPM}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
