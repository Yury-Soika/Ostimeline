import React from 'react';
import Partners from './../Partners';
import '../../App.css';
import './../content.scss';

const Home = () => {
  return (
    <div className="content">
      <main>
        <section>
          <h3 className="title">16th free/libre software developers conference</h3>

          <p>We are presenting ostimeline project on the 16th free/libre software developers conference
          (<a
            href="https://www.basealt.ru/about/news/archive/view/shestnadcataja-konferencija-razrabotchikov-svobodnykh-pro">OSSDevConf</a>)
          which taked place in Kaluga (Russia) on September 27-29 2019</p>
        </section>

        <section>
          <h3 className="title">Lovely Gray Buttons demo</h3>

          <p>Our 1st demo to appear on the renewed website is "Lovey Gray Buttons" - the open-source history
        of widgets with snippets of code. It shows 30 years of the widget toolkits evolution, and it is
        easy to present because more than 90% of historically significant widget toolkits have open
        source versions now. Following topics (including widgets demo and simple source code comparison)
        are covered in this timeline: first widgets of the 198x (Apple Lisa, early Unix GUI - Andrew
        Toolkit and Project Athena, OpenLook and Motif, main non-Unix toolkits - WinAPI and NextSTEP),
        toolkits of 199x (Intuition widget set from Amiga, TCL/TK, MFC and Java AWT wrapper toolkits,
        main Linux widget libraries - GTK+ and QT, Java Swing), Visual theming in 199x and 200x (initial
        raise of customization engines, architecture and visual styles from the second half of 1990s,
        Post-Y2K styles - Apple Cocoa, Java Desktop & Nimbus, KDE Oxygen, etc.).
          </p>
        </section>
      </main>

      <Partners />
    </div>
  );
}

export default Home;
