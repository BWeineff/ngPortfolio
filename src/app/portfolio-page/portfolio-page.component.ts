import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {
  matCards = [
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
