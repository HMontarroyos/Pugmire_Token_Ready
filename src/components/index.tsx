import { lazy } from "react";

import Loading from "./Loading";
import HeaderAnimation from "./HeaderAnimation";
import LinkRedirect from "./LinkRedirect";
import Modal from "./Modal"

const Header = lazy(async () => await import("./Header"));
const Footer = lazy(async () => await import("./Footer"));

export {
  Header,
  Footer,
  Loading,
  HeaderAnimation,
  LinkRedirect,
  Modal
};
