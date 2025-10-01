import React from 'react';
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon, TiktokIcon } from './icons/Icons';
import { Page } from '../App';

interface FooterLinkItem {
  text: string;
  href?: string;
  action?: () => void;
}

interface FooterLinkSection {
  title: string;
  links: FooterLinkItem[];
}

interface FooterProps {
    navigateTo: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {

    const footerLinks: FooterLinkSection[] = [
      {
        title: 'About Us',
        links: [
          { text: 'Who we are', href: '#' },
          { text: 'How it works', href: '#' },
          { text: 'Careers', href: '#' },
          { text: 'Media kit', href: '#' },
        ],
      },
      {
        title: 'For Students',
        links: [
          { text: 'Linoone Blog', href: '#' },
          { text: 'Questions and Answers', href: '#' },
          { text: 'Student discount', href: '#' },
          { text: 'Refer a friend', href: '#' },
        ],
      },
      {
        title: 'For Tutors',
        links: [
          { text: 'Become an online tutor', action: () => navigateTo('become-tutor') },
          { text: 'Teach English online', href: '#' },
          { text: 'Teach French online', href: '#' },
          { text: 'See all online tutoring jobs', href: '#' },
        ],
      },
      {
        title: 'For Companies',
        links: [
          { text: 'Corporate language training', href: '#' },
          { text: 'Corporate training blog', href: '#' },
          { text: 'Resource center', href: '#' },
        ],
      },
    ];

    const socialLinks = [
      { Icon: FacebookIcon, href: '#', name: 'Facebook' },
      { Icon: InstagramIcon, href: '#', name: 'Instagram' },
      { Icon: YoutubeIcon, href: '#', name: 'Youtube' },
      { Icon: LinkedinIcon, href: '#', name: 'LinkedIn' },
      { Icon: TiktokIcon, href: '#', name: 'TikTok' },
    ]

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.text}>
                    {link.action ? (
                       <button onClick={link.action} className="text-base text-left text-gray-400 hover:text-white">
                        {link.text}
                       </button>
                    ) : (
                       <a href={link.href} className="text-base text-gray-400 hover:text-white">
                        {link.text}
                       </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                     <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Linoone social</h3>
                     <ul className="mt-4 space-y-3">
                        {socialLinks.map(social => (
                             <li key={social.name}>
                                <a href={social.href} className="flex items-center text-base text-gray-400 hover:text-white">
                                    <social.Icon className="w-5 h-5 mr-2" />
                                    {social.name}
                                </a>
                            </li>
                        ))}
                     </ul>
                </div>
                <div>
                     <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Apps</h3>
                     <div className="mt-4 space-y-3">
                        <a href="#" className="block"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-12"/></a>
                        <a href="#" className="block"><img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="h-12"/></a>
                     </div>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-500">&copy; {new Date().getFullYear()} Linoone Inc. All rights reserved.</p>
           <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="text-sm text-gray-500 hover:text-gray-300">Legal Center</a>
             <a href="#" className="text-sm text-gray-500 hover:text-gray-300">Privacy Policy</a>
             <a href="#" className="text-sm text-gray-500 hover:text-gray-300">Cookie Policy</a>
             <button onClick={() => navigateTo('admin-dashboard')} className="text-sm text-gray-500 hover:text-gray-300">Admin</button>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;