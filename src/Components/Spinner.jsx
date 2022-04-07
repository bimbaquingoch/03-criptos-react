import PropTypes from "prop-types";

import "../Styles/Spinner.css";

const Spinner = (props) => {
   return (
      <div className='sk-chase'>
         <div className='sk-chase-dot' />
         <div className='sk-chase-dot' />
         <div className='sk-chase-dot' />
         <div className='sk-chase-dot' />
         <div className='sk-chase-dot' />
         <div className='sk-chase-dot' />
      </div>
   );
};

Spinner.propTypes = {};

export default Spinner;
