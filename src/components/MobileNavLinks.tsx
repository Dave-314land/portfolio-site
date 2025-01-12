import { Github, Linkedin, FileText } from 'lucide-react';

export const MobileNavLinks = ({ isClicked, closeMenu }: { isClicked: boolean, closeMenu: () => void }) => {
  return (
    <>
        <div className="absolute right-2 z-10 mt-3 w-56 md:w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
            <div className="py-1" role="none">
                <li className="list-none">
                    <a
                        href="#about"
                        className="block px-4 py-2 text-md font-semibold text-gray-700 hover:bg-gray-50"
                        role="menuitem"
                        onClick={() => isClicked && closeMenu()}
                    >
                        About
                    </a>
                </li>
                <li className="list-none">
                    <a
                        href="#projects"
                        className="block px-4 py-2 text-md font-semibold text-gray-700 hover:bg-gray-50"
                        role="menuitem"
                        onClick={() => isClicked && closeMenu()}
                    >
                        Projects
                    </a>
                </li>
            </div>
            <hr />
            <div className="py-2 flex">
                <li className="list-none">
                    <a
                        href="https://github.com/Dave-314land"
                        target="_blank" rel="noopener noreferrer"
                        className="block px-4 py-2 text-md font-semibold text-gray-700 hover:bg-gray-50"
                        onClick={() => isClicked && closeMenu()}
                    >
                    <Github/>
                    </a>
                </li>
                <li className="list-none">
                    <a
                        href="https://www.linkedin.com/in/davepiland/"
                        target="_blank" rel="noopener noreferrer"
                        className="block px-4 py-2 text-md font-semibold text-gray-700 hover:bg-gray-50"
                        onClick={() => isClicked && closeMenu()}
                    >
                    <Linkedin />
                    </a>
                </li>
                <li className="list-none">
                    <a
                        href="https://dave-piland-resume.tiiny.site"
                        target="_blank" rel="noopener noreferrer"
                        className="block px-4 py-2 text-md font-semibold text-gray-700 hover:bg-gray-50"
                        onClick={() => isClicked && closeMenu()}
                    >
                        <FileText />
                    </a>
                </li>
            </div>
        </div>
    </>
  )
}
