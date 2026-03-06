"use client";
import { EnagramIcon } from "@/public/icons/EnagramIcon";
import styles from "./Navbar.module.scss";
import { ABCIcon } from "@/public/icons/ABCIcon";
import { AaIcon } from "@/public/icons/AaIcon";
import { MicIcon } from "@/public/icons/MicIcon";
import { VoiceIcon } from "@/public/icons/VoiceIcon";
import { DocumentIcon } from "@/public/icons/DocumentIcon";
import { ArrowRightIcon } from "@/public/icons/ArrowRightIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "@/public/icons/MenuIcon";
import { DotsIcon } from "@/public/icons/DotsIcon";
import { ProfileIcon } from "@/public/icons/ProfileIcon";

export const Navbar = () => {
  const router = usePathname();

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <div>
          <div className={styles.logoCont}>
            <EnagramIcon />
            <div className={styles.menuIconCont}>
              <MenuIcon />
            </div>
          </div>
          <ul>
            <li>
              <Link href={"href"}>
                <ABCIcon />
                <span>მართლწერა</span>
              </Link>
            </li>
            <li className={router === "/" ? styles.active : ""}>
              <div>
                <div></div>
              </div>
              <Link href={"/"}>
                <AaIcon color={router === "/" ? "blue" : ""} />
                <span>ტექსტის შედარება</span>
              </Link>
              <div>
                <div className={styles.bottomBorder}></div>
              </div>
            </li>
            <li>
              <Link href={"href"}>
                <MicIcon />{" "}
                <span>
                  <span>ხმა</span>
                  <ArrowRightIcon /> <span>ტექსტი</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href={"href"}>
                <VoiceIcon />{" "}
                <span>
                  <span>ტექსტი</span>
                  <ArrowRightIcon /> <span>ხმა</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href={"href"}>
                <DocumentIcon /> <span>PDF კონვერტაცია</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.user}>
          <div className={styles.hr}></div>
          <div className={styles.userName}>
            <p>
              <ProfileIcon />
              <span>თამარ ონიანი</span>
            </p>
            <p>
              <DotsIcon />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
