import pimg1 from "../images/projects/1.jpg";
import pimg2 from "../images/projects/2.jpg";
import pimg3 from "../images/projects/3.jpg";
import pimg4 from "../images/projects/14.jpg";
import pimg5 from "../images/projects/4.jpg";
import pimg6 from "../images/projects/5.jpg";
import pimg7 from "../images/projects/6.jpg";
import pimg8 from "../images/projects/7.jpg";
import pimg9 from "../images/projects/8.jpg";
import pimg10 from "../images/projects/9.jpg";
import pimg11 from "../images/projects/10.jpg";
import pimg12 from "../images/projects/11.jpg";
import pimg13 from "../images/projects/12.jpg";
import pimg14 from "../images/projects/13.jpg";

import ps1img1 from "../images/project-single/1.jpg";
import ps1img2 from "../images/project-single/2.jpg";
import ps1img3 from "../images/project-single/3.jpg";
import ps1img4 from "../images/project-single/4.jpg";
import ps1img5 from "../images/project-single/5.jpg";
import ps1img6 from "../images/project-single/6.jpg";
import ps1img7 from "../images/project-single/7.jpg";
import ps1img8 from "../images/project-single/8.jpg";
import ps1img9 from "../images/project-single/9.jpg";
import ps1img10 from "../images/project-single/11.jpg";
import ps1img11 from "../images/project-single/10.jpg";
import ps1img12 from "../images/project-single/12.jpg";
import ps1img13 from "../images/project-single/13.jpg";
import ps1img14 from "../images/project-single/14.jpg";

import psub1img1 from "../images/project-single/p1.jpg";
import psub1img2 from "../images/project-single/p2.jpg";

const projectImages = [
  pimg1,
  pimg2,
  pimg3,
  pimg4,
  pimg5,
  pimg6,
  pimg7,
  pimg8,
  pimg9,
  pimg10,
  pimg11,
  pimg12,
  pimg13,
  pimg14,
  pimg1,
  pimg2,
  pimg3,
  pimg4,
];

const singleImages = [
  ps1img1,
  ps1img2,
  ps1img3,
  ps1img4,
  ps1img5,
  ps1img6,
  ps1img7,
  ps1img8,
  ps1img9,
  ps1img10,
  ps1img11,
  ps1img12,
  ps1img13,
  ps1img14,
  ps1img1,
  ps1img2,
  ps1img3,
  ps1img4,
];

const projectMeta = [
  ["1", "Modern Living Room", "Interior Design"],
  ["2", "Luxury Bedroom Suite", "Residential"],
  ["3", "Open Dining Space", "Architecture"],
  ["4", "Minimalist Lounge", "Contemporary"],
  ["5", "Classic Kitchen Plan", "Remodeling"],
  ["6", "Urban Family Home", "Residential"],
  ["7", "Premium Office Studio", "Workspace"],
  ["8", "Warm Wooden Interior", "Decor"],
  ["9", "Elegant Hall Concept", "Interior Design"],
  ["10", "Creative Work Corner", "Workspace"],
  ["11", "Modern Stair Design", "Architecture"],
  ["12", "Natural Light Residence", "Residential"],
  ["13", "Compact Luxury Space", "Contemporary"],
  ["14", "Signature Villa Plan", "Architecture"],
  ["15", "Gallery Style Living", "Interior Design"],
  ["16", "Soft Neutral Bedroom", "Residential"],
  ["17", "Designer Kitchen Space", "Remodeling"],
  ["18", "Refined Home Office", "Workspace"],
];

const Projects = projectMeta.map(([Id, title, subTitle], index) => ({
  Id,
  title,
  subTitle,
  pImg: projectImages[index],
  ps1img: singleImages[index],
  psub1img1,
  psub1img2,
}));

export default Projects;
