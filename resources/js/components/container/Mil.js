import React, {useState} from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Sonnet from './Sonnet'
import Sonnet1 from './Sonnet1'
import Sonnet2 from './Sonnet2'

export default function Mil() {
    const [key, setKey] = useState('home');
  
    return (
      <div className="tabs flex-auto">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        
        <Tab eventKey="home" title="3 dias">
          <Sonnet />
        </Tab>
        <Tab eventKey="profile" title="6 dias">
          <Sonnet1 />
        </Tab>
        <Tab eventKey="contact" title="15 dias">
          <Sonnet2 />
        </Tab>
      </Tabs>
      </div>
    );
  }
