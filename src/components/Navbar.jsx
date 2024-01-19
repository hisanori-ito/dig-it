import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
        <NavbarItem title="🇬🇧" param="GB" />
        <NavbarItem title="🇫🇷" param="FR" />
        <NavbarItem title="🇩🇪" param="DE" />
        <NavbarItem title="🇯🇵" param="JP"/>
        <NavbarItem title="🇰🇷" param="KR"/>
        <NavbarItem title="🇻🇳" param="VN"/>
        <NavbarItem title="🇳🇬" param="NG"/>
        <NavbarItem title="🇪🇬" param="EG"/>
    </div>
  )
}
