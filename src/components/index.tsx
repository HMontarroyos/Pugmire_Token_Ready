import { lazy } from "react";

import Button from "./Button";
import Title from "./Title";
import Loading from "./Loading";
import HeaderAnimation from "./HeaderAnimation";
import LinkRedirect from "./LinkRedirect";

const Header = lazy(async () => await import("./Header"));
const Footer = lazy(async () => await import("./Footer"));

export {
  Button,
  Header,
  Footer,
  Title,
  Loading,
  HeaderAnimation,
  LinkRedirect
};
