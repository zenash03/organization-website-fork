import { Article, Gauge, UserList, UsersThree } from "@phosphor-icons/react";

export const navbarLinks = [
  {
    route: "/",
    label: "Beranda"
  },
  {
    route: "/tentang-kami",
    label: "Tentang Kami"
  },
  {
    route: "/divisi",
    label: "Divisi"
  },
  {
    route: "/kontak",
    label: "Kontak"
  },
];

export const sidebarLinks = [
  {
    route: "/admin",
    label: "Dashboard",
    icon: <Gauge size={36} />
  },
  {
    route: "/admin/divisions",
    label: "Divisi",
    icon: <UsersThree size={36} />
  },
  {
    route: "/admin/members",
    label: "Anggota",
    icon: <UserList size={36} />
  },
  {
    route: "/admin/activities",
    label: "Aktivitas UKM",
    icon: <Article size={36} />
  },
];