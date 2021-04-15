import Layout from '../components/Layout'; 
import Header from '../components/Header'; 
import Hero from '../components/Hero';
import Feature from '../components/Feature'; 
import Footer from '../components/Footer'
import Contact from '../components/Contact';

const Index = () => {
  return (
    <Layout pageTitle="Bountifull">
      <Header />
      <Hero />
      <Feature />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default Index;