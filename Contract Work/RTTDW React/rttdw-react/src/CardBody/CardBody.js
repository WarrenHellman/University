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
          <h4 className="colorGray42 fw500 ttup">What is Recursive Thinking?</h4>
          <hr></hr>
          <p>
              Recursive Thinking (RT) is a collective of people dedicated to career development in the technology space. In order to learn from others, members needed a website to showcase their skillsets to establish connections in and out of RT meetings. As a way to build skills, developers, designers and technical writers work on the website together.
          </p>
          <br></br>
          <p>By participating, you will provide RT collaborators with:</p>
          <ul> 
              <li className="openCircleListDecor">A schedule of upcoming meetings</li>
              <li className="openCircleListDecor">A place to provide lesson requests and vote for lessons</li>
              <li className="openCircleListDecor">Documentation of interview questions and answers</li>
              <li className="openCircleListDecor">A professional profile</li>
          </ul>
          <br></br>
          <p>
              If you would like to work on the website, keep reading our user guide below for information about how to get started.
          </p>
        </div>
      </div>

      <div className='pageCard'>
        <div className='pageBody'>
          <h4 className="colorGray42 fw500 ttup">Getting Started</h4>
          <hr></hr>
          <p>
              Before you begin, you will need to have a few tools to work on the site. Make sure you have the ones listed in the section below.
          </p>
          <ul className='undecorated'>
            <li>
                {/* <!-- <a href="#gettingStartedGetConnected" className="colorGray55 ttup">Get Connected</a> --> */}
                <h5><a href="#gettingStartedGetConnected" className="getStartedLink"><span className="linkText">Get Connected</span> </a></h5>
                <p>Learn how we stay in communication and where we do our work. We will cover steps to get connected to the RT Slack channel, the Zeplin page for website mockups and the GitHub page. Slack is the best way to stay in contact. Zeplin shows the RT website mockups. The GitHub page allows you to get the code and start contributing once you have the prerequisites.
                </p>
            </li>
            <br></br>
            <li>
                {/* <!-- <a href="#gettingStartedGetPreReqs" className="colorGray55 ttup">Get Prerequisites</a> --> */}
                <h5><a href="#gettingStartedGetPreReqs" className="getStartedLink"><span className="linkText">Get Prerequisites</span></a></h5>
                <p>
                    Once you are set up with the tools above, you can start contributing to the website. Keep reading to learn about how to get started on the project.
                </p>
            </li>
            <br></br>
            <li>
                {/* <!-- <a href="#gettingStartedGetTheProject" className="colorGray55 ttup">Getting the Project from Git</a> --> */}
                <h5><a href="#gettingStartedGetTheProject" className="getStartedLink"><span className="linkText">Getting The Project from Git</span></a></h5>
                <p>Now that you are connected, find out how to clone the project repository to your local machine and start up a dev server.</p>
            </li>
            <br></br>
            <li>
                {/* <!-- <a href="#gettingStartedGetItRight" className="colorGray55 ttup">Creating Changes and Additions</a> --> */}
                <h5><a href="#gettingStartedGetItRight" className="getStartedLink"><span className="linkText">Creating Changes and Additions</span></a></h5>
                <p>Here are some best practices for how to actively contribute. We will show you how to add, commit and push your work back to our GitHub repository.
                </p>
            </li>
            <br></br>
            <li>
                {/* <!-- <a href="#gettingStartedGettingThroughConflicts" className="colorGray55 ttup">Dealing with Merge Conflicts</a> --> */}
                <h5><a href="#gettingStartedGettingThroughConflicts" className="getStartedLink"><span className="linkText">Dealing with Merge Conflicts</span></a></h5>
                <p>
                    If multiple people are working on the same file, you may encounter situations where the master branch has different changes than what you have locally. When this occurs, you are going to need to resolve these conflicts. Read more for a merge conflict tutorial.
                </p>
            </li>
            <br></br>
            <li>
                {/* <!-- <a href="#gettingStartedBackEndPreRequisites" className="colorGray55 ttup">Back End Prerequisites</a> --> */}
                <h5><a href="#gettingStartedBackEndPreRequisites" className="getStartedLink"><span className="linkText">Back End Prerequisites</span></a></h5>
                <p>
                    Before working on the back end, you will need to make sure you are set up with the tools in this section.
                </p>
            </li>
            <br></br>
            <li>
                {/* <!-- <a href="#gettingStartedBackEndDeployStack" className="colorGray55 ttup">Deploy Back End Stack</a> --> */}
                <h5> <a href="#gettingStartedBackEndDeployStack" className="getStartedLink"><span className="linkText">Deploy Back end stack</span></a></h5>
                <p>
                    Find out how to work with the back end AWS stack deployment.
                </p>
            </li>
          </ul>
        </div>
      </div>

      <div className='pageCard'>
        <div className='pageBody'>
          <h4 className="colorGray42 fw500 ttup">Get Connected</h4>
            <hr></hr>
            <h5>Join Recursive Thinking on Slack</h5>
            <p>
              <a href="https://recursivethinking.slack.com" target="/"><span className="linkFormatting">Slack</span></a>
              <p>
                  Use this link to join the Recursive Thinking Slack group. Slack is a collaborative message platform where RT members share news, schedule meetup dates and ask and answer questions. If you do not have an account, you will need to create one. Please talk to Hailey Skelcher or Austin Nevins at Dev Day to be invited to join our channel.
              </p>
            </p>
            <h5>Join Recursive Thinking on GitHub</h5>
            <p>
              <a href="https://github.com/RecursiveThinking" target="/"><span className="linkFormatting">GitHub</span></a>
              <p>
                  Use this link to access the Recursive Thinking GitHub page, which you will need in order to contribute to the website. If you do not have a GitHub account, you will need to create one. Please talk to Hailey Skelcher or Austin Nevins at Dev Day to be invited to the group page.
              </p>
            </p>
            <h5>Access Site Mockups</h5>
            <p>
              <a href="https://app.zeplin.io/project/5a35b3271068e9760ef79fc6" target="/"><span className="linkFormatting">Zeplin</span></a>
              <p>Use this link to access Zeplin, a collaborative platform for designers and developers. You will need to sign up to use the web app (or version of your choice). Contact Hailey Skelcher at Dev Day to get invited to see the mockups for this project.</p>
          </p>
        </div>
      </div>

      <div className='pageCard'>
        <div className='pageBody'>
          <h4 className="colorGray42 fw500 ttup">Prerequisites</h4>
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
                <p><a href="https://code.visualstudio.com/" target="/" className="linkFormatting">https://code.visualstudio.com</a></p> 
              </li>
              <h6>Download Brackets at </h6>
              <li>
                <p><a href="http://brackets.io/" target="/" className="linkFormatting">http://brackets.io</a></p>
              </li>
              <h6>Download SublimeText at </h6>
              <li>
                  <p>
                    <a href="https://www.sublimetext.com/" target="/" className="linkFormatting">https://www.sublimetext.com</a>
                  </p>
              </li>
              <h6>Download WebStorm at </h6>
              <li>
                  <p>
                    <a href="https://www.jetbrains.com/webstorm/" target="/" className="linkFormatting">https://www.jetbrains.com/webstorm</a>
                  </p>
              </li>
            </ul>
            <h5>Download Node.js</h5>
            <p> 
              Select the version for your OS at <a href="https://nodejs.org/en/" target="/"><span className="linkFormatting">https://nodejs.org/en</span></a>. Node.js is needed to install helper modules (libraries) for JavaScript.
            </p>
            <p>
              You can check if Node and npm (bundled with Node) are installed by opening your terminal/command line and typing:
            </p> 
            <p>
                <span className="codeSnippetGitCommand">node -v</span> or <span className="codeSnippetGitCommand">npm -v</span>
            </p>
            <p>
              Then, hit the 'enter' key. This is how you run commands. It will return a version number (for Node or npm) below if correctly installed, such as v8.11.3 (or whatever the recommended version is at your time of install).
            </p>
            <h5>Download Git</h5>
            <p> 
              Select the version for your OS at <a href="https://git-scm.com/downloads" target="/"><span className="linkFormatting">https://git-scm.com/downloads</span></a>. Git is a version control system to help track changes made to code. Git makes it possible for multiple people to work on the RT site, even at the same time.
            </p> 
            <p>
              *Windows Users: Note that Mac (OS X) has a built-in terminal that supports Bash. Windows does not. When you install Git on Windows, it should, by default, install <a href="https://stackoverflow.com/questions/17807485/what-is-the-exact-meaning-of-git-bash" target="_blank" rel='noopener noreferrer' alt=''><span className="linkFormatting">Git Bash</span></a>, which is the terminal most often used to run git commands. Windows users can check for a Git Bash installation simply by searching for it in their start bar or Windows Explorer. However, in the next year, people with a current copy of Windows 10 could see native support for Git Bash. 
            </p>
        </div>
      </div>
      <div className='pageCard'>
        <div className='pageBody'>
          <h4 className="colorGray42 fw500 ttup">Getting the Project from GitHub</h4>
          <hr></hr>
          <p>
              To work on the Recursive Thinking website project, you will need to transfer the project files from the RT GitHub repository to your computer. This is done through a git clone.
              There are two different repositories you will need to clone from the Recursive Thinking GitHub Page.      
          </p>
          <h6>Front End:</h6>
          <ul>
              <li>
                  <p>
                      <a className="linkFormatting" href="https://github.com/RecursiveThinking/recursive_thinking_website" target="/">recursive-thinking-website</a>
                  </p>
              </li>
          </ul>
          
          <h6>Back End:</h6>
          <ul>
              <li>
                  <p>
                      <a className="linkFormatting" href="https://github.com/RecursiveThinking/recursive_thinking_server" target="/">recursive-thinking-server</a>
                  </p>
              </li>
          </ul>
          
          <p>
              First, we will work on the front end.
          </p>
          <h5>Git Clone</h5>
          <ol className='numberedList'>
              <li>
                  <p>
                      Before you begin, run:
                  </p>
                  <p>
                      <span className="codeSnippetGitCommand">git --version</span>
                  </p>
                  <p>
                      This command should return the version number of Git that you installed. If it does not, you need to repeat the download and installation of Git (see <a className="linkFormatting" href="#gettingStartedGetPreReqs">Prerequisites</a> ). If this command returns a version of Git that your machine is running, you are all set to continue (e.g. vX.X.X.windows.X).

                  </p> 
              </li>
              <li>
                  <p>
                      Next, make sure you are in the directory/folder where you want the files to go. For example, if you have a web projects directory, navigate into that folder before you start running the git commands. This is important because when the git commands are executed, the repository will be created in the current working directory (where you are in the terminal).
                  </p>
              </li>
              <li>
                  <p>
                      Third, go to the the <a className="linkFormatting" href="https://github.com/RecursiveThinking/recursive_thinking_website" target="/">Recursive Thinking Website</a> GitHub Page. To the far right, you should see a green "Clone or download" button. Click the button to find the address, which will, depending on your configuration, be either in https:// or ssh. Since https:// is the default protocol (and using ssh requires special setup), we will only cover how to use https:// in this section.
                      The https:// address for the Recursive Thinking Website is:            
                  </p>
                  <p>
                      <a className="linkFormatting" href="https://github.com/RecursiveThinking/recursive_thinking_website.git" target="_blank" alt='' rel='noopener noreferrer'>https://github.com/RecursiveThinking/recursive_thinking_website.git</a>
                  </p>
                  <img id="test-modal" className="imgModal" src={require("./images/git-clone.jpg")} alt="Click the green “Clone or download” button to find the website URL."></img>
                  <p className="img-caption">
                      Click the green “Clone or download” button to find the website URL.
                  </p>
              </li>
              <li>
                  <p>
                      Perform a git clone by running:
                  </p>
                  <p>
                      <span className="codeSnippetGitCommand">git clone https://github.com/RecursiveThinking/recursive_thinking_website.git</span>
                  </p>
                  <p>
                      After executing this command, you should see some additional status reports in your terminal indicating the current progress as well as the success/failure of this command. If the command was successful, you should see a folder named "recursive-thinking-website" in the directory where you executed the git clone command. If you do not get a successful clone, and you do not see the folder in your directory, please re-run these steps until you do.
                  </p>
              </li>
              <li>
                  <p>
                      The Recursive Thinking website uses <a className="linkFormatting" href="https://webpack.js.org/" target="_blank" alt='' rel='noopener noreferrer'>webpack</a> to compile all of the separate HTML, CSS and JavaScript files into a single page application.
                  </p>
                  <p>
                      webpack is a part of <a className="linkFormatting" href="https://www.npmjs.com/" target="_blank" alt='' rel='noopener noreferrer'>Node Package Manager</a> (npm), which allows users from all over to share "building blocks" of JavaScript code.
                  </p>
                  <p>
                      In the Recursive Thinking Website folder, you will see a file called package.json. The package.json file contains all the npm modules needed to run the website.
                  </p>
                  <p>
                      Install the required node modules to run webpack by running:  
                  </p>
                  <p>
                      <span className="codeSnippetGitCommand">npm install</span>
                  </p>
                  <p>
                      If all the required node packages are installed successfully, you should now see a "node_modules" folder in the recursive_thinking_website directory. If not, please repeat the last step.
                  </p>
                  <p>
                      Once you have the node_modules folder, run: 
                  </p>
                  <p>
                      <span className="codeSnippetGitCommand">npm run start</span>
                  </p>
                  <p>
                      This command causes a lot of output in the terminal, so please wait a few seconds for webpack to build/bundle the site files. It will then open a tab in your default browser, at localhost://8000, and will load the website.
                  </p>
                  <ol className="alpha-list">
                      <li>
                          <p>
                              Learn more about npm install <a className="linkFormatting" href="https://docs.npmjs.com/cli/install"  target="_blank" alt='' rel='noopener noreferrer'>here</a>.
                          </p>
                          
                      </li>
                  </ol>
              </li>
              <li>
                  <p>
                      Run the webpack dev server.
                  </p>
                  <ol className="alpha-list">
                      <li>
                          <p>
                              Kick off the build sequence to open a tab in your browser that will show the website by running:
                          </p>
                          <p>
                              <span className="codeSnippetGitCommand">npm run dev-server</span> 
                          </p>
                      </li>
                      <li>
                          <p>
                              Now the project should be up and running on your local host.
                          </p>
                      </li>
                  </ol>
              </li>
              <li>
                  <p>
                      Check the mockups.
                  </p>
                  <ol className="alpha-list">
                      <li>
                          <p>
                              In order to see the mockups, you will need to be added to the Zeplin site. Email <a className="linkFormatting" href="mailto:haileyskelcher@hotmail.com">haileyskelcher@hotmail.com</a> to gain access.
                          </p>
                      </li>
                      <li>
                          <p>
                            Find the mockups at <a className="linkFormatting" href="https://app.zeplin.io/project/5a35b3271068e9760ef79fc6" target="_blank" alt='' rel='noopener noreferrer'>https://app.zeplin.io/project/5a35b3271068e9760ef79fc6</a>. 
                          </p>
                      </li>
                  </ol>
              </li>
          </ol>
          <h5>Other Prerequisites</h5>
          <p>At this point, you will be able to run the front end of the Recursive Thinking website, but you will not be able to log in, as logging in requires the AWS back end. We will cover back end installation later on in the documentation.</p>
        </div>
      </div>

      <div className='pageCard'>
        <div className='pageBody'>
          <h4 class="colorGray42 fw500 ttup">Creating Changes and Additions</h4>
          <hr></hr>
          <p>
              Now that you are all set up, you can learn how to do work on the site.
          </p>
          <h5>Committing Changes</h5>
          <p>
              If you have done some work on the website and you want to push your changes to the repository, perform the following commands.
          </p>

          <ol>
              <li>
                    
                  <p>Make sure that the terminal is in the correct project directory, and that project directory is a valid repository.  This can be done by running:</p> 
                  <p><span class="codeSnippetGitCommand">git status</span></p>
                  <p>There are two possible outcomes:</p>
                  
              </li>

              <ol class="alpha-list">
                  <li>
                      <p>
                          The terminal is not in a valid repository/location.  If this is the case, you will see the error “<span className='errorStyle'>fatal: Not a git repository (or any of the parent directories): .git</span>”
                          <br></br>
                      If you see this, please navigate into a valid project/repository folder in your terminal.
                      </p>
                  </li>
                  <img src={require("./images/git_check_01_git_status_error.jpg")} alt="The fatal status"></img>
                  <p class="img-caption">
                      The fatal status.
                  </p>
                  <li>
                      <p>
                          The terminal is in a valid respository/location.  If this is the case, you will see some notifications about the status of that repository and the current status of any tracked/untracked files that have not yet been committed.
                      </p>
                  </li>
                  <img src={require("./images/git_check_02_git_status_success.jpg")} alt="The successful status"></img>
                  <p class="img-caption">
                      The successful status.
                  </p>
              </ol>
              <li>
                  Add untracked files. 
              </li>
              <ol class="alpha-list">
                  <li>
                      <p>
                          If you have created new files or made changes to existing ones, you will need to add your changes.
                      </p>
                      <ol class="roman-list">
                          <li>
                              <p>
                                  First, run the command:
                              </p> 
                              <p>
                                  <span class="codeSnippetGitCommand">git status</span> 
                              </p>
                              <p>
                                  This is to make sure that you are on the master branch, which reflects the production-ready state. This will also allow you to see what files have not yet been added, as they will appear in red. Added files will appear in green. 
                              </p>
                          </li>
                          <img src={require("./images/committing1.jpg")} alt="The untracked files are displayed in red."></img>
                          <p class="img-caption">
                              The untracked files are displayed in red.
                          </p>
                          <li>
                              <p>
                                  To add files, run: 
                              </p>
                              <p><span class="codeSnippetGitCommand">git add -filename-</span></p>    
                              <p>For example, if you created or edited a file named “readMe1,” you would add the file by running the command:</p>
                              <p><span class="codeSnippetGitCommand">git add readME1.md</span>
                              </p>
                              <br></br>
                              <img src={require("./images/committing2.jpg")} alt="Add each file (readMe1, readMe2 and readMe3)."></img>
                              <p class="img-caption">
                                  Add each file (readMe1, readMe2 and readMe3).
                              </p>
                              <p>
                                  Once added, they will appear green when you run: 
                              </p>
                              <p><span class="codeSnippetGitCommand">git status</span></p>
                              <img src={require("./images/committing3.jpg")} alt="Now that the files have been added, they will appear in green when you check their status."></img>
                              <p class="img-caption">
                                  Now that the files have been added, they will appear in green when you check their status.
                              </p>
                          </li>
                      </ol>
                  </li>
                  <li>
                      <p>
                          When you are ready to commit your changes, you can run the commit command, which includes a mandatory message detailing what action you have taken. Do this by running:
                            
                      </p>
                      <p><span class="codeSnippetGitCommand">git commit -m “”</span></p>
                      <p>
                          Inside of the quotation marks, you will type your message details. 
                      </p>
                      <p>
                          For example, once you are ready to commit readMe1.md, you would run:
                      </p>
                      <p>
                          <span class="codeSnippetGitCommand">git commit -m “now I have pushed the files where we have resolved conflicts”</span>
                      </p>
                      <p>
                          You may choose whatever message makes the most sense for your commit.
                      </p>
                      <img src={require("./images/committing4.jpg")} alt="The files have been committed and include a message detailing the action taken."></img>
                      <p class="img-caption">
                          The files have been committed and include a message detailing the action taken.
                      </p>
                  </li>
              </ol>
              <li>
                  <p>
                      Push up your changes.
                  </p>
              </li>
              <ol class="alpha-list">
                  <li>
                      <p>
                          To make the final step in pushing your changes to Git, where they will show up in your commit history and in the project directory on GitHub, run:
                      </p>
                      <p>
                          <span class="codeSnippetGitCommand">git push origin master</span>
                      </p>
                      <img src={require("./images/committing5.jpg")} alt="The files have been pushed to master."></img>
                      <p class="img-caption">
                          The files have been pushed to master.
                      </p>
                  </li>
                  <li>
                      <p>
                          If successful, when future collaborators pull the repository, your changes will have been included. 
                      </p>
                  </li>
              </ol>
          </ol>
        </div>
      </div>

      <div className='pageCard'>
        <div className='pageBody'>

        </div>
      </div>

    </div>
  )
}

export default CardBody;