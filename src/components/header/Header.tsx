import { useEffect, useState, type JSX } from "react";
import { BtnSign, Logo, Navigation, NavigationMenuToggle } from "../index";
import { AiOutlineMenu } from "react-icons/ai";
import { RiMenu5Fill } from "react-icons/ri";

export const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleToggleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  // header component with logo and navigation
  return (
    <header className="lg:border-b lg:border-gray--100 fixed top-0 left-0 w-full bg-white z-50">
      <div className=" mx-auto px-28 py-3 max-sm:px-4 flex justify-between items-center w-full relative">
        <div className="max-lg:hidden">
          <Logo />
        </div>
        {/* responsive logo and toggle button */}
        <div className="max-lg:flex hidden items-center gap-4">
          <button
            type="button"
            onClick={handleToggleClick}
            className="flex justify-center items-center cursor-pointer">
            {isMenuOpen ? (
              <RiMenu5Fill className="w-6 h-6" />
            ) : (
              <AiOutlineMenu className="w-6 h-6" />
            )}
          </button>
          <Logo />
        </div>
        <Navigation />
        <BtnSign />
        <NavigationMenuToggle isMenuOpen={isMenuOpen} />
      </div>
    </header>
  );
};
