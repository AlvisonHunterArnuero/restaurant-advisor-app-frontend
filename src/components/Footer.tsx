import React from 'react'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const footerLinks = ["About", "Privacy Policy", "Licensing", "Contact"];
    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentYear} <a href="https://codecrafterslabs.com/" className="hover:underline">CodeCrafters Labs™</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                {footerLinks.map((el, inx) => {
                    return (<li key={inx}>
                        <a href="#" className="hover:underline me-4 md:me-6">{el}</a>
                    </li>)
                })}
            </ul>
        </footer>
    )
}

export default Footer