import React from 'react';
import Navbar from "../components/Navbar";
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import CardContainer from "../components/CardContainer";
import { Footer } from 'antd/es/layout/layout';
const Homepage = () => {
  return (
    <>
      <Navbar>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '20px',
            marginLeft: '100px',
          }}
        >
          <h1>TECHHUB SHOP</h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              width: '100%',
              marginTop: 20,
              gap: '10px',
              marginRight: '100px',


            }}
          >
            <Button
              style={{
                borderColor: 'white',
                height: '40px',
                width: '100px',
                borderRadius: 15,
              }}
            >Login</Button>
            <Button
              style={{
                background: '#fa8c16',
                color: 'white',
                borderColor: '#fa8c16',
                height: '40px',
                width: '120px',
                borderRadius: 15,
              }}
            >Create Account</Button>
          </div>
        </div>

        <div
          style={{
            width: '100%',
            maxWidth: '600px',
            marginTop: '50px',
            textAlign: 'center',
            margin: 'auto',
          }}
        >
          <h2
            style={{
              color: 'white',
              fontSize: 50,
              marginBottom: '20px',
            }}
          >
            Iscriviti alla nostra Newsletter
          </h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <input
              style={{
                width: '100%',
                maxWidth: '300px',
                height: '40px',
                border: '1px solid black',
                borderRadius: '15px',
                background: '#434343',
                color: 'white',
                padding: '10px',
              }}
              placeholder="User email"
              type="text"
            />
            <Button
              style={{
                background: '#fa8c16',
                color: 'white',
                marginLeft: '10px',
                borderColor: '#fa8c16',
                height: '40px',
                borderRadius: '15px',
              }}
            >Iscriviti</Button>
          </div>
        </div>

        <hr
          style={{
            width: '80%',
            height: '1px',
            background: '#434343',
            marginTop: '50px',
          }}
        />
        <div
          style={{
            height: '3px',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            marginTop: 40,
            marginLeft: '140px',
          }}
        >
          <h2>Discover our platform</h2>

        </div>
        <hr
          style={{
            width: '80%',
            height: '1px',
            background: '#434343',
            marginTop: '50px',
          }}
        />

        <CardContainer />

        <hr
          style={{
            width: '80%',
            height: '1px',
            background: '#434343',
            marginTop: '-1px'
          }}
        />
        <div
          style={{
            height: '50px',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            marginTop: 30,
            marginLeft: '140px',
          }}
        >
          <h2
            style={{ color: 'white', marginBottom: 40 }}>Join the TechHub community</h2>

        </div>
        <hr
          style={{
            width: '80%',
            height: '1px',
            background: '#434343',

          }}
        />

        <div className="responsive-section">
          <img
            style={{
              marginTop: '30px',
              borderRadius: '50%',
            }}
            src='https://picsum.photos/200/200'></img>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'start',
              flexDirection: 'column',
              width: '220px',
            }}>
            <h2>As a tech enthusiast</h2>
            <p
              style={{ color: 'white', textAlign: 'start', fontWeight: 'bold' }}>
              Explore latest tech trends and gadgets. Join our community now.
            </p>
            <Button
              style={{
                borderColor: 'white',
                height: '40px',
                width: '130px',
                borderRadius: 15,
                fontWeight: 'bold'
              }}
            >Join us</Button>
          </div>
        </div>
        <hr
          style={{
            width: '80%',
            height: '1px',
            background: '#434343',

          }}
        />

        <div  className="responsive-section">
          <img
            style={{
              marginTop: '30px',
              borderRadius: '50%',
            }}
            src='https://picsum.photos/200/202'></img>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'start',
              flexDirection: 'column',
              width: '220px',
            }}>
            <h2>As a partner</h2>
            <p
              style={{ color: 'white', textAlign: 'start', fontWeight: 'bold' }}>
              TechHub supports tech businesses with online sales, marketing tools,and more.
            </p>
            <Button
              style={{
                borderColor: 'white',
                height: '40px',
                width: '150px',
                borderRadius: 15,
                fontWeight: 'bold'
              }}
            >Collaborate with us</Button>
          </div>
        </div>
        <hr
          style={{
            width: '80%',
            height: '1px',
            background: '#434343',

          }}
        />

        <div className="responsive-section">
          <img
            style={{
              marginTop: '30px',
              borderRadius: '50%',
            }}
            src='https://picsum.photos/200/203'></img>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'start',
              flexDirection: 'column',
              width: '220px',
            }}>
            <h2>As a team member </h2>
            <p
              style={{ color: 'white', textAlign: 'start', fontWeight: 'bold' }}>
              Join a team dedicated to revolutionizing tech shopping experience.
            </p>
            <Button
              style={{
                borderColor: 'white',
                height: '40px',
                width: '150px',
                borderRadius: 15,
                fontWeight: 'bold'
              }}
            >Join our team</Button>
          </div>
        </div>
        <hr
          style={{
            width: '80%',
            height: '1px',
            background: '#434343',
            marginTop: '-1px'
          }}
        />
        <div
          style={{
            height: '50px',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            marginTop: 30,
            marginLeft: '140px',
          }}
        >
          <h2
            style={{ color: 'white', marginBottom: 40 }}>Get our webapp</h2>

        </div>
        <hr
          style={{
            width: '80%',
            height: '1px',
            background: '#434343',

          }}
        />

        <div
          style={{ display: 'flex', justifyContent: 'space-evenly', }}>


          <div className='responsive-section-end'>  
           
            <h2>Shop hassle-free!</h2>
            <p
              style={{ color: 'white', textAlign: 'start', fontWeight: 'bold' }}>
              Experience top tech products at TechHub. Our platform offers a wide selection of gadgets for tech enthusiasts.
            </p>
            <Button
              style={{
                borderColor: 'orange',
                height: '40px',
                width: '150px',
                borderRadius: 15,
                fontWeight: 'bold',
                backgroundColor: 'orange',
                color: 'white'
              }}
            >Get app</Button>
          </div>
          <img
            style={{
              marginTop: '30px',
              borderRadius: '50%',
            }}
            src='https://picsum.photos/200/204'></img>
        </div>





      </Navbar>
      <Footer
        style={{
          background: '#434343',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <h2
          style={{ color: 'white', marginBottom: 40, width: '30px' }}>TECHHUB SHOP</h2>


        <div
          style={{ display: 'flex', justifyContent: 'space-evenly', width: '50%' }}>
          <div
            style={{ color: 'white', display: 'flex', flexDirection: 'column' }}>
            <p>Community</p>
            <p>Twitter</p>
            <p>Pinterest</p>
            <p>Youtube</p>
          </div>
          <div
            style={{ color: 'white', display: 'flex', flexDirection: 'column' }}>
            <p>Community</p>
            <p>Twitter</p>
            <p>Pinterest</p>
            <p>Youtube</p>
          </div>
          <div
            style={{ color: 'white', display: 'flex', flexDirection: 'column' }}>
            <p>Community</p>
            <p>Twitter</p>
            <p>Pinterest</p>
            <p>Youtube</p>
          </div>
        </div>
      </Footer>






    </>
  )
};

export default Homepage;