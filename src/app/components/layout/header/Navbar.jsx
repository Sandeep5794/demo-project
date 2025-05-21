import Link from "next/link";

const Navbar = () => {
    const navData = [
        {id: 1, title: 'Home', url: '/'},
        {id: 2, title: 'About Us', url: ''},
        {id: 3, title: 'Contact Us', url: ''},
    ]
  return (
    <>
      <nav>
        <ul className="flex items-center gap-x-1 lg:gap-x-3">
            {navData.map((item)=> <li key={item?.id}>
                <Link href={item?.url} className="inline-block lg:px-2 px-1 text-sm font-medium">{item?.title}</Link>
            </li>)}
        </ul>
      </nav>
    </>
  );
};

export default Navbar
