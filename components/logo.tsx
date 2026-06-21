import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      className="group inline-flex items-center"
      href="/"
      aria-label="Bonxur, inicio"
    >
      <Image
        alt="Bonxur"
        className="h-[30px] w-auto transition duration-300 group-hover:scale-[1.02] sm:h-8"
        height={76}
        priority
        src={light ? "/images/bonxur-wordmark-light.png" : "/images/bonxur-wordmark.png"}
        width={363}
      />
    </Link>
  );
}
