import { useEffect, useState } from "react";

const WebApi = () => {

  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {

    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false)
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    }


  })

  return ( 
      <>
      <p>{isOnline ? '✅ You are now connected to Yasmin' : '❌ Disconnected from Yasmin'}</p>
      </>
   );
}
 
export default WebApi;