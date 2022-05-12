import React, { 
  useState, 
  useEffect 
} from 'react';

import { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { Button } from 'antd';

import Container from './Container';


const Profile = () => {

  useEffect(
    () => {
      checkUser()
    }, []
  );

  const [user, setUser] = useState({});
  
  const checkUser = async () => {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = { 
        username: data.username, 
        ...data.attributes
      };
      setUser(userInfo);
    } 
    catch (err) { 
      console.error('error: ', err);
    }
  };


  return (
    <Container>
      <Authenticator>
        {({signOut, user }) => (          
          <main>
            <h1>
              Hello {user.username}
            </h1>
            <h2>
              Email: {user.attributes.email}
            </h2>
            <h3>
              Phone: {user.attributes.phone_number}
            </h3>
            <Button
              type='primary'
              size='large'
              onClick={signOut}
            >
              Sign out
            </Button>
          </main>
        )}
      </Authenticator>
    </Container>
  );
};

export default Profile;