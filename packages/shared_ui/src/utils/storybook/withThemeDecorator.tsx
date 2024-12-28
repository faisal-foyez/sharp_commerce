import { useState, useEffect } from 'react';
export const withThemeDecorator = (Story: any) => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      setTheme(theme);
    }
  }, []);
  return (
    <div style={{ display: 'flex', gap: '30px', marginTop: '40px', border: '1px solid #D5D5D5', borderRadius: '10px', padding: '20px', width: 'fit-content' }}>
      <style>
        {`
          * {
            box-sizing: border-box;
          }
        `}
      </style>
      <label style={{display: 'flex', alignItems: 'center', gap: '10px', position: 'absolute', top: '10px', right: '10px', }}>
        <input 
          style={{height: '20px', width: '20px'}}
          checked={theme === 'dark'}
          type='checkbox'
          onChange={(e)=>{
            setTheme(e.target.checked ? 'dark' : 'light');
            localStorage.setItem('theme', e.target.checked ? 'dark' : 'light');
            document.body.setAttribute('data-theme', e.target.checked ? 'dark' : 'light');
            document.body.style.backgroundColor = e.target.checked ? '#1C222B' : '#ffffff';
          }}
        />
        <span style={{color: theme === 'light' ? '#000000' : '#ffffff'}}>Dark Mode</span>
      </label>
      <div style={{ padding: '20px', background: theme === 'light' ? '#ffffff' : '#1C222B', color: theme === 'light' ? '#000000' : '#ffffff', position: 'relative' }}>
        <h3 style={{textAlign: 'center'}}>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h3>
        <Story />
      </div>
      {/* <div style={{ padding: '20px', borderRadius: '10px', background: '#1C222B', color: '#ffffff', position: 'relative' }}>
        <h3 style={{ color: '#ffffff', textAlign: 'center' }}>Dark Mode</h3>
        <Story />
      </div> */}
    </div>
  );
};