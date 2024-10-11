import Link from "next/link";
export default function Footer() {
    return (
        <footer >
            <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
            <ul >
                <li >
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a>
                </li>
                <li >
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                </li>
                <li >
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </li>
            </ul>
        </footer>
    );
}

