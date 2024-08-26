import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const CustomCard = ({ title, description }) => (
  <Card
     className="custom-card"
  >
    <Meta 
      title={<span style={{ color: 'white', fontWeight: 'bold', fontSize:20, }}>{title}</span>} 
      description={<span style={{ color: 'white' }}>{description}</span>} 
    />
  </Card>
);

const CardContainer = () => (
  <div className="card-container">
    <CustomCard 
      title="Step 1" 
      description="Enter your email. Sign up or log in to access all features" 
    />
    <CustomCard 
      title="Step 2" 
      description="Browse products and add to cart. You're one step close to tech paradise." 
    />
    <CustomCard 
      className="step3"
      title="Step 3" 
      description="Complete your purchase. Enjoy our fast delivery service!" 
    />
  </div>
);

export default CardContainer;
