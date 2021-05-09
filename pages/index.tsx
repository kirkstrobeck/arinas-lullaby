import React from 'react';

const shadow = {
  boxShadow: '0 25px 70px rgba(0, 0, 0, 0.5)',
};

const iframe = {
  ...shadow,

  borderRadius: 5,
};

const Base = () => (
  <>
    <style
      // eslint-disable-next-line react/no-danger
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

.embed {
  line-height: 0;
  flex: 0 0 100%;
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

  .embed {
    flex: 1 1 auto;
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
        height: '100vh',
        left: 0,
        opacity: 0.6,
        position: 'fixed',
        top: 0,
        width: '100vw',
        zIndex: -1,
      }}
    />
    <section
      style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '80vh',
      }}
    >
      <div>
        <h1>Arina’s lullaby 🌙</h1>
        <div className="embeds">
          <div className="embed">
            <iframe
              allow="autoplay"
              frameBorder="no"
              height="300"
              scrolling="no"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1042685539&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              style={iframe}
              title="Nighttime (feat. Michael Blake)"
              width="100%"
            />
            <div style={{ display: 'none' }}>
              <a href="https://soundcloud.com/kirk-1-1">kirkstrobeck</a>
              <a href="https://soundcloud.com/kirk-1-1/daytime-feat-michael-blake">
                Nighttime (feat. Michael Blake)
              </a>
            </div>
          </div>
          <div className="gutter" style={{ width: 50 }} />
          <div className="embed">
            <iframe
              allow="autoplay"
              frameBorder="no"
              height="300"
              scrolling="no"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1042685590&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              style={iframe}
              title="Nighttime (feat. Michael Blake)"
              width="100%"
            />
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

            background: 'rgba(255, 255, 255, 0.85)',
            border: 'double #fff 3px',
            borderRadius: 5,
            boxShadow: 'inset 0 5px 60px 0px rgba(255, 255, 255, 1)',
            color: '#033e7a',
            marginTop: 50,
            maxWidth: 610,
            padding: 50,
          }}
        >
          <script
            async
            src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-609441393023e9f4"
            type="text/javascript"
          />
          <div
            className="addthis_inline_share_toolbox"
            style={{ textAlign: 'center' }}
          />
          <hr />
          <p
            style={{
              fontSize: '1.4em',
              textAlign: 'center',
            }}
          >
            Here on{' '}
            <a href="https://open.spotify.com/album/1UoGlEQ2Cr4wzwC707U9qp">
              Spotify
            </a>
            {' and '}
            <a href="https://music.apple.com/us/album/arinas-lullaby-ep/1566415991?uo=4">
               Music
            </a>{' '}
            or search “Arina’s{'\u00A0'}lullaby” anywhere you listen to music
          </p>
          <hr />
          <p>
            This mother’s day, I wanted to share a gift to all moms, especially
            my wife (Arina) and my mom (Kay).
          </p>
          <p>
            When I was a little kid, my kind, caring, and confident mom would
            sing lullabies to me. It was a time set aside for peace and comfort;
            She was the inspiration for this work.
          </p>
          <p>
            Now that I get to be a dad, I’m on the other side putting my
            daughter (Eva) to sleep, so I came up with this melody, sung in “na
            na na’s,” because I wanted to spend time creating the perfect sound
            for us. My wife sings it too; it’s put our kids to sleep many times.
            😴
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
          <p>- Kirk</p>
          <hr />
          <ul>
            {[
              // {
              //   text: 'DistroKid',
              //   url:
              //     'https://distrokid.com/hyperfollow/kirkstrobeck/arinas-lullaby',
              // },
              {
                description: 'Musician',
                text: 'Michael Blake',
                url: 'https://www.youtube.com/channel/UCwMDLy2cEoZIlkI16vBI90A',
              },
              {
                description: 'Download WAV’s',
                text: 'Album',
                url:
                  'https://www.dropbox.com/sh/eehkkp7ailrhyo1/AADt3LRYgBiART2qlzkS_K7ia/Album?dl=0&subfolder_nav_tracking=1',
              },
              {
                description: 'Download PDF',
                text: 'Sheet music',
                url:
                  'https://www.dropbox.com/sh/eehkkp7ailrhyo1/AAAggziur-9705HkM3cElQ2Ha?dl=0&preview=SheetMusic.pdf',
              },
              {
                description: 'Download Ableton file and stems',
                text: 'Music source files',
                url:
                  'https://www.dropbox.com/sh/eehkkp7ailrhyo1/AABeqxAMZ5Dizp35bBlC6Rmba/Source%20files?dl=0&subfolder_nav_tracking=1',
              },
              {
                description: 'Download PDF and source(s)',
                text: 'Cover art',
                url:
                  'https://www.dropbox.com/sh/eehkkp7ailrhyo1/AABhSIvc1HahRUNhaVIIz4XGa/Cover%20art?dl=0&subfolder_nav_tracking=1',
              },
              {
                description: 'PRs welcome; Improve this site',
                text: 'GitHub',
                url: 'https://github.com/kirkstrobeck/arinas-lullaby',
              },
            ].map(({ description, url, text }) => (
              <li key={url} style={{ margin: '10px 0' }}>
                <a href={url}>{text}</a>
                {description && (
                  <span
                    style={{
                      color: '#000',
                      fontSize: 17,
                      opacity: 0.65,
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
              alignItems: 'center',
              display: 'flex',
              fontSize: '15px',
            }}
          >
            <div style={{ marginRight: 20 }}>
              <a
                href="http://creativecommons.org/licenses/by-sa/4.0/"
                rel="license"
              >
                <img
                  alt="Creative Commons License"
                  src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
                  style={{ borderWidth: 0 }}
                />
              </a>
            </div>
            <div>
              This work is licensed under a{' '}
              <a
                href="http://creativecommons.org/licenses/by-sa/4.0/"
                rel="license"
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
    />
    <script
      // eslint-disable-next-line react/no-danger
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

export default Base;
