import SpotMockup from '../../public/SpotMockup.png';
import SpotAuth from '../../public/SpotAuth.png';
import SpotHome from '../../public/SpotHome.png';
import SpotAddReview from '../../public/SpotAddReview.png';
import SpotProfile from '../../public/SpotProfile.png';
import Image from 'next/image';

exports.spotContents = [
  {
    title: "Overview",
    description:
      "Spot is an app that enhances dining experiences by combining restaurant reviews and social networking. Users can discover new restaurants, rate and share with their friends, making it easy to find great places to eat and share experiences with friends.",
    content: (
      <Image src={SpotMockup} className="h-full w-full bg-[#27292C]"alt="Spot Mockup"/>
    ),
  },
  {
    title: "Authentication",
    description:
      "Quick authorization options through Facebook, Google, and Apple allowing users to easily access their accounts without the hassle of remembering their passwords.",
    content: (
      <Image src={SpotAuth} className="h-full w-full"alt="Spot Auth"/>
    ),
  },
  {
    title: "Feed",
    description:
      "Showcases friends' most recent restaurant reviews, complete with their ratings and the restaurant photo. Helping discover new restaurants based on trusted recommendations. ",
    content: (
      <Image src={SpotHome} className="h-full w-full"alt="Spot Home"/>
    ),
  },
  {
    title: "Adding Reviews",
    description:
      "Hassle-free way to rate restaurants. Rate dining experiences in three clicks using a star system. This approach helps make sure reviewing a restaurant is quick, efficient, and user-friendly.",
    content: (
      <Image src={SpotAddReview} className="h-full w-full"alt="Spot New Review"/>
    ),
  },
  {
    title: "Profile Page",
    description:
      "Provides a map displaying locations of restaurants the user reviewed. Users can also see who they are following and who their followers are, and access a list of their most recent reviews.",
    content: (
      <Image src={SpotProfile} className="h-full w-full"alt="create task gif"/>
    ),
  },
];