import { SplitText } from 'gsap/all';
import './style.css';
import { gsap } from 'gsap';

// Fonction permettant de créer un délai
const delay = ms => new Promise(res => setTimeout(res, ms));

// Liste des backgrounds
const backgroundList = ['.background1', '.background2', '.background3', '.background4'];
const backgroundElements = backgroundList.map(element => document.querySelector(element));

// Register SplitText plugin
gsap.registerPlugin(SplitText);
let split = SplitText.create(".text", { type: "words, lines, chars" });

// RNG
function getRandomFromRange(min, max) {return Math.random() * (max - min) + min;}

// Animation
async function playAnimation() 
{
  // Text = pas visible
  gsap.set(".text", { opacity: 0 });
  await delay(900);

  // Mouvements des backgrounds
  for (let i = 0; i < backgroundList.length; i++) 
  {
    await delay(100);
    gsap.to(backgroundElements[i], { right: 0, duration: 2, ease: "power2.out" });
  }

  // animation du texte principal
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

   // Démarrer l'animation de la balle
   ballAnimation(2);
};

// Création et animation des balles
async function ballAnimation(index) 
{
  for (let i = 0; i < index; i++) 
  {
    let ball = document.createElement('div');
    ball.classList.add('ball');
    document.body.appendChild(ball);
    playBall(ball);
    await delay(1000);
  }
};

// Fonction d'animation de balle
async function playBall(ball) 
{
  await delay(1000);
  ball.style.left = getRandomFromRange(10, 90) + "vw";
  ball.style.top = "100%";
  gsap.to(ball, {
    top: -150,
    duration: 2,
    ease: "power2.out",
    onComplete: () => {playBall(ball);}
  });
};

playAnimation();