import './App.css';
import React, { useState } from 'react';
import Home from './components/home/home';
import Menu from './components/menu/menu';
import SoftSkills from './components/softSkills/softSkills';
import HardSkills from './components/hardSkills/hardSkills';
import Experiences from './components/experiences/experiences';
import Contact from './components/contact/contact';

function App() {

  const [menuSelect, setMenuSelect] = useState(1);
  const [menuWillSelect, setMenuWillSelect] = useState(1);
  const [menuPreviousSelect, setPreviousSelect] = useState(1);
  const [animateEnd, setAnimateEnd] = useState(false);
  const [menuDisabled, setMenuDisabled] = useState(false);

  const onSelectChange = (selectValue) => {
    if (selectValue === menuSelect) {
      return;
    }
    setMenuDisabled(true);
    setPreviousSelect(menuSelect);
    setMenuWillSelect(selectValue);
    setAnimateEnd(true);
    setTimeout(() => {
      setMenuSelect(selectValue);
      setMenuDisabled(false);
    }, 2500);
  }

  return (
    <div className='app'>
      {
        menuSelect === 1 ?
          <Home menuWillSelect={menuWillSelect} animateEnd={animateEnd} setAnimateEnd={setAnimateEnd} menuPreviousSelect={menuPreviousSelect} />
          :
          menuSelect === 2 ?
            <SoftSkills menuWillSelect={menuWillSelect} animateEnd={animateEnd} setAnimateEnd={setAnimateEnd} menuPreviousSelect={menuPreviousSelect} />
            :
            menuSelect === 3 ?
              <HardSkills menuWillSelect={menuWillSelect} animateEnd={animateEnd} setAnimateEnd={setAnimateEnd} menuPreviousSelect={menuPreviousSelect} />
              :
              menuSelect === 4 ?
                <Experiences menuWillSelect={menuWillSelect} animateEnd={animateEnd} setAnimateEnd={setAnimateEnd} menuPreviousSelect={menuPreviousSelect} />
                :
                menuSelect === 5 ?
                  <Contact menuWillSelect={menuWillSelect} animateEnd={animateEnd} setAnimateEnd={setAnimateEnd} menuPreviousSelect={menuPreviousSelect} />
                  :
                  ""
      }
      <Menu onSelectChange={onSelectChange} menuSelect={menuWillSelect} menuDisabled={menuDisabled} />
    </div>
  );
}

export default App;
