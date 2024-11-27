'use client'
import React, { useState, useEffect } from 'react';
import { TableSection } from './highScorers.styled';
import Link from 'next/link';

export const HighScorers = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);
  const [tab, setTab] = useState('self');

  useEffect(() => {
    const addJustGivingWidget = (id: string, src: string) => {
      const el = document.getElementById(id);
      if (el) {
        const js = document.createElement('script');
        js.src = src;
        el.parentNode?.insertBefore(js, el);
      }
    };
    // Define widget URLs
    const protocol = window.location.toString().startsWith("https") ? "https" : "http";
    const widgets = [
      {
        id: "jg-widget-play2helpworldwateraid-551",
        src: `${protocol}://widgets.justgiving.com/fundraisingpage/play2helpworldwateraid?enc=ZT1qZy13aWRnZXQtcGxheTJoZWxwd29ybGR3YXRlcmFpZC01NTEmdz00MDAmYj1pbm5lcixkb25hdGUmaWI9dGl0bGUscHJvZ3Jlc3M%3D`
      },
      {
        id: "jg-widget-play2helpalzheimerssociety-224",
        src: `${protocol}://widgets.justgiving.com/fundraisingpage/play2helpalzheimerssociety?enc=ZT1qZy13aWRnZXQtcGxheTJoZWxwYWx6aGVpbWVyc3NvY2lldHktMjI0Jnc9NDAwJmI9aW5uZXIsZG9uYXRlJmliPXRpdGxlLHN1bW1hcnkscHJvZ3Jlc3M%3D`
      },
      {
        id: "jg-widget-play2helpworldmsfdocswithoutborders-936",
        src: `${protocol}://widgets.justgiving.com/fundraisingpage/play2helpworldmsfdocswithoutborders?enc=ZT1qZy13aWRnZXQtcGxheTJoZWxwd29ybGRtc2Zkb2Nzd2l0aG91dGJvcmRlcnMtOTM2Jnc9NDAwJmI9aW5uZXIsZG9uYXRlJmliPXRpdGxlLHN1bW1hcnkscHJvZ3Jlc3M%3D`
      }
    ];

    widgets.forEach(widget => addJustGivingWidget(widget.id, widget.src));
  }, []);


  const totalScore = [
    { email: 'player1@example.com', username: 'PlayerOne', games: 'Game1, Game2', total_score: 1500 },
    { email: 'player2@example.com', username: 'PlayerTwo', games: 'Game3, Game4', total_score: 1200 },
    { email: 'player3@example.com', username: 'PlayerThree', games: 'Game1, Game5', total_score: 900 },
    { email: 'player1@example.com', username: 'PlayerOne', games: 'Game1, Game2', total_score: 1500 },
    { email: 'player2@example.com', username: 'PlayerTwo', games: 'Game3, Game4', total_score: 1200 },
    { email: 'player3@example.com', username: 'PlayerThree', games: 'Game1, Game5', total_score: 900 },
    { email: 'player1@example.com', username: 'PlayerOne', games: 'Game1, Game2', total_score: 1500 },
    { email: 'player2@example.com', username: 'PlayerTwo', games: 'Game3, Game4', total_score: 1200 },
    { email: 'player3@example.com', username: 'PlayerThree', games: 'Game1, Game5', total_score: 900 },
  ];

  return (
    <div className="full_width">
      <div className="row items-container bottom-wrapper">
        <p>&nbsp;<br />&nbsp;</p>
      </div>
      <div className="charity-section flex gap-16 justify-center">
        <div id="jg-widget-play2helpworldwateraid-551"></div>
        <div id="jg-widget-play2helpalzheimerssociety-224"></div>
        <div id="jg-widget-play2helpworldmsfdocswithoutborders-936"></div>
      </div>

      <div className="web_pricing_section">
        <div className="container mt-5">
          <div className="row">
            <div className="ml-2 web_heading_wraper animated fadeIn my-5" data-animate="fadeIn">
              <h3>Total scores & Rewards peek 👀 🚀</h3>
              <p>These are our amazing players&apos; scores, see your scores and rewards below:</p>
            </div>
          </div>

          <div id="collapseFour">
            <div className="panel-body">
              <TableSection>
                <table id="example4" className="table-auto w-full text-black relative pl-5">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 w-1/5 text-left">Email</th>
                      <th className="px-4 py-2 w-1/5 text-left">Username</th>
                      <th className="px-4 py-2 w-3/10 text-left">Games</th>
                      <th className="px-4 py-2 w-1/5 text-center">Total Score</th>
                      <th className="px-4 py-2 w-3/10 text-left">$Charity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {totalScore.map((row, index) => (
                      <tr key={index} className="border-b hover:bg-gray-900 text-gray-50">
                        <td className="px-4 py-2">{row.email}</td>
                        <td className="px-4 py-2">{row.username}</td>
                        <td className="px-4 py-2">{row.games}</td>
                        <td className="px-4 py-2 text-center">{row.total_score}</td>
                        <td className="px-4 py-2">-</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableSection>
              <div className="mt-5 container">
                <h2>How Rewards Work</h2>
                <p className="row">
                  We aim to make the Rewards programme as simple and transparent as possible. You play fun, free games here and if you choose to join the Rewards programme your game scores on the game leaderboards will be used to calculate your rewards. The more you play, the more rewards, it&apos;s that simple! For now, the Rewards will be a fair share of the revenues that the games bring in eg from advertising after costs are deducted which we aim to keep to a minimum. We plan to be 100% transparent at all times with dashboards from well-known independent companies showing how much the $ treasury & cost deductions are at all times plus we will add new ways to boost Treasury over time. You can cash out your rewards on a monthly basis and you will only need to pay cash transfer costs of your selected payment channel eg Paypal. Alternatively, you can save them up to cash out later, donate them to charity or even convert them to &apos;community ownership tokens&apos; in future - watch this space! We are always looking to improve so do let us know if you have suggestions for making the Rewards programme even better.
                </p>
              </div>

              <div id="collapseOne">
                <div className="panel-body bg-white bg-opacity-50 mb-10">
                  <button
                    type="button"
                    className="text-gray-900 bg-green-500 hover:bg-green-600 py-2 px-4 rounded relative left-1/2 transform -translate-x-1/2 mt-6"
                    onClick={toggleModal}
                  >
                    Get your rewards
                  </button>

                  {modalOpen && (
                    <div className="fade show fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
                      <div className="bg-white rounded-lg shadow-lg p-6" role="document">
                        <div>
                          <div className="border-b flex justify-between items-center pb-4">
                            <h5 className="text-xl font-semibold text-gray-800">Choose Payout Method</h5>
                            <button
                              type="button"
                              className="close text-gray-700 text-2xl"
                              onClick={toggleModal}
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div>
                            <ul className="nav nav-tabs flex justify-start border-b mb-4">
                              <li className="mr-4">
                                <Link href="#tab5" className="text-blue-600 hover:text-blue-800" onClick={() => setTab('self')}>Payout for Yourself</Link>
                              </li>
                              <li className="mr-4">
                                <Link href="#tab6" className="text-blue-600 hover:text-blue-800" onClick={() => setTab('charity')}>Donate to Charity</Link>
                              </li>
                            </ul>
                            <div className="tab-content">
                              {tab === 'self' && (
                                <div className="tab-pane" id="tab5">
                                  <div className="mb-4">
                                    <form method="post">
                                      <input type="hidden" name="method" value="personal-payout" />
                                      <div className="mt-4">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="Enter your Name"
                                          required
                                          className="px-4 py-2 border rounded-md w-full"
                                        />
                                      </div>
                                      <div className="mt-4">
                                        <input
                                          type="email"
                                          name="email"
                                          placeholder="Enter Your Email"
                                          required
                                          className="px-4 py-2 border rounded-md w-full"
                                        />
                                      </div>
                                      <span className="text-red-500 text-sm block mt-2">
                                        * By clicking submit - your scores will be set to zero and a payout request will be sent to the administrator!
                                      </span>
                                      <div className="mt-6">
                                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded">
                                          Submit
                                        </button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              )}
                              {tab === 'charity' && (
                                <div className="tab-pane" id="tab6">
                                  <div className="mb-4">
                                    <form method="post">
                                      <input type="hidden" name="method" value="charity-donation" />
                                      <div className="mt-4">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="Enter your Name"
                                          required
                                          className="px-4 py-2 border rounded-md w-full"
                                        />
                                      </div>
                                      <div className="mt-4">
                                        <input
                                          type="email"
                                          name="email"
                                          placeholder="Enter Your Email"
                                          required
                                          className="px-4 py-2 border rounded-md w-full"
                                        />
                                      </div>
                                      <div className="mt-4">
                                        <select
                                          title='Select a Fund'
                                          name="fund"
                                          required
                                          className="px-4 py-2 border rounded-md w-full"
                                        >
                                          <option value="" disabled>Select a Fund</option>
                                          <option value="world_wildlife_fund">World Wildlife Fund - (www.worldwildlife.org)</option>
                                          <option value="wateraid">WaterAid - (www.wateraid.org)</option>
                                          <option value="doctors_without_borders">Doctors Without Borders - (www.msf.org)</option>
                                        </select>
                                      </div>
                                      <span className="text-red-500 text-sm block mt-2">
                                        * By clicking submit - your scores will be set to zero and a donation request will be sent to the selected charity!
                                      </span>
                                      <div className="mt-6">
                                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded">
                                          Submit
                                        </button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
