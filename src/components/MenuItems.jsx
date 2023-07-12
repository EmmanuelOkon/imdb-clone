import Link from "next/link";
import "../app/globals.css";

export default function MenuItem({
  title,
  address,
  Icon,
  isActive,
  onItemClick,
}) {
  return (
    <div>
      <Link href={address} onClick={() => onItemClick(address)}>
        <Icon
          className={`text-2xl sm:hidden border-none  leading-none px- flex ${
            isActive
              ? "text-amber-600 font-semibold border-b-[3px]  border-b-amber-600"
              : "hover:text-amber-700"
          }`}
        />
        <p
          className={`hidden sm:flex sm:items-center py-2 text-2xl leading-none  px-4 lg:px-6 flx ${
            isActive
              ? "text-amber-600 font-semibold border-b-[3px]  border-b-amber-600"
              : "hover:text-amber-700"
          }`}
        >
          {title}
        </p>
      </Link>
    </div>
  );
}
