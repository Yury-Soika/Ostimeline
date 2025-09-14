import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Partners from './../Partners';
import './pages-img.scss';

const Architecture = () => {
  return (
    <div className='content'>
      <main>
        <section id='architecture'>
          <h3>
            Projects ostimeline is based on{' '}
            <HashLink smooth to={`${location.pathname}#architecture`}>
              <i className='fas fa-link'></i>
            </HashLink>
          </h3>
          <p>
            Architecture of the ostimeline project can be seen on the following
            picture:
          </p>
          <div className='pages-img architecture'></div>
          <p>
            As you can see, it is highly based on the set of an open source
            projects:
          </p>
          <ul>
            <li>TimelineSetter to build timeline demo,</li>
            <li>noVNC to embed virtual machine frames into the pages,</li>
            <li>QEMU, to run virtual machines.</li>
          </ul>
          <p>
            These dependencies are downloaded and built by the install.sh
            script. Script installs everything in the ./engines folder, not
            affecting any system installations.
          </p>
          <p>
            There are two reasons not to rely on QEMU installed system-wide:
          </p>
          <ul>
            <li>
              QEMU snapshots are supposed to be compatible among different QEMU
              versions, but sometimes it occurs to be not true,
            </li>
            <li>
              ostimeline may use several different versions of QEMU (useful if
              some ancient operating system needs a specific QEMU version).
            </li>
          </ul>
          <p>
            Versions of QEMU to build can be changed in timeline.conf file (e.g.
            if you want some special version for your own timeline).
          </p>
        </section>
      </main>

      <Partners />
    </div>
  );
};

export default Architecture;
