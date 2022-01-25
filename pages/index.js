import { Fragment, useState, useEffect } from "react";
import { verifyMessage } from "@ethersproject/wallet";
import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../components/Utils/Account";
import Nav from "../components/Layout/Nav";
import Footer from "../components/Layout/Footer";
import "animate.css/animate.min.css";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import ETHBalance from "../components/Utils/ETHBalance";
import useEagerConnect from "../hooks/useEagerConnect";
import usePersonalSign, { hexlify } from "../hooks/usePersonalSign";
import ScrollAnimation from "react-animate-on-scroll";
import ScrollToTop from "react-scroll-to-top";

const contractAddress2 = 0x4a139bb672adc671d84dd194a5d9f8ad8d7d7167;

const Slide = () => (
  <div className="mb-32 mt-16">
    {/* <div className="section"></div> */}
    <Controller>
      <div className="h-full w-full">
        <Scene indicators duration={1000} pin reverse={true} offset={0}>
          {(progress) => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 2600">
              <rect
                width="1920"
                height="2600"
                fill="th-background"
                fill-opacity="0.0"
              />
              <Timeline
                progress={progress}
                paused
                target={
                  <polyline
                    stroke="#f9b700"
                    strokeWidth="5"
                    fill="none"
                    points="377.54 351.86 1498.93 354.27 1498.93 477.51 950.57 477.94 950.57 751.94 599.92 871.76 1258.23 871.76 950.57 986.8 950.55 1272.04 599.9 1391.86 1393.21 1391.86 950.55 1506.9 950.55 1950.53 892.68 2047.19 1008.13 2047.19 950.55 1950.53 950.49 2014.46 1008.13 2047.19"
                  />
                }
              >
                <Tween
                  from={{
                    strokeDasharray: 6245.26,
                    strokeDashoffset: 6245.26
                  }}
                  to={{
                    strokeDashoffset: 0
                  }}
                />
              </Timeline>

              <Timeline
                progress={progress}
                paused
                target={
                  <g fill="white">
                    <path d="M662.27,103v53.75H649.68V103H635.15V92.2h41.64V103Z" />
                    <path d="M697.32,117.18h27.3v-25h12.59v64.59H724.62V128h-27.3v28.76H684.73V92.2h12.59Z" />
                    <path d="M787.75,103H764.51v14.43h22.27v10.85H764.51v17.62h23.24v10.85H751.92V92.2h35.83Z" />
                    <path
                      fill="white"
                      d="M841.19,92.2c8.91,0,13.46,2.32,16.46,4.84a18.34,18.34,0,0,1,6.4,14.53c0,6.29-2.52,11.81-7.56,15.2a17.87,17.87,0,0,1-7.07,2.81l20.14,27.21H853.88l-17.24-25.95h-1.55v25.95H822.5V92.2Zm-6.1,29.73h3.59c2.42,0,12.39-.29,12.39-9.78s-9.88-9.69-12.2-9.69h-3.78Z"
                    />
                    <path
                      fill="white"
                      d="M943.93,124.54c0,19.66-14.14,33.7-34.48,33.7S875,144.2,875,124.54s14.14-33.79,34.47-33.79S943.93,104.88,943.93,124.54Zm-13,0c0-13.07-8.91-22.37-21.5-22.37S888,111.47,888,124.54s8.91,22.27,21.49,22.27S931,137.61,931,124.54Z"
                    />
                    <path d="M990.88,143.23h-26l-5.72,13.56H945.47L973.26,92.2h9.88l27,64.59H996.6ZM987.2,133,978,109.73,968.81,133Z" />
                    <path d="M1034.55,92.2c9,0,16.85,1,24,6.29,7.85,5.91,12.4,15.3,12.4,26.05s-4.46,20-13,26.05c-7.55,5.33-14.62,6.2-23.63,6.2H1017.7V92.2Zm-4.26,53.74h3.87c3.2,0,10.17-.19,15.79-4.26,5.13-3.68,8-10.26,8-17.14s-2.81-13.36-7.94-17.24-11.62-4.26-15.88-4.26h-3.87Z" />
                    <path d="M1113.85,92.2h9.1l17.14,41.06L1158,92.2h9.1L1178,156.79h-12.78l-5.81-39.8L1142,156.79h-4.26L1121.2,117l-6.58,39.8h-12.78Z" />
                    <path d="M1227.62,143.23h-26l-5.71,13.56H1182.2L1210,92.2h9.88l27,64.59h-13.56ZM1223.94,133l-9.2-23.24-9.2,23.24Z" />
                    <path d="M1273.22,92.2c7.26,0,12.3.77,17,4.94a20.58,20.58,0,0,1,6.59,15.59c0,2.52-.39,9.49-5.33,14.43-3.58,3.58-8.91,5.71-16.36,5.71H1267v23.92h-12.59V92.2ZM1267,122h5.13c2.43,0,5.52,0,8.24-2a9.64,9.64,0,0,0,3.48-7.55,8.88,8.88,0,0,0-3.58-7.36c-2.62-1.84-5.91-2-8.91-2H1267Z" />
                    <path
                      fill="#f9b700"
                      strokeWidth="10"
                      d="M607.15,77.07H497.8l54.31,94.85Zm-2,1.81-52.67,90.76v-.34l-.15-59.65,53-31.07Zm-.18-1-.29.17-52.6,31.11L499.93,77.87ZM551.87,109.7l-.16,59.92-.17-.3L499.59,78.59l52.28,31.06Z"
                    />
                    <path
                      fill="#f9b700"
                      strokeWidth="10"
                      d="M1312.85,171.92H1422.2l-54.31-94.85Zm2-1.82,52.67-90.75v.34l.15,59.65-53,31.07Zm.18,1,.29-.17,52.6-31.11,52.18,31.28Zm53.13-31.83.16-59.93.17.3,52,90.74-52.28-31.06Z"
                    />
                  </g>
                }
              >
                <Tween
                  delay="-50"
                  from={{
                    opacity: 0
                  }}
                  to={{
                    opacity: 3
                  }}
                />
              </Timeline>

              <Timeline
                progress={progress}
                paused
                target={
                  <g xmlns="http://www.w3.org/2000/svg">
                    <rect
                      width="475.39"
                      height="123.97"
                      x="164.7"
                      y="289.44"
                      fill="#eddec3"
                      rx="10"
                    ></rect>
                    <rect
                      width="464.35"
                      height="112.22"
                      x="170.21"
                      y="295.32"
                      fill="none"
                      stroke="#000"
                      strokeMiterlimit="10"
                      rx="4"
                    ></rect>
                    <circle
                      cx="201.23"
                      cy="351.64"
                      r="24.24"
                      stroke="#eddec3"
                      strokeMiterlimit="10"
                      strokeWidth="3"
                      opacity="0.31"
                    ></circle>
                    <path
                      fill="none"
                      stroke="#eddec3"
                      strokeMiterlimit="10"
                      strokeWidth="3"
                      d="M218.37 368.79L184.09 334.5"
                    ></path>
                    <path
                      fill="none"
                      stroke="#eddec3"
                      strokeMiterlimit="10"
                      strokeWidth="3"
                      d="M184.09 368.79L218.37 334.5"
                    ></path>
                    <text
                      fontFamily="FuturaPT-Heavy, Futura PT"
                      fontSize="40"
                      fontWeight="800"
                      transform="translate(235.88 372.3)"
                    >
                      <tspan letterSpacing="-.083em">Y</tspan>
                      <tspan x="21.96" y="0">
                        ggd
                      </tspan>
                      <tspan x="93.64" y="0" letterSpacing="-.015em">
                        r
                      </tspan>
                      <tspan x="108.4" y="0" letterSpacing="0em">
                        asil{" "}
                      </tspan>
                      <tspan x="180.59" y="0" letterSpacing="-.059em">
                        T
                      </tspan>
                      <tspan x="196.63" y="0">
                        o
                      </tspan>
                      <tspan x="220.31" y="0" letterSpacing="-.021em">
                        k
                      </tspan>
                      <tspan x="242.11" y="0">
                        en D
                      </tspan>
                      <tspan x="323.39" y="0" letterSpacing="-.015em">
                        r
                      </tspan>
                      <tspan x="338.15" y="0">
                        op
                      </tspan>
                    </text>
                    <text
                      fontFamily="FuturaPT-Book, Futura PT"
                      fontSize="16"
                      transform="translate(235.88 332.77)"
                    >
                      JANUA
                      <tspan x="47.39" y="0" letterSpacing="-.031em">
                        R
                      </tspan>
                      <tspan x="54.93" y="0" letterSpacing="0em">
                        Y{" "}
                      </tspan>
                      <tspan x="67.14" y="0" letterSpacing="-.038em">
                        2
                      </tspan>
                      <tspan x="75.62" y="0">
                        8th{" "}
                      </tspan>
                      <tspan x="99.38" y="0" letterSpacing="-.025em">
                        2
                      </tspan>
                      <tspan x="108.06" y="0">
                        0
                      </tspan>
                      <tspan x="117.15" y="0" letterSpacing="-.038em">
                        2
                      </tspan>
                      <tspan x="125.63" y="0">
                        2
                      </tspan>
                    </text>
                  </g>
                }
              >
                <Tween
                  delay="-50"
                  from={{
                    opacity: 0
                  }}
                  to={{
                    opacity: 3
                  }}
                />
              </Timeline>
            </svg>
          )}
        </Scene>
      </div>
    </Controller>
    <div className="section" />
  </div>
);

function BackToTop() {
  return (
    <div className="flex mx-auto h-6 w-6">
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-th-accent-light stroke-th-accent-light"
        stroke-width="1px"
      >
        <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" />
      </svg>
    </div>
  );
}

export default function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const sign = usePersonalSign();

  const handleSign = async () => {
    const msg = "Whitelisted for Anthropos";
    const sig = await sign(msg);
    console.log(sig);
    console.log("isValid", verifyMessage(msg, sig) === account);
  };

  const isConnected = typeof account === "string" && !!library;

  return (
    <div className="bg-th-background w-screen h-full relative">
      <Head>
        <title>Anthromancer - Home</title>
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
      </Head>
      <div className="">
        <div className="flex mx-auto scale-30 bg-white opacity-90">
          <ScrollToTop smooth component={<BackToTop />} />
        </div>
      </div>
      <div className="absolute top-0 z-50 w-full">
        <Nav />
      </div>

      <div className="h-3 w-full bg-lime-300 invisible">Spacer</div>

      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="none"
        animateOnce
        duration={2}
        delay={0}
      >
        <div className="relative z-0 mt-0  overflow-hidden items-center w-full  h-128  lg:h-156">
          <img
            src="/ProductShot.jpg"
            className=" object-cover w-full h-136  lg:h-156 object-center rounded-lg  "
          />
          <div className="opacity-30 text-white absolute top-0 text-left w-full h-48  justify-end">
            <p className="invisible font-thin leading-wide drop-shadow-lg text-xl leading-snug mb-2 -mt-1 ">
              Expressed through the Visual Language of Sean Calen Blake
            </p>
          </div>
          <div className="absolute bottom-16 inset-x-0 w-full flex mx-auto justify-center">
            <div className=" w-80 text-center font-thin font-futura text-3xl text-th-primary-dark px-8 py-1 pt-1 font-light border-2 bg-th-primary-medium border-th-accent-light hover:bg-th-accent-light hover:border-th-primary-medium cursor-pointer ">
              ORDER NOW
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <Slide />
      <Footer />

      <style jsx>{`
        #title {
          font-family: Futura;
        }

        @font-face {
          font-family: Futura;
          src: url(/fonts/futura-pt-book.otf);
        }
        @font-face {
          font-family: Anthro;
          src: url(/fonts/AnthromancerRegular2.otf);
        }
      `}</style>

      <style jsx global>{`
        body {
          margin: 0;
        }

        html {
          font-family: sans-serif, Apple Color Emoji, Segoe UI Emoji,
            Segoe UI Symbol, Noto Color Emoji;
          line-height: 1.5;
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
