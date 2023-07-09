import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} className="mx4 lgmx-6 hover:text-amber-600">
        <Icon className="text-2xl sm:hidden " />
        <p className="hidden sm:flex items-center py2 text-sm ">{title}</p>
      </Link>
    </div>
  );
}
