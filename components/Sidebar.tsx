import {
  BellIcon,
  BookmarkIcon,
  EllipsisHorizontalCircleIcon,
  EnvelopeIcon,
  HashtagIcon,
  HomeIcon,
  UserCircleIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <img
        className="m-3 h-10 w-10"
        src="https://links.papareact.com/drq"
        alt=""
      />
      <SidebarRow Icon={HomeIcon} title="首頁" />
      <SidebarRow Icon={HashtagIcon} title="探索" />
      <SidebarRow Icon={UsersIcon} title="社群" />
      <SidebarRow Icon={BellIcon} title="通知" />
      <SidebarRow Icon={EnvelopeIcon} title="訊息" />
      <SidebarRow Icon={BookmarkIcon} title="書籤" />
      <SidebarRow Icon={UserIcon} title="個人資料" />
      <SidebarRow
        onClick={session ? signOut : signIn}
        Icon={UserCircleIcon}
        title={session ? "登出" : "登入"}
      />
      <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="更多" />
    </div>
  );
}

export default Sidebar;
