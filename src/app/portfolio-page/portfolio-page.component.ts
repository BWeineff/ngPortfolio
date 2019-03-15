import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {
  matCards = [
    {
      title: 'ML5 Image Video Recognition',
      subtitle: 'Dog Breed',
      imgSrc: "/assets/images/thatsAFrog.jpeg",
      description: `This is a quick demo website to teach myself how to use ML5 tensorflow.js and video playback recognition. The site is a blank shell that is mobile and desktop friendly, using the user's camera to pull a live feed and run it through an image library to give automatic guess for image recognition (will not work with people or with lots of background motion). This was demoed by the coding train tutorials and I built this version as best I could to emulate it within my first 2 months of coding.`,
      buttonTextOne: 'CLICK',
      buttonTextTwo: 'SHARE',
      website: 'https://bweineff.github.io/ml5VideoCapture/',
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
