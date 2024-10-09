"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { PiCertificateBold } from "react-icons/pi";
import { FaPeopleLine, FaSquarePhone } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdCheckCircle } from "react-icons/md";
import styles from "./About.module.scss";

const About = () => {
  const cards = [
    { img: "/image/imgslide1.png", name: "Elisa Peter", detail: "Web Designer" },
    { img: "/image/imgslide2.png", name: "Andrus", detail: "Software Engineer" },
    { img: "/image/imgslide3.png", name: "Elson Peter", detail: "Web Designer" },
    { img: "/image/imgslide4.png", name: "Lisa David", detail: "Java Trainer" },
    { img: "/image/imgslide1.png", name: "Elisa Peter", detail: "Web Designer" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4); // Default value

  useEffect(() => {
    const getCardsPerView = () => {
      if (window.innerWidth < 600) return 1;
      if (window.innerWidth < 1024) return 2;
      return 4;
    };

    const handleResize = () => {
      const newCardsPerView = getCardsPerView();
      setCardsPerView(newCardsPerView);
      
      // Reset currentIndex if it exceeds the new limit
      if (currentIndex >= cards.length - newCardsPerView) {
        setCurrentIndex(cards.length - newCardsPerView);
      }
    };

    // Set initial cardsPerView
    setCardsPerView(getCardsPerView());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const nextSlide = () => {
    if (currentIndex < cards.length - cardsPerView) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImg}>
          <Image
            src="/image/about.png"
            alt="about image"
            width={500}
            height={500}
          />
        </div>

        <div className={styles.aboutContent}>
          <h3>
            We Are <span>Increasing Business</span> Success with IT Courses
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Adipiscing elit sed
            do eiusmod tempor consectetur adipiscing elit, sed incididunt ut
            labore et dolore.
          </p>

          <div className={styles.aboutDetails}>
            <div className={styles.aboutCompany}>
              <div className={styles.icon}>
                <PiCertificateBold />
              </div>
              <div className={styles.info}>
                <h4>Certified Company</h4>
                <p>Best Provide Skill Services</p>
              </div>
            </div>

            <div className={styles.aboutTeam}>
              <div className={styles.icon}>
                <FaPeopleLine />
              </div>
              <div className={styles.info}>
                <h4>Expert Team</h4>
                <p>100% Expert Team</p>
              </div>
            </div>
          </div>

          <div className={styles.aboutDetails}>
            <div className={styles.aboutBtn}>
              <button>
                Explore More
                <IoIosArrowForward style={{ marginLeft: "8px" }} />
              </button>
            </div>

            <div className={styles.aboutContact}>
              <div className={styles.icon}>
                <FaSquarePhone />
              </div>
              <div className={styles.info}>
                <h4>Call Us On:</h4>
                <p>+91 12345 67890</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Remaining sections... */}

      <div className={styles.teamContainer}>
        <h2>
          See Our Skilled Expert <span>Team</span>
        </h2>
        <p>TEAM MEMBERS</p>

        <div className={styles.imageSliders}>
          <div className={styles.cardSliderContainer}>
            <button
              className={styles.navButton}
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              <AiOutlineLeft />
            </button>

            <div className={styles.cardslider}>
              <div
                className={styles.cardWrapper}
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / cardsPerView)
                  }%)`,
                }}
              >
                {cards.map((card, index) => (
                  <div key={index} className={styles.cardItem}>
                    <img
                      src={card.img}
                      alt="Card"
                      className={styles.cardImages}
                    />
                    <div className={styles.teamDetails}>
                      <h4>{card.name}</h4>
                      <p>{card.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className={styles.navButton}
              onClick={nextSlide}
              disabled={currentIndex >= cards.length - cardsPerView}
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
