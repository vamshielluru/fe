import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  let navigate=useNavigate();
  return (
    <div style={{fontFamily:"Arial"}}>
      

      {/* Navbar */}
     
<nav style={styles.nav}>
  <h2 style={{ color: "#2e7d32" }}>KisanMart</h2>
  <div>
    <a href="#features" style={styles.link}>Features</a>
    <a href="#products" style={styles.link}>Products</a>
    <a href="#contact" style={styles.link}>Contact</a>

    {/* Register Button */}
    <button
      style={styles.registerBtn}
      onClick={() => { navigate('/register'); }}
    >
      Register
    </button>

    {/* Login Button */}
    <button
      style={styles.loginBtn}
      onClick={() => { navigate('/login'); }}
    >
      Login
    </button>
  </div>
</nav>
🎨 

       {/* Hero Section */}
      <section style={styles.hero}>
        <h1>Empowering Farmers with Smart Agriculture</h1>
        <p>Buy quality seeds, fertilizers, and farming tools directly from KisanMart.</p>
        <button style={styles.cta}>Shop Now</button>
      </section>

      {/* Features */}
      <section id="features" style={styles.section}>
        <h2>Our Features</h2>

        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>Quality Products</h3>
            <p>Certified seeds, fertilizers and tools.</p>
          </div>

          <div style={styles.card}>
            <h3>Best Prices</h3>
            <p>Affordable prices directly for farmers.</p>
          </div>

          <div style={styles.card}>
            <h3>Fast Delivery</h3>
            <p>Quick delivery to rural areas.</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" style={styles.section}>
        <h2>Popular Products</h2>

        <div style={styles.cardContainer}>
          <div style={styles.product}>
            <img src="https://images.unsplash.com/photo-1598514982821-01a5c2d52c5a" width="150"/>
            <h4>Organic Seeds</h4>
            <p>₹200</p>
          </div>

          <div style={styles.product}>
            <img src="https://images.unsplash.com/photo-1602536043563-7caa17c7f6b6" width="150"/>
            <h4>Fertilizer Pack</h4>
            <p>₹500</p>
          </div>

          <div style={styles.product}>
            <img src="https://images.unsplash.com/photo-1592928302636-c83cfb5127d4" width="150"/>
            <h4>Farming Tools</h4>
            <p>₹1500</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <h2>Join KisanMart Today</h2>
        <p>Grow your farming with better tools and products.</p>
        <button style={styles.cta}>Get Started</button>
      </section>

      {/* Footer */}
      <footer id="contact" style={styles.footer}>
        <p>© 2026 KisanMart. All Rights Reserved.</p>
      </footer>

    </div>
  );
};

const styles = {
  nav:{
    display:"flex",
    justifyContent:"space-between",
    padding:"15px 50px",
    background:"#f5f5f5",
    alignItems:"center"
  },

  link:{
    margin:"0 15px",
    textDecoration:"none",
    color:"#333"
  },

  loginBtn:{
    padding:"8px 16px",
    background:"#2e7d32",
    color:"white",
    border:"none",
    borderRadius:"5px"
  },

  registerBtn: {
  padding: "8px 16px",
  background: "transparent",
  color: "#2e7d32",
  border: "2px solid #2e7d32",
  borderRadius: "5px",
  marginRight: "10px",
  cursor: "pointer"
},

  hero:{
    textAlign:"center",
    padding:"100px 20px",
    background:"#e8f5e9"
  },

  cta:{
    marginTop:"20px",
    padding:"12px 25px",
    background:"#2e7d32",
    color:"white",
    border:"none",
    borderRadius:"6px",
    fontSize:"16px"
  },

  section:{
    padding:"60px 20px",
    textAlign:"center"
  },

  cardContainer:{
    display:"flex",
    justifyContent:"center",
    gap:"20px",
    marginTop:"30px",
    flexWrap:"wrap"
  },

  card:{
    padding:"20px",
    width:"220px",
    border:"1px solid #ddd",
    borderRadius:"8px",
    background:"#fff"
  },

  product:{
    padding:"20px",
    width:"200px",
    border:"1px solid #ddd",
    borderRadius:"8px"
  },

  ctaSection:{
    padding:"70px",
    background:"#c8e6c9",
    textAlign:"center"
  },
 
  footer:{
    padding:"20px",
    background:"#2e7d32",
    color:"white",
    textAlign:"center"
  }
};

export default LandingPage;