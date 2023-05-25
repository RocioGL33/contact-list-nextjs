import Link from "next/link";

const Navigation = () => {
  return (
    <div className="">
      <ul className="flex gap-10 justify-center text-xl pt-3">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
