import HyveMock from '../../public/HyveMock.png';
import CreateTask from '../../public/CreateTask.gif'
import Logs from '../../public/Logs.gif'
import Productivity from '../../public/Productivity.gif'
import GroupChat from '../../public/GroupChat.gif'
import FilterCompleteDelete from '../../public/FilterCompleteDelete.gif'
import Image from 'next/image';

exports.hyveContents = [
  {
    title: "Overview",
    description:
      "Hyve is a task management app that streamlines workflows and boosts team collaboration. Users can create and assign tasks, track time with clock-in/out functionality, and leave messages. Each task includes a group chat for communication. Detailed tables show weekly time spent and logs.",
    content: (
      <Image src={HyveMock} className="h-full w-full"alt="Spot Mockup"/>
    ),
  },
  {
    title: "Task Creation & Assignment",
    description:
      "Easily create and assign tasks to team members for streamlined project management",
    content: (
      <Image src={CreateTask} className="h-full w-full"alt="Spot Mockup" unoptimized/>
    ),
  },
  {
    title: "Clock-in/out & Logging",
    description:
      "Track task duration and progress with clock-in and clock-out functionality. Upon clocking out, Hyve prompts users to add a message, facilitating the logging of task details for comprehensive progress tracking.",
    content: (
      <Image src={Logs} className="h-full w-full"alt="Spot Mockup" unoptimized/>
    ),
  },
  {
    title: "Filter, Complete & Delete",
    description:
      "Filter tasks by progress to easily find what you need. Delete tasks that are no longer relevant to keep your list clean. Complete tasks to track your progress and move them to the completed section for a sense of accomplishment.",
    content: (
      <Image src={FilterCompleteDelete} className="h-full w-full"alt="Spot Mockup" unoptimized/>
    ),
  },
  {
    title: "Group Chats",
    description:
      "Facilitate communication among team members through dedicated group chats for each task. Using Socket.io for real- time messaging.",
    content: (
      <Image src={GroupChat} className="h-full w-full"alt="Spot Mockup" unoptimized/>
    ),
  },
  {
    title: "Productivity Tables",
    description:
      "Gain productivity insights with detailed tables, offering visibility into time spent on tasks each week and the corresponding logs. Customize these tables with various styling options",
    content: (
      <Image src={Productivity} className="h-full w-full"alt="Spot Mockup" unoptimized/>
    ),
  },
];