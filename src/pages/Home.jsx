import { Link } from 'react-router-dom'
import Header from '../components/Header'
import './Home.css'
import ProductCard from '../components/ProductCard'
import products from '../data/products'

export default function Home() {
  return (
    <div className="home">
        <div className="hero">
            <div className="text">
                <h1>Easy way to find <br/> your Dream Place</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br/> sint. Velit officia consequat duis enim velit mollit. Exercitation veni.</p>
                <Link to="/products"><button>Products</button></Link>
                <hr/>
                <div className="stats">
                    <p>1500+</p>
                    <p>324k+</p>
                    <p>1200+</p>
                </div>
            </div>
            <div className="image">
                <img src="../src/assets/images/Image.png" alt="house"/>            
            </div>
        </div>

        <div className="info">
            <div className="info-content">
                <div><img src="../src/assets/images/Rectangle 7.png" alt="Rectangle" /></div>
                <div className="info-text">
                    <h2>We are your partner in creating <br/> a legacy building facade.</h2>
                    <p>Ac, sit tincidunt commodo tincidunt. Mattis metus purus quam fames in vitae fringilla tempor. Non in in sodales suspendisse egestas integer iaculis semper ultrices. Lectus dui in pulvinar orci ut fermentum tortor mi, at. In adipiscing arcu, consectetur lacus eu. <br /> <br /> Non, augue integer augue accumsan ante. Ultricies libero condimentum amet, enim sit neque nascetur mollis cursus. Pellentesque tincidunt libero, in pharetra, nunc. Tincidunt egestas amet tincidunt consequat in sed arcu turpis neque. <br /> <br /> Nam elementum aliquet integer sit condimentum sed. Pulvinar aliquam nascetur maecenas risus vestibulum eu. Pellentesque non molestie est mauris tristique pretium. Congue ac et neque vulputate et morbi gravida. </p>
                </div>
            </div>
        </div>

        <div className="featured-properties">
            <div className="feature-properties-header">
                <h2>Featured Properties</h2>
                <Link to="/products">See all</Link>
            </div>
            <div className="product-cards">
                {products.slice(0, 3).map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>

        <div className="video">
            <div className="video-text">
                <h2>Your dream house is no longer a dream.</h2>
                <p>Ac, sit tincidunt commodo tincidunt. Mattis metus purus quam fames in vitae fringilla tempor. Non in in sodales suspendisse <br/> egestas integer iaculis semper ultrices. Lectus dui in pulvinar orci ut fermentum tortor mi, at.</p>                
            </div>
            <div className="video-container">
                <img src="../src/assets/images/Video.png" alt="video(img)"/>
            </div>
        </div>

        <div className="out-service">
            <div className="out-service-header"><h2>Out Service</h2></div>
            <div className="out-service-cards">
                 <div className="out-service-card">
                <div>
                    <div><img src="../src/assets/icons/Icon.png" alt="photo" /></div>
                </div>
                <h2>Property Management</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.</p>
            </div>

            <div className="out-service-card">
                <div>
                    <div><img src="../src/assets/icons/Icon (1).png" alt="photo" /></div>
                </div>
                <h2>Home Buying</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.</p>
            </div>

            <div className="out-service-card">
                <div>
                    <div><img src="../src/assets/icons/Icon (2).png" alt="photo" /></div>
                </div>
                <h2>Consulting Service</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.</p>
            </div>

                        <div className="out-service-card">
                <div>
                    <div><img src="../src/assets/icons/Icon (3).png" alt="photo" /></div>
                </div>
                <h2>Mortgage Service</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.</p>
            </div>

                <div className="out-service-card">
                <div>
                    <div><img src="../src/assets/icons/Icon (5).png" alt="photo" /></div>
                </div>
                <h2>Home Selling</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.</p>
            </div>

                <div className="out-service-card">
                <div>
                    <div><img src="../src/assets/icons/Icon (6).png" alt="photo" /></div>
                </div>
                <h2>Escrow Service</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.</p>
            </div>
            </div>
        </div>

        <div className="our-portfolio">
            <div className="our-portfolio-header">
                <h2>Our Portfolio</h2>
            </div>
            <div className="our-portfolio-images">
                <div><img src="../src/assets/images/Image (1).png" alt="img" /></div>
                <div><img src="../src/assets/images/Image (2).png" alt="img" /></div>
                <div><img src="../src/assets/images/Image (3).png" alt="img" /></div>
                <div><img src="../src/assets/images/Image (4).png" alt="img" /></div>
                <div><img src="../src/assets/images/Image (5).png" alt="img" /></div>
                <div><img src="../src/assets/images/Image (6).png" alt="img" /></div>
            </div>
        </div>
    </div>
  )
}

