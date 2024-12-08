export const withThemeDecorator = (Story: any) => {
  return (
    <div style={{ display: 'flex', gap: '30px' }}>
      <style>
        {`
          * {
            box-sizing: border-box;
          }
        `}
      </style>
      <div style={{ padding: '20px', background: '#ffffff' }}>
        <h3 style={{textAlign: 'center'}}>Light Mode</h3>
        <Story />
      </div>
      <div data-theme='dark' style={{ padding: '20px', borderRadius: '10px', background: '#1C222B', color: '#ffffff' }}>
        <h3 style={{ color: '#ffffff', textAlign: 'center' }}>Dark Mode</h3>
        <Story />
      </div>
    </div>
  );
};