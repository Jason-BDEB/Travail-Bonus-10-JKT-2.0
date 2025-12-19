import { SplitText } from 'gsap/all';
import './style.css';
import { gsap } from 'gsap';

const delay = ms => new Promise(res => setTimeout(res, ms));

const backgroundList = ['.background1', '.background2', '.background3', '.background4'];
const backgroundElements = backgroundList.map(element => document.querySelector(element));

gsap.registerPlugin(SplitText);
let split = SplitText.create(".text", { type: "words, lines, chars" });

async function playAnimation() 
{
  gsap.set(".text", { opacity: 0 });
  await delay(900);

  for (let i = 0; i < backgroundList.length; i++) 
  {
    await delay(100);
    gsap.to(backgroundElements[i], { right: 0, duration: 2, ease: "power2.out" });
  }

  await delay(200);
  gsap.set(".text", { opacity: 1 });
  gsap.from(split.chars, 
    {
      top: 50,
      rotationZ: 90,
      stagger: 0.1,
      opacity: 0,
      color: "#ff00eaff",
      duration: 1,
      ease: "back.out(1.7)"
    });
};

playAnimation();