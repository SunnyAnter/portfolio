import HyveMock from '../../public/HyveMock.png';
import Image from 'next/image';

exports.hyveContents = [
  {
    title: "Overview",
    description:
      "Hyve is a task management app that streamlines workflows and boosts team collaboration. Users can create and assign tasks, track time with clock-in/out functionality, and leave messages. Each task includes a group chat for communication. Detailed tables show weekly time spent and logs.",
    content: (
      <Image src={HyveMock} className="h-full w-full"alt="Spot Mockup"/>
    ),
  }
];