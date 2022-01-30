import Image from 'next/image';
import data from "../data/heroSection.json";


const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container-hero">

                <div className="content-hero">

                    <div className="left-side">
                        <h1>{data.title}
                        <div className='hero-animation'>
                            <span className='hero-span-animation'>
                                <span className='hide'> -</span>
                                 simple <br/>
                                 <span className='hide'> -</span>
                                secure <br/>
                                <span className='hide'> -</span>
                                easy<br/>
                                <span className='hide'> -</span>
                                better <br/>
                            </span>
                        </div>
                        </h1>
                        <p>{data.description}</p>
                        {/* <form>
                            <div className="form-group">
                                <input type="email" placeholder="Name@company.com" />
                                <button type="submit" >Drop your mail</button>
                            </div>
                        </form> */}
                    </div>


                    <div className="right-side">
                        <Image src="/LOGO.svg" layout="fill" className='edited' />
                    </div>

                </div>

            </div>
        </section>
    )
}


export default Hero;
