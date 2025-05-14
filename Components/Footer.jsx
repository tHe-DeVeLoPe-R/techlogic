import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css'; // Import the CSS Module

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.sections}>
          <div>
            <h3 className={styles.heading}>Explore</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Link href="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/projects" className={styles.link}>
                  Projects
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/domains" className={styles.link}>
                  Domains
                </Link>
              </li>
             
            </ul>
          </div>
          <div>
            <h3 className={styles.heading}>Services</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Link href="/domains" className={styles.link}>
                  Web Development
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/domains" className={styles.link}>
                  Desktop Apps
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/domains" className={styles.link}>
                  Design Documentation
                </Link>
              </li>
              {/* Add more services */}
            </ul>
          </div>
          <div>
            <h3 className={styles.heading}>Keywords</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Link href="/" className={styles.link}>
                  Computer Science
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/" className={styles.link}>
                  Software
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/privacy-policy" className={styles.link}>
                  Technology
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.heading}>Contact Us</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Email: <a href="mailto:info@example.com" className={styles.link}>thetechlogicofficial@gmail.com</a></li>
              <li className={styles.listItem}>Phone: <a href="tel:+1234567890" className={styles.link}>+923494034106</a></li>
              <li className={styles.listItem}>S - Type: Remote</li>
            </ul>
          </div>
        </div>

        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Tech Logic. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}