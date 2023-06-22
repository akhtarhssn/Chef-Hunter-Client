import { Footer } from "flowbite-react";
import React from "react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const ChefFooter = () => {
  return (
    <Footer>
      <div className="w-full bg-gray-800">
        <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4 container mx-auto max-w-7xl">
          <div>
            <Footer.Title className="text-gray-300" title="Company" />
            <Footer.LinkGroup col={true}>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col={true}>
              <Footer.Link href="#">Discord Server</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col={true}>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms & Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" />
            <Footer.LinkGroup col={true}>
              <Footer.Link href="#">iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
              <Footer.Link href="#">Windows</Footer.Link>
              <Footer.Link href="#">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 py-6 px-4">
          <div className="container mx-auto max-w-7xl sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              className="text-slate-300 font-semibold"
              href="#"
              by="Wixden"
              year={2023}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                className="text-slate-300"
                href="#"
                icon={BsFacebook}
              />
              <Footer.Icon
                className="text-slate-300"
                href="#"
                icon={BsInstagram}
              />
              <Footer.Icon
                className="text-slate-300"
                href="#"
                icon={BsTwitter}
              />
              <Footer.Icon
                className="text-slate-300"
                href="#"
                icon={BsGithub}
              />
              <Footer.Icon
                className="text-slate-300"
                href="#"
                icon={BsDribbble}
              />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default ChefFooter;
