import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {
  matCards = [
    {
      title: 'Video Input Image Recognition',
      subtitle: 'Javascript/Tensorflow.JS/P5.JS/Mobilenet',
      imgSrc: "assets/images/aiClassifier.gif",
      description: `This is a quick demo website to teach myself how to use ML5 tensorflow.js and video playback recognition. The site is a blank shell that is mobile and desktop friendly, using the user's camera to pull a live feed and run it through an image library (mobilenet) to give an automatic classifier for image recognition (will not work with people or with lots of background motion). This was demoed by the coding train tutorials and I built this version as best I could to emulate it. This project was completed within four hours in my three weeks of coding.`,
      buttonTextOne: 'GO TO THE PROJECT',
      buttonTextTwo: 'GITHUB',
      website: 'https://bweineff.github.io/ml5VideoCapture/',
      projectGit: 'https://github.com/BWeineff/ml5videocapture',
    },
    {
      title: "What's Cooler than being cool?",
      subtitle: 'HTML/CSS/jQuery/Bootstrap',
      imgSrc: "assets/images/triviaImage.jpg",
      description: `How well do you know your Hip-Hop? A basic Hip-Hop Trivia style game meant ot quickly teach myself how to use timers in jquery as well as store variables using jquery to keep track of "score". Although this was a more basic design it helped me to gain a much strong grasp of storing variables. This project was completed over the course of four days during my fifth week of coding`,
      buttonTextOne: 'GO TO THE PROJECT',
      buttonTextTwo: 'GITHUB',
      website: 'https://bweineff.github.io/TriviaGame/',
      projectGit: 'https://github.com/BWeineff/TriviaGame',
    },
    {
      title: 'Cartoon GIF Generator',
      subtitle: 'jQuery/GiphyAPI/Bootstrap/AJAX',
      imgSrc: "assets/images/labs.gif",
      description: `Giphy API G I F generator.`,
      buttonTextOne: 'GO TO THE PROJECT',
      buttonTextTwo: 'GITHUB',
      website: 'https://bweineff.github.io/ajax6/',
      projectGit: 'https://github.com/BWeineff/ajax6'
    },
    {
      title: 'Shiba Inu',
      subtitle: 'Dog Breed',
      imgSrc: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`,
      buttonTextOne: 'LIKE',
      buttonTextTwo: 'SHARE',
      website: 'https://bweineff.github.ioBLABLABLA',
      projectGit: 'https://github.com/BLABLABLA'
    },
    {
      title: 'Shiba Inu',
      subtitle: 'Dog Breed',
      imgSrc: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`,
      buttonTextOne: 'LIKE',
      buttonTextTwo: 'SHARE'
    },
    {
      title: 'Shiba Inu',
      subtitle: 'Dog Breed',
      imgSrc: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`,
      buttonTextOne: 'LIKE',
      buttonTextTwo: 'SHARE'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
