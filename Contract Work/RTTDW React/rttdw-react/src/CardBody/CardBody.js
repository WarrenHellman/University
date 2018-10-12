import React from 'react';
import './CardBody.css';


const CardBody = () => {
  return(
    <div className='CardBody'>
      <div className='breadCrumbs'>
        <p>Home - Main - Getting Started</p>
      </div>
      <div className='pageCard'>
        <div className='pageBody'>
          <h4 class="colorGray42 fw500 ttup">What is Recursive Thinking?</h4>
          <hr></hr>
          <p>
              Recursive Thinking (RT) is a collective of people dedicated to career development in the technology space. In order to learn from others, members needed a website to showcase their skillsets to establish connections in and out of RT meetings. As a way to build skills, developers, designers and technical writers work on the website together.
          </p>
          <br></br>
          <p>By participating, you will provide RT collaborators with:</p>
          <ul class="bullet-exception"> 
              <li>A schedule of upcoming meetings</li>
              <li>A place to provide lesson requests and vote for lessons</li>
              <li>Documentation of interview questions and answers</li>
              <li>A professional profile</li>
          </ul>
          <br></br>
          <p>
              If you would like to work on the website, keep reading our user guide below for information about how to get started.
          </p>
        </div>
      </div>

      <div className='pageCard'>
        <div className='pageBody'>
          <h4 class="colorGray42 fw500 ttup">Getting Started</h4>
          <hr></hr>
          <p>
              Before you begin, you will need to have a few tools to work on the site. Make sure you have the ones listed in the section below.
          </p>
          <ul className='undecorated'>
            <li>
                {/* <!-- <a href="#gettingStartedGetConnected" class="colorGray55 ttup">Get Connected</a> --> */}
                <h5><a href="#gettingStartedGetConnected" className="getStartedLink"><span className="linkText">Get Connected</span> </a></h5>
                <p>Learn how we stay in communication and where we do our work. We will cover steps to get connected to the RT Slack channel, the Zeplin page for website mockups and the GitHub page. Slack is the best way to stay in contact. Zeplin shows the RT website mockups. The GitHub page allows you to get the code and start contributing once you have the prerequisites.
                </p>
            </li>
            <br></br>
            <li>
                {/* <!-- <a href="#gettingStartedGetPreReqs" class="colorGray55 ttup">Get Prerequisites</a> --> */}
                <h5><a href="#gettingStartedGetPreReqs" class="getStartedLink"><span class="linkText">Get Prerequisites</span></a></h5>
                <p>
                    Once you are set up with the tools above, you can start contributing to the website. Keep reading to learn about how to get started on the project.
                </p>
            </li>
            <br></br>
            <li>
                {/* <!-- <a href="#gettingStartedGetTheProject" class="colorGray55 ttup">Getting the Project from Git</a> --> */}
                <h5><a href="#gettingStartedGetTheProject" class="getStartedLink"><span class="linkText">Getting The Project from Git</span></a></h5>
                <p>Now that you are connected, find out how to clone the project repository to your local machine and start up a dev server.</p>
            </li>
            <br></br>
            <li>
                {/* <!-- <a href="#gettingStartedGetItRight" class="colorGray55 ttup">Creating Changes and Additions</a> --> */}
                <h5><a href="#gettingStartedGetItRight" class="getStartedLink"><span class="linkText">Creating Changes and Additions</span></a></h5>
                <p>Here are some best practices for how to actively contribute. We will show you how to add, commit and push your work back to our GitHub repository.
                </p>
            </li>
            <br></br>
            <li>
                {/* <!-- <a href="#gettingStartedGettingThroughConflicts" class="colorGray55 ttup">Dealing with Merge Conflicts</a> --> */}
                <h5><a href="#gettingStartedGettingThroughConflicts" class="getStartedLink"><span class="linkText">Dealing with Merge Conflicts</span></a></h5>
                <p>
                    If multiple people are working on the same file, you may encounter situations where the master branch has different changes than what you have locally. When this occurs, you are going to need to resolve these conflicts. Read more for a merge conflict tutorial.
                </p>
            </li>
            <br></br>
            <li>
                {/* <!-- <a href="#gettingStartedBackEndPreRequisites" class="colorGray55 ttup">Back End Prerequisites</a> --> */}
                <h5><a href="#gettingStartedBackEndPreRequisites" class="getStartedLink"><span class="linkText">Back End Prerequisites</span></a></h5>
                <p>
                    Before working on the back end, you will need to make sure you are set up with the tools in this section.
                </p>
            </li>
            <br></br>
            <li>
                {/* <!-- <a href="#gettingStartedBackEndDeployStack" class="colorGray55 ttup">Deploy Back End Stack</a> --> */}
                <h5> <a href="#gettingStartedBackEndDeployStack" class="getStartedLink"><span class="linkText">Deploy Back end stack</span></a></h5>
                <p>
                    Find out how to work with the back end AWS stack deployment.
                </p>
            </li>
          </ul>
        </div>
      </div>

      <div className='pageCard'>
        <div className='pageBody'>
          <h4 class="colorGray42 fw500 ttup">Get Connected</h4>
            <hr></hr>
            <h5>Join Recursive Thinking on Slack</h5>
            <p>
              <a href="https://recursivethinking.slack.com" target="/"><span class="linkFormatting">Slack</span></a>
              <p>
                  Use this link to join the Recursive Thinking Slack group. Slack is a collaborative message platform where RT members share news, schedule meetup dates and ask and answer questions. If you do not have an account, you will need to create one. Please talk to Hailey Skelcher or Austin Nevins at Dev Day to be invited to join our channel.
              </p>
            </p>
            <h5>Join Recursive Thinking on GitHub</h5>
            <p>
              <a href="https://github.com/RecursiveThinking" target="/"><span class="linkFormatting">GitHub</span></a>
              <p>
                  Use this link to access the Recursive Thinking GitHub page, which you will need in order to contribute to the website. If you do not have a GitHub account, you will need to create one. Please talk to Hailey Skelcher or Austin Nevins at Dev Day to be invited to the group page.
              </p>
            </p>
            <h5>Access Site Mockups</h5>
            <p>
              <a href="https://app.zeplin.io/project/5a35b3271068e9760ef79fc6" target="/"><span class="linkFormatting">Zeplin</span></a>
              <p>Use this link to access Zeplin, a collaborative platform for designers and developers. You will need to sign up to use the web app (or version of your choice). Contact Hailey Skelcher at Dev Day to get invited to see the mockups for this project.</p>
          </p>
        </div>
      </div>

      <div className='pageCard'>
        <div className='pageBody'>
          <h4 class="colorGray42 fw500 ttup">Prerequisites</h4>
            <hr></hr>
            <p>
              To be able to view and make changes to this project, you will need to install some tools.
            </p>
            <h5>Integrated Development Environment (IDE):</h5>
            <p>
              An IDE is where you write and edit code. If you are just getting started, it is recommended to pick one to learn on, since you can switch to a different IDE at any time. Visual Studio Code (VS Code) is a great one to start with. Note that the following tutorials are specific to VS Code, but if you are more comfortable with another IDE, please use that one. Depending on your preference, you can download one of these IDE options.
            </p>
            <ul>
              <h6>Download Visual Studio Code at </h6>
              <li>
                <p><a href="https://code.visualstudio.com/" target="/" class="linkFormatting">https://code.visualstudio.com</a></p> 
              </li>
              <h6>Download Brackets at </h6>
              <li>
                <p><a href="http://brackets.io/" target="/" class="linkFormatting">http://brackets.io</a></p>
              </li>
              <h6>Download SublimeText at </h6>
              <li>
                  <p>
                    <a href="https://www.sublimetext.com/" target="/" class="linkFormatting">https://www.sublimetext.com</a>
                  </p>
              </li>
              <h6>Download WebStorm at </h6>
              <li>
                  <p>
                    <a href="https://www.jetbrains.com/webstorm/" target="/" class="linkFormatting">https://www.jetbrains.com/webstorm</a>
                  </p>
              </li>
            </ul>
            <h5>Download Node.js</h5>
            <p> 
              Select the version for your OS at <a href="https://nodejs.org/en/" target="/"><span class="linkFormatting">https://nodejs.org/en</span></a>. Node.js is needed to install helper modules (libraries) for JavaScript.
            </p>
            <p>
              You can check if Node and npm (bundled with Node) are installed by opening your terminal/command line and typing:
            </p> 
            <p>
                <span class="codeSnippetGitCommand">node -v</span> or <span class="codeSnippetGitCommand">npm -v</span>
            </p>
            <p>
              Then, hit the 'enter' key. This is how you run commands. It will return a version number (for Node or npm) below if correctly installed, such as v8.11.3 (or whatever the recommended version is at your time of install).
            </p>
            <h5>Download Git</h5>
            <p> 
              Select the version for your OS at <a href="https://git-scm.com/downloads" target="/"><span class="linkFormatting">https://git-scm.com/downloads</span></a>. Git is a version control system to help track changes made to code. Git makes it possible for multiple people to work on the RT site, even at the same time.
            </p> 
            <p>
              *Windows Users: Note that Mac (OS X) has a built-in terminal that supports Bash. Windows does not. When you install Git on Windows, it should, by default, install <a href="https://stackoverflow.com/questions/17807485/what-is-the-exact-meaning-of-git-bash" target="_blank" rel='noopener noreferrer'><span class="linkFormatting">Git Bash</span></a>, which is the terminal most often used to run git commands. Windows users can check for a Git Bash installation simply by searching for it in their start bar or Windows Explorer. However, in the next year, people with a current copy of Windows 10 could see native support for Git Bash. 
            </p>
        </div>
      </div>
    </div>
  )
}

export default CardBody;