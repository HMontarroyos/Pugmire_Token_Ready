import {
  Artesão,
  Caçadores,
  Guardiões,
  Rateiros,
  Sacerdotes,
  Selvagens,
} from "../assets/images/Brasão";

export interface Vocation {
  name: string;
  link: string;
  image: string;
}

export const Vocations: Vocation[] = [
  {
    name: "Artesão",
    link: "https://drive.google.com/file/d/14smcgjdm6LJpwK-c2_yTesh8epkv4HIa/view?usp=drive_link",
    image: Artesão,
  },
  {
    name: "Caçadores",
    link: "https://drive.google.com/file/d/14ujwDpUMeGiSZTOiokl5KezfMRMhJHQG/view",
    image: Caçadores,
  },
  {
    name: "Guardiões",
    link: "https://drive.google.com/file/d/14siRQwtBysBe1bEEjvjz9dRevXSITVfA/view",
    image: Guardiões,
  },
  {
    name: "Rateiros",
    link: "https://drive.google.com/file/d/14ueyo1dXHhstZX-KO6G6AuLJ7nJns_Hi/view",
    image: Rateiros,
  },
  {
    name: "Sacerdotes",
    link: "https://drive.google.com/file/d/14tWSAgXeJFLEmrbt1qK_JDxZLdQWZSXj/view",
    image: Sacerdotes,
  },
  {
    name: "Selvagens",
    link: "https://drive.google.com/file/d/14tgidzEpsSWiDE-mBCpu9A6lUJeab9h9/view",
    image: Selvagens,
  },
];
