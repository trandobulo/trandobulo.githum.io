import Typed from 'react-typed';


function HeaderMid(){

  const textLines = [
    'Junior Frontend Developer',
    'Photography',

  ];
  
  const App = () => (
      <Typed strings={textLines} typeSpeed={60} backSpeed={40} loop={true} />
  );

  return(
        <div className="headerMid">
            <h2>Hello,</h2>
            <h1>I'm Alex</h1>
            <h1 id="textTyping"><App /></h1>
        </div>
        
    )
}

export default HeaderMid