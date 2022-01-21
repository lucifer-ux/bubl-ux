import Image from 'next/image';
import Link from 'next/link';
import data from '../data/headerSection.json';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link href="/">
                    <a>
                        <Image src={data.logo} width={130} height={130} />
                    </a>
                </Link>
            </div>
            <div className="btn-try">
                <a href="https://tally.so/r/nGkq2n"><button>
                    Early Access
                </button>
                </a>
            </div>
        </header>
    )
};

export default Header;