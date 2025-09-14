import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Partners from './../Partners';
import './pages-img.scss';

const Installation = () => {
  return (
    <div className='content'>
      <main>
        <section id='installation'>
          <h3>
            Installation and Setup{' '}
            <HashLink smooth to={`${location.pathname}#installation`}>
              <i className='fas fa-link'></i>
            </HashLink>
          </h3>
          <p>
            The infrastructure to build a timeline can be found in a
            ostimeline.7z archive, available in the download section.
          </p>
          <p>
            After downloading and unpacking this archive, timeline needs
            following preparations to be used:
          </p>
          <ul>
            <li>
              Trun install.sh script to download and build dependencies (should
              be done only once),
            </li>
            <li>run build.sh to build timeline from subfolders,</li>
          </ul>
          <p>
            If current location has folders with virtual machines subfolders
            inside, build.sh creates following objects in current location:
          </p>
          <ul>
            <li>
              one or more html files (a timeline page named
              FolderName_timeline.html),
            </li>
            <li>
              one or more timeline starting scripts (FolderName_start.sh),
            </li>
            <li>one or more timeline stopping scripts (FolderName_stop.sh).</li>
          </ul>
          <p>
            There is a Demo.7z archive available in downloads section, which
            contains sample sudbfolder with three virtual machines.
          </p>
          <p>
            To use it, just unpack this archive into the folder where build
            script resides (a Demo subfolder will appear).
          </p>
          <h3 id='starting-timeline'>
            Starting a timeline{' '}
            <HashLink smooth to={`${location.pathname}#starting-timeline`}>
              <i className='fas fa-link'></i>
            </HashLink>
          </h3>
          <p>After timeline is built, you can start it in the following way:</p>
          <ul>
            <li>run timeline starting script,</li>
            <li>open timeline page in a web browser,</li>
            <li>finish with timeline by running timeline stopping script.</li>
          </ul>
          <p>
            If your timeline is not on SSD drive, running many virtual machines
            at once may slow down your computer for several minutes, making it
            hardly usable until all images are loaded. In this case set
            PAUSE_TIME variable in timeline.conf configuration file. It stores
            delay in seconds done after each virtual machine start, and is zero
            by default.
          </p>
        </section>
      </main>

      <Partners />
    </div>
  );
};

export default Installation;
