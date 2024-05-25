import SpotMockup from '../../public/SpotMockup.png';
import SpotAuth from '../../public/SpotAuth.png';
import SpotHome from '../../public/SpotHome.png';
import SpotAddReview from '../../public/SpotAddReview.png';
import SpotProfile from '../../public/SpotProfile.png';
import SpotPopup from '../../public/SpotPopup.png';
import Image from 'next/image';

exports.spotContents = [
  {
    title: "Spot",
    description:
      "Spot is an app that enhances dining experiences by combining restaurant reviews and social networking. Users can discover new restaurants, rate and share with their friends, making it easy to find great places to eat and share experiences with friends.",
    content: (
      <Image src={SpotMockup} className="h-full w-full"alt="Spot Mockup"/>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <Image src={SpotAuth} className="h-full w-full"alt="create task gif"/>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <Image src={SpotHome} className="h-full w-full"alt="create task gif"/>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <Image src={SpotPopup} className="h-full w-full"alt="create task gif"/>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <Image src={SpotAddReview} className="h-full w-full"alt="create task gif"/>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <Image src={SpotProfile} className="h-full w-full"alt="create task gif"/>
    ),
  },
];