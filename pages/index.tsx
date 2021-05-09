import Head from 'next/head';
import Image from 'next/image';
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
    <Head>
      <meta charSet="UTF-8" />
      <title>Arina&#039;s lullaby</title>
      <meta content="174829003346" property="fb:app_id" />
      <meta content="Arina&#039;s lullaby" property="og:title" />
      <meta
        content="Kirk Strobeck · Single · 2021 · 2 songs."
        property="og:description"
      />
      <meta
        content="https://open.spotify.com/album/1UoGlEQ2Cr4wzwC707U9qp"
        property="og:url"
      />
      <meta
        content="https://i.scdn.co/image/ab67616d0000b27348def662977a54b6bb8ca8e3"
        property="og:image"
      />
      <meta content="music.album" property="og:type" />
      <meta content="Spotify" property="og:site_name" />
      <meta content="AD" property="og:restrictions:country:allowed" />
      <meta content="AE" property="og:restrictions:country:allowed" />
      <meta content="AG" property="og:restrictions:country:allowed" />
      <meta content="AL" property="og:restrictions:country:allowed" />
      <meta content="AM" property="og:restrictions:country:allowed" />
      <meta content="AO" property="og:restrictions:country:allowed" />
      <meta content="AR" property="og:restrictions:country:allowed" />
      <meta content="AT" property="og:restrictions:country:allowed" />
      <meta content="AU" property="og:restrictions:country:allowed" />
      <meta content="AZ" property="og:restrictions:country:allowed" />
      <meta content="BA" property="og:restrictions:country:allowed" />
      <meta content="BB" property="og:restrictions:country:allowed" />
      <meta content="BD" property="og:restrictions:country:allowed" />
      <meta content="BE" property="og:restrictions:country:allowed" />
      <meta content="BF" property="og:restrictions:country:allowed" />
      <meta content="BG" property="og:restrictions:country:allowed" />
      <meta content="BH" property="og:restrictions:country:allowed" />
      <meta content="BI" property="og:restrictions:country:allowed" />
      <meta content="BJ" property="og:restrictions:country:allowed" />
      <meta content="BN" property="og:restrictions:country:allowed" />
      <meta content="BO" property="og:restrictions:country:allowed" />
      <meta content="BR" property="og:restrictions:country:allowed" />
      <meta content="BS" property="og:restrictions:country:allowed" />
      <meta content="BT" property="og:restrictions:country:allowed" />
      <meta content="BW" property="og:restrictions:country:allowed" />
      <meta content="BY" property="og:restrictions:country:allowed" />
      <meta content="BZ" property="og:restrictions:country:allowed" />
      <meta content="CA" property="og:restrictions:country:allowed" />
      <meta content="CH" property="og:restrictions:country:allowed" />
      <meta content="CI" property="og:restrictions:country:allowed" />
      <meta content="CL" property="og:restrictions:country:allowed" />
      <meta content="CM" property="og:restrictions:country:allowed" />
      <meta content="CO" property="og:restrictions:country:allowed" />
      <meta content="CR" property="og:restrictions:country:allowed" />
      <meta content="CV" property="og:restrictions:country:allowed" />
      <meta content="CW" property="og:restrictions:country:allowed" />
      <meta content="CY" property="og:restrictions:country:allowed" />
      <meta content="CZ" property="og:restrictions:country:allowed" />
      <meta content="DE" property="og:restrictions:country:allowed" />
      <meta content="DJ" property="og:restrictions:country:allowed" />
      <meta content="DK" property="og:restrictions:country:allowed" />
      <meta content="DM" property="og:restrictions:country:allowed" />
      <meta content="DO" property="og:restrictions:country:allowed" />
      <meta content="DZ" property="og:restrictions:country:allowed" />
      <meta content="EC" property="og:restrictions:country:allowed" />
      <meta content="EE" property="og:restrictions:country:allowed" />
      <meta content="EG" property="og:restrictions:country:allowed" />
      <meta content="ES" property="og:restrictions:country:allowed" />
      <meta content="FI" property="og:restrictions:country:allowed" />
      <meta content="FJ" property="og:restrictions:country:allowed" />
      <meta content="FM" property="og:restrictions:country:allowed" />
      <meta content="FR" property="og:restrictions:country:allowed" />
      <meta content="GA" property="og:restrictions:country:allowed" />
      <meta content="GB" property="og:restrictions:country:allowed" />
      <meta content="GD" property="og:restrictions:country:allowed" />
      <meta content="GE" property="og:restrictions:country:allowed" />
      <meta content="GH" property="og:restrictions:country:allowed" />
      <meta content="GM" property="og:restrictions:country:allowed" />
      <meta content="GN" property="og:restrictions:country:allowed" />
      <meta content="GQ" property="og:restrictions:country:allowed" />
      <meta content="GR" property="og:restrictions:country:allowed" />
      <meta content="GT" property="og:restrictions:country:allowed" />
      <meta content="GW" property="og:restrictions:country:allowed" />
      <meta content="GY" property="og:restrictions:country:allowed" />
      <meta content="HK" property="og:restrictions:country:allowed" />
      <meta content="HN" property="og:restrictions:country:allowed" />
      <meta content="HR" property="og:restrictions:country:allowed" />
      <meta content="HT" property="og:restrictions:country:allowed" />
      <meta content="HU" property="og:restrictions:country:allowed" />
      <meta content="ID" property="og:restrictions:country:allowed" />
      <meta content="IE" property="og:restrictions:country:allowed" />
      <meta content="IL" property="og:restrictions:country:allowed" />
      <meta content="IN" property="og:restrictions:country:allowed" />
      <meta content="IS" property="og:restrictions:country:allowed" />
      <meta content="IT" property="og:restrictions:country:allowed" />
      <meta content="JM" property="og:restrictions:country:allowed" />
      <meta content="JO" property="og:restrictions:country:allowed" />
      <meta content="JP" property="og:restrictions:country:allowed" />
      <meta content="KE" property="og:restrictions:country:allowed" />
      <meta content="KG" property="og:restrictions:country:allowed" />
      <meta content="KH" property="og:restrictions:country:allowed" />
      <meta content="KI" property="og:restrictions:country:allowed" />
      <meta content="KM" property="og:restrictions:country:allowed" />
      <meta content="KN" property="og:restrictions:country:allowed" />
      <meta content="KR" property="og:restrictions:country:allowed" />
      <meta content="KW" property="og:restrictions:country:allowed" />
      <meta content="KZ" property="og:restrictions:country:allowed" />
      <meta content="LA" property="og:restrictions:country:allowed" />
      <meta content="LB" property="og:restrictions:country:allowed" />
      <meta content="LC" property="og:restrictions:country:allowed" />
      <meta content="LI" property="og:restrictions:country:allowed" />
      <meta content="LK" property="og:restrictions:country:allowed" />
      <meta content="LR" property="og:restrictions:country:allowed" />
      <meta content="LS" property="og:restrictions:country:allowed" />
      <meta content="LT" property="og:restrictions:country:allowed" />
      <meta content="LU" property="og:restrictions:country:allowed" />
      <meta content="LV" property="og:restrictions:country:allowed" />
      <meta content="MA" property="og:restrictions:country:allowed" />
      <meta content="MC" property="og:restrictions:country:allowed" />
      <meta content="MD" property="og:restrictions:country:allowed" />
      <meta content="ME" property="og:restrictions:country:allowed" />
      <meta content="MG" property="og:restrictions:country:allowed" />
      <meta content="MH" property="og:restrictions:country:allowed" />
      <meta content="MK" property="og:restrictions:country:allowed" />
      <meta content="ML" property="og:restrictions:country:allowed" />
      <meta content="MN" property="og:restrictions:country:allowed" />
      <meta content="MO" property="og:restrictions:country:allowed" />
      <meta content="MR" property="og:restrictions:country:allowed" />
      <meta content="MT" property="og:restrictions:country:allowed" />
      <meta content="MU" property="og:restrictions:country:allowed" />
      <meta content="MV" property="og:restrictions:country:allowed" />
      <meta content="MW" property="og:restrictions:country:allowed" />
      <meta content="MX" property="og:restrictions:country:allowed" />
      <meta content="MY" property="og:restrictions:country:allowed" />
      <meta content="MZ" property="og:restrictions:country:allowed" />
      <meta content="NA" property="og:restrictions:country:allowed" />
      <meta content="NE" property="og:restrictions:country:allowed" />
      <meta content="NG" property="og:restrictions:country:allowed" />
      <meta content="NI" property="og:restrictions:country:allowed" />
      <meta content="NL" property="og:restrictions:country:allowed" />
      <meta content="NO" property="og:restrictions:country:allowed" />
      <meta content="NP" property="og:restrictions:country:allowed" />
      <meta content="NR" property="og:restrictions:country:allowed" />
      <meta content="NZ" property="og:restrictions:country:allowed" />
      <meta content="OM" property="og:restrictions:country:allowed" />
      <meta content="PA" property="og:restrictions:country:allowed" />
      <meta content="PE" property="og:restrictions:country:allowed" />
      <meta content="PG" property="og:restrictions:country:allowed" />
      <meta content="PH" property="og:restrictions:country:allowed" />
      <meta content="PK" property="og:restrictions:country:allowed" />
      <meta content="PL" property="og:restrictions:country:allowed" />
      <meta content="PS" property="og:restrictions:country:allowed" />
      <meta content="PT" property="og:restrictions:country:allowed" />
      <meta content="PW" property="og:restrictions:country:allowed" />
      <meta content="PY" property="og:restrictions:country:allowed" />
      <meta content="QA" property="og:restrictions:country:allowed" />
      <meta content="RO" property="og:restrictions:country:allowed" />
      <meta content="RS" property="og:restrictions:country:allowed" />
      <meta content="RU" property="og:restrictions:country:allowed" />
      <meta content="RW" property="og:restrictions:country:allowed" />
      <meta content="SA" property="og:restrictions:country:allowed" />
      <meta content="SB" property="og:restrictions:country:allowed" />
      <meta content="SC" property="og:restrictions:country:allowed" />
      <meta content="SE" property="og:restrictions:country:allowed" />
      <meta content="SG" property="og:restrictions:country:allowed" />
      <meta content="SI" property="og:restrictions:country:allowed" />
      <meta content="SK" property="og:restrictions:country:allowed" />
      <meta content="SL" property="og:restrictions:country:allowed" />
      <meta content="SM" property="og:restrictions:country:allowed" />
      <meta content="SN" property="og:restrictions:country:allowed" />
      <meta content="SR" property="og:restrictions:country:allowed" />
      <meta content="ST" property="og:restrictions:country:allowed" />
      <meta content="SV" property="og:restrictions:country:allowed" />
      <meta content="SZ" property="og:restrictions:country:allowed" />
      <meta content="TD" property="og:restrictions:country:allowed" />
      <meta content="TG" property="og:restrictions:country:allowed" />
      <meta content="TH" property="og:restrictions:country:allowed" />
      <meta content="TL" property="og:restrictions:country:allowed" />
      <meta content="TN" property="og:restrictions:country:allowed" />
      <meta content="TO" property="og:restrictions:country:allowed" />
      <meta content="TR" property="og:restrictions:country:allowed" />
      <meta content="TT" property="og:restrictions:country:allowed" />
      <meta content="TV" property="og:restrictions:country:allowed" />
      <meta content="TW" property="og:restrictions:country:allowed" />
      <meta content="TZ" property="og:restrictions:country:allowed" />
      <meta content="UA" property="og:restrictions:country:allowed" />
      <meta content="UG" property="og:restrictions:country:allowed" />
      <meta content="US" property="og:restrictions:country:allowed" />
      <meta content="UY" property="og:restrictions:country:allowed" />
      <meta content="UZ" property="og:restrictions:country:allowed" />
      <meta content="VC" property="og:restrictions:country:allowed" />
      <meta content="VN" property="og:restrictions:country:allowed" />
      <meta content="VU" property="og:restrictions:country:allowed" />
      <meta content="WS" property="og:restrictions:country:allowed" />
      <meta content="XK" property="og:restrictions:country:allowed" />
      <meta content="ZA" property="og:restrictions:country:allowed" />
      <meta content="ZM" property="og:restrictions:country:allowed" />
      <meta content="ZW" property="og:restrictions:country:allowed" />
      <meta
        content="https://open.spotify.com/artist/33I4LwbxEGDrhvSk4gPVFd"
        property="music:musician"
      />
      <meta content="2021-05-04" property="music:release_date" />
      <meta
        content="https://open.spotify.com/track/07Svk2rKAtdcqTEc3k7bDk"
        property="music:song"
      />
      <meta content="1" property="music:song:disc" />
      <meta content="1" property="music:song:track" />
      <meta
        content="https://open.spotify.com/track/79vcsT4uODfFKPmmvw4Gi4"
        property="music:song"
      />
      <meta content="1" property="music:song:disc" />
      <meta content="2" property="music:song:track" />
      <meta content="Spotify" property="al:android:app_name" />
      <meta content="com.spotify.music" property="al:android:package" />
      <meta
        content="spotify://album/1UoGlEQ2Cr4wzwC707U9qp"
        property="al:android:url"
      />
      <meta content="Spotify" property="al:ios:app_name" />
      <meta content="324684580" property="al:ios:app_store_id" />
      <meta
        content="spotify://album/1UoGlEQ2Cr4wzwC707U9qp"
        property="al:ios:url"
      />
      <meta content="@spotify" property="twitter:site" />
      <meta content="Arina&#039;s lullaby" property="twitter:title" />
      <meta
        content="Kirk Strobeck · Single · 2021 · 2 songs."
        property="twitter:description"
      />
      <meta
        content="https://i.scdn.co/image/ab67616d0000b27348def662977a54b6bb8ca8e3"
        property="twitter:image"
      />
      <meta content="audio" property="twitter:card" />
      <meta content="324684580" property="twitter:app:id:iphone" />
      <meta content="com.spotify.music" property="twitter:app:id:googleplay" />
      <meta content="Spotify" property="twitter:audio:partner" />
      <meta content="Kirk Strobeck" property="twitter:audio:artist_name" />
      <meta
        content="https://open.spotify.com/embed/album/1UoGlEQ2Cr4wzwC707U9qp?utm_campaign=twitter-player&amp;utm_source=open&amp;utm_medium=twitter"
        property="twitter:player"
      />
      <meta content="504" property="twitter:player:width" />
      <meta content="584" property="twitter:player:height" />
      <link
        href="https://open.spotify.com/album/1UoGlEQ2Cr4wzwC707U9qp"
        rel="canonical"
      />
      <link
        href="android-app://com.spotify.music/spotify/album/1UoGlEQ2Cr4wzwC707U9qp"
        rel="alternate"
      />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html:
            '{"@context":"http://schema.googleapis.com/","@type":"MusicAlbum","@id":"https://open.spotify.com/album/1UoGlEQ2Cr4wzwC707U9qp","url":"https://open.spotify.com/album/1UoGlEQ2Cr4wzwC707U9qp","name":"Arina\'s lullaby","description":"Listen to Arina\'s lullaby on Spotify. Kirk Strobeck \u00B7 Single \u00B7 2021 \u00B7 2 songs.","datePublished":"2021-05-04","potentialAction":{"@type":"ListenAction","target":[{"@type":"EntryPoint","urlTemplate":"https://open.spotify.com/album/1UoGlEQ2Cr4wzwC707U9qp?autoplay=true","actionPlatform":["http://schema.org/DesktopWebPlatform","http://schema.org/IOSPlatform","http://schema.googleapis.com/GoogleAudioCast","http://schema.googleapis.com/GoogleVideoCast"]},"android-app://com.spotify.music/spotify/album/1UoGlEQ2Cr4wzwC707U9qp/play"],"expectsAcceptanceOf":{"@type":"Offer","category":"free","eligibleRegion":[{"@type":"Country","name":"AD"},{"@type":"Country","name":"AE"},{"@type":"Country","name":"AG"},{"@type":"Country","name":"AL"},{"@type":"Country","name":"AM"},{"@type":"Country","name":"AO"},{"@type":"Country","name":"AR"},{"@type":"Country","name":"AT"},{"@type":"Country","name":"AU"},{"@type":"Country","name":"AZ"},{"@type":"Country","name":"BA"},{"@type":"Country","name":"BB"},{"@type":"Country","name":"BD"},{"@type":"Country","name":"BE"},{"@type":"Country","name":"BF"},{"@type":"Country","name":"BG"},{"@type":"Country","name":"BH"},{"@type":"Country","name":"BI"},{"@type":"Country","name":"BJ"},{"@type":"Country","name":"BN"},{"@type":"Country","name":"BO"},{"@type":"Country","name":"BR"},{"@type":"Country","name":"BS"},{"@type":"Country","name":"BT"},{"@type":"Country","name":"BW"},{"@type":"Country","name":"BY"},{"@type":"Country","name":"BZ"},{"@type":"Country","name":"CA"},{"@type":"Country","name":"CH"},{"@type":"Country","name":"CI"},{"@type":"Country","name":"CL"},{"@type":"Country","name":"CM"},{"@type":"Country","name":"CO"},{"@type":"Country","name":"CR"},{"@type":"Country","name":"CV"},{"@type":"Country","name":"CW"},{"@type":"Country","name":"CY"},{"@type":"Country","name":"CZ"},{"@type":"Country","name":"DE"},{"@type":"Country","name":"DJ"},{"@type":"Country","name":"DK"},{"@type":"Country","name":"DM"},{"@type":"Country","name":"DO"},{"@type":"Country","name":"DZ"},{"@type":"Country","name":"EC"},{"@type":"Country","name":"EE"},{"@type":"Country","name":"EG"},{"@type":"Country","name":"ES"},{"@type":"Country","name":"FI"},{"@type":"Country","name":"FJ"},{"@type":"Country","name":"FM"},{"@type":"Country","name":"FR"},{"@type":"Country","name":"GA"},{"@type":"Country","name":"GB"},{"@type":"Country","name":"GD"},{"@type":"Country","name":"GE"},{"@type":"Country","name":"GH"},{"@type":"Country","name":"GM"},{"@type":"Country","name":"GN"},{"@type":"Country","name":"GQ"},{"@type":"Country","name":"GR"},{"@type":"Country","name":"GT"},{"@type":"Country","name":"GW"},{"@type":"Country","name":"GY"},{"@type":"Country","name":"HK"},{"@type":"Country","name":"HN"},{"@type":"Country","name":"HR"},{"@type":"Country","name":"HT"},{"@type":"Country","name":"HU"},{"@type":"Country","name":"ID"},{"@type":"Country","name":"IE"},{"@type":"Country","name":"IL"},{"@type":"Country","name":"IN"},{"@type":"Country","name":"IS"},{"@type":"Country","name":"IT"},{"@type":"Country","name":"JM"},{"@type":"Country","name":"JO"},{"@type":"Country","name":"JP"},{"@type":"Country","name":"KE"},{"@type":"Country","name":"KG"},{"@type":"Country","name":"KH"},{"@type":"Country","name":"KI"},{"@type":"Country","name":"KM"},{"@type":"Country","name":"KN"},{"@type":"Country","name":"KR"},{"@type":"Country","name":"KW"},{"@type":"Country","name":"KZ"},{"@type":"Country","name":"LA"},{"@type":"Country","name":"LB"},{"@type":"Country","name":"LC"},{"@type":"Country","name":"LI"},{"@type":"Country","name":"LK"},{"@type":"Country","name":"LR"},{"@type":"Country","name":"LS"},{"@type":"Country","name":"LT"},{"@type":"Country","name":"LU"},{"@type":"Country","name":"LV"},{"@type":"Country","name":"MA"},{"@type":"Country","name":"MC"},{"@type":"Country","name":"MD"},{"@type":"Country","name":"ME"},{"@type":"Country","name":"MG"},{"@type":"Country","name":"MH"},{"@type":"Country","name":"MK"},{"@type":"Country","name":"ML"},{"@type":"Country","name":"MN"},{"@type":"Country","name":"MO"},{"@type":"Country","name":"MR"},{"@type":"Country","name":"MT"},{"@type":"Country","name":"MU"},{"@type":"Country","name":"MV"},{"@type":"Country","name":"MW"},{"@type":"Country","name":"MX"},{"@type":"Country","name":"MY"},{"@type":"Country","name":"MZ"},{"@type":"Country","name":"NA"},{"@type":"Country","name":"NE"},{"@type":"Country","name":"NG"},{"@type":"Country","name":"NI"},{"@type":"Country","name":"NL"},{"@type":"Country","name":"NO"},{"@type":"Country","name":"NP"},{"@type":"Country","name":"NR"},{"@type":"Country","name":"NZ"},{"@type":"Country","name":"OM"},{"@type":"Country","name":"PA"},{"@type":"Country","name":"PE"},{"@type":"Country","name":"PG"},{"@type":"Country","name":"PH"},{"@type":"Country","name":"PK"},{"@type":"Country","name":"PL"},{"@type":"Country","name":"PS"},{"@type":"Country","name":"PT"},{"@type":"Country","name":"PW"},{"@type":"Country","name":"PY"},{"@type":"Country","name":"QA"},{"@type":"Country","name":"RO"},{"@type":"Country","name":"RS"},{"@type":"Country","name":"RU"},{"@type":"Country","name":"RW"},{"@type":"Country","name":"SA"},{"@type":"Country","name":"SB"},{"@type":"Country","name":"SC"},{"@type":"Country","name":"SE"},{"@type":"Country","name":"SG"},{"@type":"Country","name":"SI"},{"@type":"Country","name":"SK"},{"@type":"Country","name":"SL"},{"@type":"Country","name":"SM"},{"@type":"Country","name":"SN"},{"@type":"Country","name":"SR"},{"@type":"Country","name":"ST"},{"@type":"Country","name":"SV"},{"@type":"Country","name":"SZ"},{"@type":"Country","name":"TD"},{"@type":"Country","name":"TG"},{"@type":"Country","name":"TH"},{"@type":"Country","name":"TL"},{"@type":"Country","name":"TN"},{"@type":"Country","name":"TO"},{"@type":"Country","name":"TR"},{"@type":"Country","name":"TT"},{"@type":"Country","name":"TV"},{"@type":"Country","name":"TW"},{"@type":"Country","name":"TZ"},{"@type":"Country","name":"UA"},{"@type":"Country","name":"UG"},{"@type":"Country","name":"US"},{"@type":"Country","name":"UY"},{"@type":"Country","name":"UZ"},{"@type":"Country","name":"VC"},{"@type":"Country","name":"VN"},{"@type":"Country","name":"VU"},{"@type":"Country","name":"WS"},{"@type":"Country","name":"XK"},{"@type":"Country","name":"ZA"},{"@type":"Country","name":"ZM"},{"@type":"Country","name":"ZW"}]}}}',
        }}
        type="application/ld+json"
      />

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
  font-size: 16px;
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
  border: solid 2px #fff;
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

.content-wrapper {
  margin-top: 20px;
  padding: 25px;
}

ul {
  padding-left: 20px;
}

@media only screen and (min-width: 768px) {
  html {
    font-size: 20px;
  }

  h1 {
    font-size: 65px;
  }

  .embed {
    flex: 1 1 auto;
  }

  .embeds {
    justify-content: space-between;
    margin-bottom: 50px;
  }

  .embeds :first-child {
    margin-bottom: 0;
  }

  .embeds .gutter {
    display: block;
  }

  .content-wrapper {
    margin-top: 20px;
    padding: 50px;
  }
}
          `,
        }}
      />
    </Head>
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
          className="content-wrapper"
          style={{
            ...shadow,

            background: 'rgba(255, 255, 255, 0.85)',
            border: 'double #fff 3px',
            borderRadius: 5,
            boxShadow: 'inset 0 5px 60px 0px rgba(255, 255, 255, 1)',
            color: '#033e7a',
            maxWidth: 610,
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
            or search “Arina’s{'\u00A0'}lullaby” anywhere you listen to
            {'\u00A0'}music
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
          <p
            style={{
              background: '#272723',
              borderRadius: 3,
              lineHeight: 0,
              overflow: 'hidden',
              textAlign: 'center',
            }}
          >
            <Image
              height={400}
              layout="intrinsic"
              src="/images/kay.jpg"
              width={400}
            />
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
          <p
            style={{
              background: '#272723',
              borderRadius: 3,
              lineHeight: 0,
              overflow: 'hidden',
              textAlign: 'center',
            }}
          >
            <Image
              height={400}
              layout="intrinsic"
              src="/images/kay.jpg"
              width={400}
            />
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
