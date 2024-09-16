import Card from './Card';
import Header from './Header';
import Hero from './Hero';
import data from '../data';
import '../styles.css';

export default function App() {
    return (
        <>
         <Header
            img="./images/zafiris.png"
         />
         <Hero/>
         <Card
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life lessons with Katie Zaferes"
            price={136}
         />
         <Card 
            rating={data.stats.rating}
            reviewCount={data.stats.reviewCount}
            country={data.location}
            title={data.title}
            price={data.price}
         />
        </>
    );
}