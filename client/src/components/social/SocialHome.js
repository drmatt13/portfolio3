import { useEffect } from 'react';
import { logoTransparent } from '../../actions/globalActions';

const SocialHome = () => {

  useEffect(() => {
    logoTransparent(true);
  }, []);


return (
    <div>
      social home
    </div>
  )
}

export default SocialHome
