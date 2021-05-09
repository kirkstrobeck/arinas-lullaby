import React from 'react';

const shadow = {
  boxShadow: '0 25px 70px rgba(0, 0, 0, 0.5)',
};

const iframe = {
  ...shadow,

  borderRadius: 5,
};

const Base = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap');

* {
  --moz-osx-font-smoothing: grayscale;
  --webkit-font-smoothing: antialiased;
}

*, *:before, *:after {
  box-sizing: inherit;
}

html {
  background: #033e7a;
  color: #fff;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
}

body {
  padding: 30px;
}

html, body, #__next {
  margin: 0;
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}

h1 {
  font-size: 35px;
  font-weight: 300;
  text-align: center;
}

hr {
  border: solid 1px #fff;
  height: 0;
  border-radius: 100%;
  margin: 30px 0;
}

a {
  color: inherit;
}

.embeds {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.embeds :first-child {
  margin-bottom: 20px;
}

.embeds .gutter {
  display: none;
}

@media only screen and (min-width: 768px) {
  h1 {
    font-size: 65px;
  }

  .embeds {
    justify-content: space-between;
  }

  .embeds :first-child {
    margin-bottom: 0;
  }

  .embeds .gutter {
    display: block;
  }
}
          `,
        }}
      />
      <div
        style={{
          backgroundImage: 'url(/images/background.jpg)',
          backgroundSize: 'cover',
          opacity: 0.6,
          height: '100vh',
          left: 0,
          position: 'fixed',
          top: 0,
          width: '100vw',
          zIndex: -1,
        }}
      />
      <section
        style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <h1>Arina’s lullaby 🌙</h1>
          <div className="embeds">
            <div style={{ lineHeight: 0 }}>
              <iframe
                style={iframe}
                allow="autoplay"
                frameBorder="no"
                height="300"
                scrolling="no"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1042685539&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                width="100%"
              ></iframe>
              <div style={{ display: 'none' }}>
                <a href="https://soundcloud.com/kirk-1-1">kirkstrobeck</a>
                <a href="https://soundcloud.com/kirk-1-1/daytime-feat-michael-blake">
                  Nighttime (feat. Michael Blake)
                </a>
              </div>
            </div>
            <div className="gutter" style={{ width: 50 }}></div>
            <div style={{ lineHeight: 0 }}>
              <iframe
                style={iframe}
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1042685590&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
              <div style={{ display: 'none' }}>
                <a href="https://soundcloud.com/kirk-1-1">kirkstrobeck</a>
                <a href="https://soundcloud.com/kirk-1-1/nighttime-feat-michael-blake">
                  Nighttime (feat. Michael Blake)
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              ...shadow,

              maxWidth: 610,
              background: 'rgba(255, 255, 255, 0.85)',
              padding: 20,
              marginTop: 50,
              color: '#033e7a',
              borderRadius: 5,
              border: 'double #fff 3px',
              boxShadow: 'inset 0 5px 60px 0px rgba(255, 255, 255, 1)',
            }}
          >
            <script
              async
              type="text/javascript"
              src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-609441393023e9f4"
            ></script>
            <div
              className="addthis_inline_share_toolbox"
              style={{ textAlign: 'center' }}
            ></div>
            <hr />
            <p>
              This mother’s day, I wanted to share a gift to all moms,
              especially my wife (Arina) and my mom (Kay).{' '}
            </p>
            <p>
              When I was a kid, my kind, caring, and confident mom would sing
              lullabies to me. It was a time set aside for peace and comfort;
              She was the inspiration for this work.
            </p>
            <p>
              Now that I get to be a dad, I’m on the other side putting my
              daughter (Eva) to sleep, so I came up with this melody, sung in
              “na na na’s,” because I wanted to spend time creating the perfect
              sound for us. My wife sings it too; it’s put our kids to sleep
              many times. 😴
            </p>
            <p>
              It’s a special memory from our fam, which wouldn’t be anything
              without my beautiful, strong, and caring wife, so the work is
              dedicated to her, hence “Arina’s lullaby.”
            </p>
            <p>
              I’m no musician, so I worked with the incredibly talented Michael
              Blake to develop it into something that others can enjoy too. 🎵
            </p>
            <hr />
            <ul>
              {[
                // {
                //   text: 'DistroKid',
                //   url:
                //     'https://distrokid.com/hyperfollow/kirkstrobeck/arinas-lullaby',
                // },
                {
                  text: 'Michael Blake',
                  description: 'Musician',
                  url:
                    'https://www.youtube.com/channel/UCwMDLy2cEoZIlkI16vBI90A',
                },
                {
                  text: 'Album',
                  description: 'Download WAV’s',
                  url:
                    'https://www.dropbox.com/sh/eehkkp7ailrhyo1/AADt3LRYgBiART2qlzkS_K7ia/Album?dl=0&subfolder_nav_tracking=1',
                },
                {
                  text: 'Sheet music',
                  description: 'Download PDF',
                  url:
                    'https://www.dropbox.com/sh/eehkkp7ailrhyo1/AAAggziur-9705HkM3cElQ2Ha?dl=0&preview=SheetMusic.pdf',
                },
                {
                  text: 'Music source files',
                  description: 'Download Ableton file and stems',
                  url:
                    'https://www.dropbox.com/sh/eehkkp7ailrhyo1/AABeqxAMZ5Dizp35bBlC6Rmba/Source%20files?dl=0&subfolder_nav_tracking=1',
                },
                {
                  text: 'Cover art',
                  description: 'Download PDF and source(s)',
                  url:
                    'https://www.dropbox.com/sh/eehkkp7ailrhyo1/AABhSIvc1HahRUNhaVIIz4XGa/Cover%20art?dl=0&subfolder_nav_tracking=1',
                },
                // {
                //   text: 'GitHub',
                //   description: 'PRs welcome; Improve this site',
                //   url: '',
                // },
              ].map(({ description, url, text }) => (
                <li key={url} style={{ margin: '10px 0' }}>
                  <a href={url}>{text}</a>
                  {description && (
                    <span
                      style={{
                        color: '#000',
                        opacity: 0.65,
                        fontSize: 17,
                      }}
                    >
                      {' – '}
                      {description}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <hr />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '15px',
              }}
            >
              <div style={{ marginRight: 20 }}>
                <a
                  rel="license"
                  href="http://creativecommons.org/licenses/by-sa/4.0/"
                >
                  <img
                    alt="Creative Commons License"
                    style={{ borderWidth: 0 }}
                    src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
                  />
                </a>
              </div>
              <div>
                This work is licensed under a{' '}
                <a
                  rel="license"
                  href="http://creativecommons.org/licenses/by-sa/4.0/"
                >
                  Creative Commons Attribution-ShareAlike 4.0 International
                  License
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </section>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5DWMH87KMR"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-5DWMH87KMR');
          `,
        }}
      />
    </>
  );
};

export default Base;
