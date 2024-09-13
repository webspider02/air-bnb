import Card from './Card';
import Header from './Header';
import Hero from './Hero';
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
        </>
    );
}