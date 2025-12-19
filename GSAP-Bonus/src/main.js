import { SplitText } from 'gsap/all';
import './style.css';
import { gsap } from 'gsap';

const delay = ms => new Promise(res => setTimeout(res, ms));

const backgroundList = ['.background1', '.background2', '.background3', '.background4'];
const backgroundElements = backgroundList.map(element => document.querySelector(element));

async function playAnimation() 
{
  await delay(900);

  for (let i = 0; i < backgroundList.length; i++) 
  {
    await delay(100);
    gsap.to(backgroundElements[i], { right: 0, duration: 2, ease: "power2.out" });
  }
};

playAnimation();
