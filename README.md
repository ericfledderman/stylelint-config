<!-- PROJECT HEADER 1 -->
<h3 align="center">@etfdev/stylelint-config</h3>

<p align="center">
  An opinionated collection of Stylelint rules
</p>


<!-- PROJECT SHIELDS -->
<p align="center">
  <a href="https://github.com/ericfledderman/stylelint-config/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/ericfledderman/stylelint-config.svg?style=for-the-badge" alt="contributors">
  </a>

  <a href="https://github.com/ericfledderman/stylelint-config/network/members">
    <img src="https://img.shields.io/github/forks/ericfledderman/stylelint-config.svg?style=for-the-badge" alt="forks">
  </a>

  <a href="https://github.com/ericfledderman/stylelint-config/stargazers">
    <img src="https://img.shields.io/github/stars/ericfledderman/stylelint-config.svg?style=for-the-badge" alt="stars">
  </a>

  <a href="https://github.com/ericfledderman/stylelint-config/issues">
    <img src="https://img.shields.io/github/issues/ericfledderman/stylelint-config.svg?style=for-the-badge" alt="issues">
  </a>

  <a href="https://github.com/ericfledderman/global-docs/blob/main/markdown-licenses/mit/LICENSE.md">
    <img src="https://img.shields.io/github/license/ericfledderman/stylelint-config.svg?style=for-the-badge" alt="license">
  </a>

  <a href="https://linkedin.com/in/ericfledderman" target="_blank">
    <img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555" alt="linkedin>
  </a>
</p>


<!-- PROJECT HEADER 2 -->
<p align="center">
  <a href="#"><strike>Explor the docs</strike></a>
</p>

<p align="center">
  <a href="#"><strike>View Demo</strike></a>
  ·
  <a href="https://github.com/ericfledderman/stylelint-config/issues">
    Report Bug
  </a>
  ·
  <a href="https://github.com/ericfledderman/stylelint-config/issues">
    Request Feature
  </a>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li>
      <a href="#contributing">Contributing</a>
      <ul>
        <li><a href="#contribution-policies">Contribution Policies</a></li>
        <li><a href="#contribution-guide">Contribution Guide</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About the Project

An opinionated collection of [Stylelint](https://stylelint.io) rules. To be imported into other projects or used as a boilerplate for further [Stylelint](https://stylelint.io) configurations.

### Built With

The following tools and packages were used to build this project:

* [Node.js](https://nodejs.org)
  A JavaScript runtime built on Chrome's V8 JavaScript engine
* [Stylelint](https://stylelint.org)
  A static code analysis tool for identifying problematic patterns found in JavaScript code


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* [NPM](https://nodejs.org)
  ```sh
  npm install npm@latest --global
  ```
* [Stylelint](https://stylelint.org)
  ```sh
  npm install stylelint@latest --global
  ```

### Installation

1. Install the package dependencies into the project
   ```sh
   npm install stylelint --save-dev
   ```
2. Install the package into the project
   ```sh
   npm install @etfdev/stylelint-config --save-dev
   ```

### Usage

1. Create an [stylelint](https://stylelint.org) configuration file (if one does not already exist)
   ```sh
   touch .stylelintrc.js
   ```
2. Edit / Update the [stylelint](https://stylelint.org) configuration file to include the following
   ```sh
   module.exports = {

     ...

     extends : [
       ...

      '@etfdev'
     ]

     ...
   }
   ```


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/ericfledderman/stylelint-config/issues) for a list of proposed features (and known issues)


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, create and be inspired.

Any contributions you make are **grearly appreciated**.

### Contribution Policies

Before contributing, be sure to review the [contributing policies](https://github.com/ericfledderman/global-docs/blob/main/contributing/README.md)

### Contribution Guide

1. Fork the Project
2. Create your Feature Branch
   ```sh
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```sh
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the Branch
5. Open a Pull Request

### Versioning

We use [Semantic Versioning](http://semver.org/) for versioning.

For the versions available, see the [tags on this
repository](https://github.com/ericfledderman/stylelint-config/tags).


<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE`](https://github.com/ericfledderman/global-docs/blob/main/markdown-licenses/mit/LICENSE.md) file for more details.


<!-- CONTACT -->
## Contact

Eric Fledderman - [@ericfledderman](https://twitter.com/ericfledderman) - ericfledderman@me.com

Project Link: [https://github.com/ericfledderman/stylelint-config](https://github.com/ericfledderman/stylelint-config)


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Choose a License](https://choosealicense.com)
   Non-judgmental guidance on choosing a license for your open source project
* [Img Shields](https://shields.io)
   Legible & concise status badges for third-party codebase services
