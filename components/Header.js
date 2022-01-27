import Image from 'next/image';
import Link from 'next/link';
import data from '../data/headerSection.json';
import {FaBars} from 'react-icons/fa'
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
            <div className="btn-try" >
                <FaBars id='bars'/>
                <a href="https://tally.so/r/nGkq2n" id='editable'><button>
                    Early Access
                </button>
                </a>
            </div>
        </header>
    )
};

export default Header;