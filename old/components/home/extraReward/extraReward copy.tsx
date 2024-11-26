import Link from "next/link";
import Image from "next/image";
import { ExtraRewardsWrapper } from "./extraRewards.styled";
const ExtraRewards: React.FC = () => {
  const smallCards = [
    { title: "Join Now", image: "/images/extra/extra1.png", link: "#" },
    { title: "Watch Ads", image: "/images/extra/extra2.png", link: "#" },
    { title: "Play Games", image: "/images/extra/extra3.png", link: "#" },
    { title: "Complete Surveys", image: "/images/extra/extra4.png", link: "#" },
  ];

  return (
    <ExtraRewardsWrapper>
      {/* Large Card */}
      <div className="large-card">
        <div className="image-wrapper">
          <Image
            src="/images/watch_ads.png"
            alt="Games and Rewards"
            fill
            className="background-image"
          />
        </div>
        <div className="card-content">
          <h1>GRAB EXTRA $$REWARDS</h1>
          <h2>You can have more cash with 3 easy fun steps:</h2>
          <ul>
            <li>1. Sign up your account for free and get bonuses</li>
            <li>2. Play games, watch ads or answer surveys</li>
            <li>
              <strong>3. Get more extra fun rewards!</strong>
            </li>
          </ul>
          <Link href="#" passHref>
            <span className="join-now">JOIN NOW</span>
          </Link>
        </div>
      </div>

      {/* Small Cards */}
      <div className="small-cards">
        {smallCards.map((card, index) => (
          <div className="small-card" key={index}>
            <div className="content">
              <h1>{card.title}</h1>
              <p>Click below to explore rewards!</p>
              <Link href={card.link} passHref>
                <span className="explore-link">Explore</span>
              </Link>
            </div>
            <div className="reward-image">
              <Image
                src={card.image}
                alt={card.title}
                width={150}
                height={150}
                className="rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </ExtraRewardsWrapper>
  );
};

export default ExtraRewards;
